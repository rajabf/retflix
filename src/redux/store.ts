import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./reducers/filmSLice";

export const store = configureStore({
  reducer: {
    film: filmsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
