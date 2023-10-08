import { taqTypes } from "../../slices/taq-types";
import { baseApi } from "../baseApi";
import { IDepartment, IFaculties, IMeta } from "@/types";
const Academic_Faculty_URL = "/academic-faculty";
export const academicFacultyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    academicFacultys: builder.query({
      query: (arg: Record<string, any>) => ({
        url: Academic_Faculty_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IFaculties[], meta?: IMeta) => {
        return {
          faculties: response,
          meta,
        };
      },
      providesTags: [taqTypes.academicFaculty],
    }),
    academicFaculty: builder.query({
      query: (id) => ({
        url: `${Academic_Faculty_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [taqTypes.academicFaculty],
    }),
    updateAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: `${Academic_Faculty_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [taqTypes.academicFaculty],
    }),
    deleteAcademicFaculty: builder.mutation({
      query: (id) => ({
        url: `${Academic_Faculty_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [taqTypes.academicFaculty],
    }),
    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: `${Academic_Faculty_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [taqTypes.academicFaculty],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAcademicFacultyQuery,
  useAcademicFacultysQuery,
  useAddAcademicFacultyMutation,
  useDeleteAcademicFacultyMutation,
  useUpdateAcademicFacultyMutation,
} = academicFacultyApi;
