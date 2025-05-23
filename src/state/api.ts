import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  reducerPath: "api",
  tagTypes: [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (_build) => ({}),
});

export const {} = api;
