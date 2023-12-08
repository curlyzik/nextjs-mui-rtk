import { axiosBaseQuery } from '@/api/interceptor/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const jsonPlaceHolderApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: `https://jsonplaceholder.typicode.com`,
  }),
  endpoints: () => ({}),
  reducerPath: 'jsonPlaceHolderApi',
  tagTypes: [],
});
