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

export const { useDepartmentsQuery, useAddDepartmentMutation } = departmentApi;
