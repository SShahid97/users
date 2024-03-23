import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_SERVER_ENDPOINT,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
