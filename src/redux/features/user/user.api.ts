import { baseApi } from "@/redux/baseApi";


export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        cashIn: builder.mutation({
            query: (transactionInfo) => ({
                url: "transaction/cash-in",
                method: "POST",
                data: transactionInfo
            }),
            invalidatesTags: ["TRANSACTION"],
        }),
        getUserByEmail: builder.query({
            query: (email) => ({
                url: `user/search-user/${email}`,
                method: "GET",
            }),
            providesTags: ["USER"],
        }),
        getAdmin: builder.query({
            query: () => ({
                url: `user/get-admin`,
                method: "GET",
            }),
            providesTags: ["USER"],
        })
    })
})

export const { useGetUserByEmailQuery, useCashInMutation, useGetAdminQuery } = userApi