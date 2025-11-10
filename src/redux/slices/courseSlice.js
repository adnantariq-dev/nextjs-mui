"use client";
import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    list: [], // all courses
  },
  reducers: {
    setCourses: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setCourses } = courseSlice.actions;

export default courseSlice.reducer;
