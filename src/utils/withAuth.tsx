import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types";
import type { ComponentType } from "react";

import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
  return function AuthWrapper() {
    const { data, isLoading } = useUserInfoQuery(undefined);

    if (!isLoading && !data?.data?.email) {
      return <Navigate to="/login" />;
    }

    if (
      requiredRole &&
      !isLoading &&
      requiredRole.toLowerCase() !== data?.data?.role?.toLowerCase()
    ) {
      console.log("User role:", data?.data?.role, "Required role:", requiredRole);
      return <Navigate to="/unauthorized" />;
    }

    return <Component />;
  };
};