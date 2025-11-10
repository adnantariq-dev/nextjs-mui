"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.npoint.io/5799c1daae4c81c66f10/",
  }),
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "/", // Example endpoint
    }),
    getCourseById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetCoursesQuery, useGetCourseByIdQuery } = courseApi;
