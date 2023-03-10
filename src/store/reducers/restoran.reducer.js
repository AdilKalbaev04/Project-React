import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};
const restoSlice = createSlice({
  name: "flats",
  initialState,
});

// export const restoApi = createApi({
//   reducerPath: "restorauntsApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api/" }),
//   tagTypes: ["Restoraunts"],
//   endpoints: (builder) => ({
//     getRestoraunts: builder.query({
//       query: (count) => `restorans?${restorauntsquery(count)}`,
//       transformResponse: (response) => response.data,
//       providesTags: (result) => console.log(result),
//     }),
//   }),
// });

// export const { useGetRestorauntsQuery } = restoApi;
export default restoSlice.reducer;
