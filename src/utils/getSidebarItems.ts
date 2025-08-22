import { role } from "@/constants/role";
import { adminSidebarItem } from "@/routes/adminSidebarItem";
import { userSidebarItem } from "@/routes/userSidebarItem";
import { agentSidebarItem } from "@/routes/agentSidebarItem";
import type { TRole } from "@/types";

export const getSidebarItem = (userRole: TRole) => {
    switch (userRole) {
        case role.agent:
            return [...agentSidebarItem];
        case role.admin:
            return [...adminSidebarItem];
        case role.user:
            return [...userSidebarItem];
        default:
            return [];
    }
}