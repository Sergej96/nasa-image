import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filterSlice from "../features/filter/slice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
