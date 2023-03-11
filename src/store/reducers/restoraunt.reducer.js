import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const restoApi = createApi({
  reducerPath: "restorauntsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api/" }),
  endpoints: (builder) => ({
    getRestoraunts: builder.query({
      query: () => "flats?populate=image",
    }),
  }),
});
export const { useGetRestorauntsQuery } = restoApi;
