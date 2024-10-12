import { configureStore } from "@reduxjs/toolkit";
import todoRducer from "./slices/todoSlice";

const store = configureStore({
  reducer: { todoTasks: todoRducer },
});

export default store;
