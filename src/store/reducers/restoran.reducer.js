import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};
const restoSlice = createSlice({
  name: "flats",
  initialState,
});

export default restoSlice.reducer;
