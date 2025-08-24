import { baseApi } from "@/redux/baseApi";


export const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        cashIn: builder.mutation({
            query: (transactionInfo) => ({
                url: "/transaction/cash-in",
                method: "POST",
                data: transactionInfo
            }),
            invalidatesTags: ["TRANSACTION"],
        }),
        sendMoney: builder.mutation({
            query: (transactionInfo) => ({
                url: "/transaction/send-money",
                method: "POST",
                data: transactionInfo
            }),
            invalidatesTags: ["TRANSACTION"],
        }),
        cashOut: builder.mutation({
            query: (transactionInfo) => ({
                url: "/transaction/cash-out",
                method: "POST",
                data: transactionInfo
            }),
            invalidatesTags: ["TRANSACTION"],
        }),
        adminWithdraw: builder.mutation({
            query: (transactionInfo) => ({
                url: "/transaction/admin-withdraw",
                method: "POST",
                data: transactionInfo
            }),
            invalidatesTags: ["TRANSACTION"],
        }),
        myTransactions: builder.query({
            query: (params) => ({
                url: "/transaction/my-transactions",
                method: "GET",
                params,
            }),
            providesTags: ["TRANSACTION"],
        }),
        myTransactionsById: builder.query({
            query: (tranId) => ({
                url: `/transaction/my-transactions/${tranId}`,
                method: "GET",
            }),
            providesTags: ["TRANSACTION"],
        }),
        transactionsAnalytics: builder.query({
            query: () => ({
                url: `/transaction/analytics`,
                method: "GET",
            }),
            providesTags: ["TRANSACTION"],
        })
    })
})

export const {useTransactionsAnalyticsQuery,useAdminWithdrawMutation ,useSendMoneyMutation,useMyTransactionsByIdQuery, useMyTransactionsQuery, useCashOutMutation, useCashInMutation } = transactionApi