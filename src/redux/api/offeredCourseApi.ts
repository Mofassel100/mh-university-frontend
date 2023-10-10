import { IMeta, IOfferedCourse } from "@/types";
import { baseApi } from "./baseApi";
import { taqTypes } from "../slices/taq-types";

const BASE_OFFERED_COURSES = "/offered-course";

export const offeredCourseApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    offeredCourses: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BASE_OFFERED_COURSES,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IOfferedCourse[], meta: IMeta) => {
        return {
          offeredCourses: response,
          meta,
        };
      },
      providesTags: [taqTypes.offeredCourses],
    }),
    offeredCourse: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BASE_OFFERED_COURSES}/${id}`,
        method: "GET",
      }),
      providesTags: [taqTypes.offeredCourses],
    }),
    addOfferedCourse: build.mutation({
      query: (data) => ({
        url: BASE_OFFERED_COURSES,
        method: "POST",
        data,
      }),
      invalidatesTags: [taqTypes.offeredCourses],
    }),
    updateOfferedCourse: build.mutation({
      query: (data) => ({
        url: `${BASE_OFFERED_COURSES}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [taqTypes.offeredCourses],
    }),
    deleteOfferedCourse: build.mutation({
      query: (id) => ({
        url: `${BASE_OFFERED_COURSES}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [taqTypes.offeredCourses],
    }),
  }),
});

export const {
  useOfferedCoursesQuery,
  useOfferedCourseQuery,
  useAddOfferedCourseMutation,
  useDeleteOfferedCourseMutation,
  useUpdateOfferedCourseMutation,
} = offeredCourseApi;
