import { baseApi } from "@/redux/baseApi";


export const walletApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        blockWallet: builder.mutation({
            query: (userId) => ({
                url: `/wallet/block-wallet/${userId}`,
                method: "PATCH",
            }),
            invalidatesTags: ["WALLET"],
        }),
        unBlockWallet: builder.mutation({
            query: (userId) => ({
                url: `/wallet/unblock-wallet/${userId}`,
                method: "PATCH",
            }),
            invalidatesTags: ["WALLET"],
        }),
        walletInfo: builder.query({
            query: () => ({
                url: "/wallet/me",
                method: "GET",
            }),
            providesTags: ["WALLET"],
        }),
        walletAnalytics: builder.query({
            query: () => ({
                url: "/wallet/analytics",
                method: "GET",
            }),
            providesTags: ["WALLET"],
        }),
        getAllWallet: builder.query({
            query: (params) => ({
                url: "/wallet",
                method: "GET",
                params,
            }),
            providesTags: ["WALLET"],
        })
    })
})

export const {useGetAllWalletQuery, useWalletAnalyticsQuery, useWalletInfoQuery, useBlockWalletMutation,useUnBlockWalletMutation } = walletApi