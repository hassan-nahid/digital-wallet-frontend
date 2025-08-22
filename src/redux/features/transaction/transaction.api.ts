import { baseApi } from "@/redux/baseApi";


export const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        cashIn: builder.mutation({
            query: (transactionInfo) => ({
                url: "transaction/cash-in",
                method: "POST",
                data: transactionInfo
            }),
            invalidatesTags: ["TRANSACTION"],
        }),
        cashOut: builder.mutation({
            query: (transactionInfo) => ({
                url: "transaction/cash-out",
                method: "POST",
                data: transactionInfo
            }),
            invalidatesTags: ["TRANSACTION"],
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

export const { useWalletInfoQuery, useCashOutMutation, useCashInMutation } = transactionApi