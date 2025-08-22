import { baseApi } from "@/redux/baseApi";


export const walletApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["USER"],
        }),
        walletInfo: builder.query({
            query: () => ({
                url: "/wallet/me",
                method: "GET",
            }),
            providesTags: ["WALLET"],
        })
    })
})

export const { useWalletInfoQuery, useLogoutMutation } = walletApi