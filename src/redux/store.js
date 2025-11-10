"use client";
import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/courseSlice";
import { courseApi } from "./apis/coursApi";

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    [courseApi.reducerPath]: courseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courseApi.middleware),
});

export default store;
