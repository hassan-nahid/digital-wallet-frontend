import { baseApi } from "@/redux/baseApi";


export const authAPi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo,
            })
        }),
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: userInfo
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["USER"],
        }),


        userInfo: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET",
            }),
            providesTags: ["USER"],
        }),
         changePassword: builder.mutation({
            query: ({ payload }) => ({
                url: `/auth/change-password`,
                method: "PATCH",
                data: payload,
            }),
            invalidatesTags: ["USER"],
        }),
    })
})

export const { useChangePasswordMutation,useRegisterMutation, useLoginMutation, useUserInfoQuery, useLogoutMutation } = authAPi