import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_BASE_URL,
        /*prepareHeaders(headers) {
            headers.set()
            return headers;
        }*/
    }),
    endpoints(builder) {
        return {
            
        }
    }
});