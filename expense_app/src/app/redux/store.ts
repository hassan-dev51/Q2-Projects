import { configureStore } from "@reduxjs/toolkit";
import ExpenseReducer from "../redux/ExpenseSlice";
export const store = configureStore({
  reducer: {
    expense: ExpenseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
