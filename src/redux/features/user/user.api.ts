import { baseApi } from "@/redux/baseApi";


export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        cashIn: builder.mutation({
            query: (transactionInfo) => ({
                url: "/transaction/cash-in",
                method: "POST",
                data: transactionInfo
            }),
            invalidatesTags: ["TRANSACTION"],
        }),
        getUserByEmail: builder.query({
            query: (email) => ({
                url: `/user/search-user/${email}`,
                method: "GET",
            }),
            providesTags: ["USER"],
        }),
        getAgentByEmail: builder.query({
            query: (email) => ({
                url: `/user/search-agent/${email}`,
                method: "GET",
            }),
            providesTags: ["USER"],
        }),
        getAdmin: builder.query({
            query: () => ({
                url: `/user/get-admin`,
                method: "GET",
            }),
            providesTags: ["USER"],
        }),
        userAnalytics: builder.query({
            query: () => ({
                url: `/user/analytics`,
                method: "GET",
            }),
            providesTags: ["USER"],
        }),
        updateProfile: builder.mutation({
            query: ({ userId, ...payload }) => ({
                url: `/user/${userId}`,
                method: "PATCH",
                data: payload,
            }),
            invalidatesTags: ["USER"],
        }),
       
    })
})

export const { useUserAnalyticsQuery,useGetAgentByEmailQuery,useUpdateProfileMutation,useGetUserByEmailQuery, useCashInMutation, useGetAdminQuery } = userApi