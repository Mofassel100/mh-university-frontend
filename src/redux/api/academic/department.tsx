import { taqTypes } from "../../slices/taq-types";
import { baseApi } from "../baseApi";
import { IFaculties, IMeta } from "@/types";
const Academic_Department_URL = "/academic-depertment";
export const adminAcademicDepartmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    academicDepartments: builder.query({
      query: (arg: Record<string, any>) => ({
        url: Academic_Department_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IFaculties[], meta?: IMeta) => {
        return {
          academicDepartment: response,
          meta,
        };
      },
      providesTags: [taqTypes.academicDepartment],
    }),
    academicDepartment: builder.query({
      query: (id) => ({
        url: `${Academic_Department_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [taqTypes.academicDepartment],
    }),
    updateAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: `${Academic_Department_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [taqTypes.academicDepartment],
    }),
    deleteAcademicDepartment: builder.mutation({
      query: (id) => ({
        url: `${Academic_Department_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [taqTypes.academicDepartment],
    }),
    addAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: `${Academic_Department_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [taqTypes.academicDepartment],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAcademicDepartmentQuery,
  useAcademicDepartmentsQuery,
  useDeleteAcademicDepartmentMutation,
  useAddAcademicDepartmentMutation,
  useUpdateAcademicDepartmentMutation,
} = adminAcademicDepartmentApi;
