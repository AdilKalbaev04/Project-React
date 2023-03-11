import { restoApi } from "./reducers/restoraunt.reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [restoApi.reducerPath]: restoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restoApi.middleware),
});
