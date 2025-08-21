import { baseApi } from "@/redux/baseApi";
// import type { IResponse, ISendOtp } from "@/types";
// import type { IVerifyOtp } from "@/types/auth.type";



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
        })
    })
})

export const { useRegisterMutation, useLoginMutation, useUserInfoQuery, useLogoutMutation } = authAPi