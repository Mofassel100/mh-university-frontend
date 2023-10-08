import { taqTypes } from "../../slices/taq-types";
import { baseApi } from "../baseApi";
import { IFaculties, IMeta } from "@/types";
const Academic_Semester_URL = "/academic-semesters";

export const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    academicSemesters: builder.query({
      query: (arg: Record<string, any>) => ({
        url: Academic_Semester_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IFaculties[], meta?: IMeta) => {
        return {
          academicSemester: response,
          meta,
        };
      },
      providesTags: [taqTypes.academicSemester],
    }),
    academicSemester: builder.query({
      query: (id) => ({
        url: `${Academic_Semester_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [taqTypes.academicSemester],
    }),
    updateAcademicSemester: builder.mutation({
      query: (data) => ({
        url: `${Academic_Semester_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [taqTypes.academicSemester],
    }),
    deleteAcademicSemester: builder.mutation({
      query: (id) => ({
        url: `${Academic_Semester_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [taqTypes.academicSemester],
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: `${Academic_Semester_URL}`,
        method: "POST",
        data,
      }),
      invalidatesTags: [taqTypes.academicSemester],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAcademicSemesterQuery,
  useAcademicSemestersQuery,
  useAddAcademicSemesterMutation,
  useDeleteAcademicSemesterMutation,
  useUpdateAcademicSemesterMutation,
} = academicSemesterApi;
