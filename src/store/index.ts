// ** Toolkit imports
import { configureStore } from "@reduxjs/toolkit";

// ** Reducers
import product from "./product";
import carousel from "./carousel";

export const store = configureStore({
  reducer: {
    product: product,
    carousel: carousel,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
