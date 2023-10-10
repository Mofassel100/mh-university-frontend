import { IMeta, ISemesterRegistration } from "@/types";
import { baseApi } from "./baseApi";
import { taqTypes } from "../slices/taq-types";

const BASE_SEMESTER_REGISTRATION = "/semester-registration";
export const semesterRegistrationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    semesterRegistrations: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BASE_SEMESTER_REGISTRATION,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: ISemesterRegistration[], meta: IMeta) => {
        return {
          semesterRegistrations: response,
          meta,
        };
      },
      providesTags: [taqTypes.semesterRegistration],
    }),
    semesterRegistration: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/${id}`,
        method: "GET",
      }),
      providesTags: [taqTypes.semesterRegistration],
    }),
    addSemesterRegistrations: build.mutation({
      query: (data) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [taqTypes.semesterRegistration],
    }),
    updateSemesterRegistrations: build.mutation({
      query: (data) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [taqTypes.semesterRegistration],
    }),
    deleteSemesterRegistrations: build.mutation({
      query: (id) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [taqTypes.semesterRegistration],
    }),
    myRegistration: build.query({
      query: () => ({
        url: `${BASE_SEMESTER_REGISTRATION}/my-registration`,
        method: "GET",
      }),
      providesTags: [taqTypes.courseRegistration],
    }),
    startRegistration: build.mutation({
      query: () => ({
        url: `${BASE_SEMESTER_REGISTRATION}/start-registration`,
        method: "POST",
      }),
    }),
    mySemesterRegistrationCourses: build.query({
      query: () => ({
        url: `${BASE_SEMESTER_REGISTRATION}/my-semester-registration-courses
				`,
        method: "GET",
      }),
      providesTags: [taqTypes.courseRegistration],
    }),
    enrollIntoCourse: build.mutation({
      query: (data) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/enroll-into-course`,
        method: "POST",
        data,
      }),
      invalidatesTags: [taqTypes.courseRegistration],
    }),
    withdrawFromCourse: build.mutation({
      query: (data) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/withdraw-from-course`,
        method: "POST",
        data,
      }),
      invalidatesTags: [taqTypes.courseRegistration],
    }),
    confirmMyRegistration: build.mutation({
      query: () => ({
        url: `${BASE_SEMESTER_REGISTRATION}/confirm-registration`,
        method: "POST",
      }),
      invalidatesTags: [taqTypes.courseRegistration],
    }),
    startNewSemester: build.mutation({
      query: (id) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/${id}/start-new-semester`,
        method: "POST",
      }),
      invalidatesTags: [taqTypes.courseRegistration],
    }),
  }),
});

export const {
  useSemesterRegistrationsQuery,
  useSemesterRegistrationQuery,
  useAddSemesterRegistrationsMutation,
  useDeleteSemesterRegistrationsMutation,
  useUpdateSemesterRegistrationsMutation,

  useMyRegistrationQuery,
  useStartRegistrationMutation,
  useMySemesterRegistrationCoursesQuery,
  useEnrollIntoCourseMutation,
  useConfirmMyRegistrationMutation,
  useWithdrawFromCourseMutation,
  useStartNewSemesterMutation,
} = semesterRegistrationApi;

export default semesterRegistrationApi;
