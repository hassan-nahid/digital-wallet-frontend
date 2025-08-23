import { baseApi } from "@/redux/baseApi";
import { UserProfile } from "@/types/user-profile";

export const userProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<{ data: UserProfile }, void>({
      query: () => ({
        url: "user/profile",
        method: "GET",
      }),
      providesTags: ["USER_PROFILE"],
    }),
    updateProfile: builder.mutation<{ data: UserProfile }, Partial<UserProfile>>({
      query: (body) => ({
        url: "user/profile",
        method: "PATCH",
        data: body,
      }),
      invalidatesTags: ["USER_PROFILE"],
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = userProfileApi;
