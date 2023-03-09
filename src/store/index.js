import restoranReducer from "./reducers/restoran.reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: restoranReducer,
});
