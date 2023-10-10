import { ICourse, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { taqTypes } from "../slices/taq-types";

const COURSE_URL = "/courses";

export const courseApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
    courses: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: COURSE_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: ICourse[], meta: IMeta) => {
        return {
          courses: response,
          meta,
        };
      },
      providesTags: [],
    }),
    // get single
    course: build.query({
      query: (id: string) => ({
        url: `${COURSE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [taqTypes.course],
    }),
    // create
    addCourse: build.mutation({
      query: (data) => ({
        url: COURSE_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [taqTypes.course],
    }),
    // update
    updateCourse: build.mutation({
      query: (data) => ({
        url: `${COURSE_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [taqTypes.course],
    }),
    // delete
    deleteCourse: build.mutation({
      query: (id) => ({
        url: `${COURSE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [taqTypes.course],
    }),
  }),
});

export const {
  useCoursesQuery,
  useCourseQuery,
  useAddCourseMutation,
  useDeleteCourseMutation,
  useUpdateCourseMutation,
} = courseApi;
