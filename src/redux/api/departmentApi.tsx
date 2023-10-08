import { taqTypes } from "../slices/taq-types";
import { baseApi } from "./baseApi";
import { IDepartment, IMeta } from "@/types";
const DEPARTMENT_URL = "/management-department";
export const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    departments: builder.query({
      query: (arg: Record<string, any>) => ({
        url: DEPARTMENT_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDepartment[], meta?: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [taqTypes.department],
    }),
    department: builder.query({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [taqTypes.department],
    }),
    updateDepartment: builder.mutation({
      query: (data) => ({
        url: `${DEPARTMENT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [taqTypes.department],
    }),
    deletedDepartment: builder.mutation({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [taqTypes.department],
    }),
    addDepartment: builder.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [taqTypes.department],
    }),
  }),
  overrideExisting: false,
});

export const {
  useDepartmentsQuery,
  useAddDepartmentMutation,
  useDepartmentQuery,
  useUpdateDepartmentMutation,
  useDeletedDepartmentMutation,
} = departmentApi;
