import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/reudcer";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
