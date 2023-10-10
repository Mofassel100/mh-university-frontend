import { IFaculties, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { taqTypes } from "../slices/taq-types";
const Create_Faculty_URL = "/users/create-faculty";
const Faculty_URL = "/facultys";
export const facultiesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    facultys: builder.query({
      query: (arg: Record<string, any>) => ({
        url: Faculty_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IFaculties[], meta?: IMeta) => {
        return {
          facultys: response,
          meta,
        };
      },
      providesTags: [taqTypes.faculty],
    }),
    faculty: builder.query({
      query: (id) => ({
        url: `${Faculty_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [taqTypes.faculty],
    }),
    updateFaculty: builder.mutation({
      query: (data) => ({
        url: `/facultys/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [taqTypes.faculty],
    }),
    deleteFaculty: builder.mutation({
      query: (id) => ({
        url: `${Faculty_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [taqTypes.faculty],
    }),
    addWithFormFaculty: builder.mutation({
      query: (data) => ({
        url: `${Create_Faculty_URL}`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [taqTypes.faculty],
    }),
  }),
  overrideExisting: false,
});

export const {
  useFacultyQuery,
  useFacultysQuery,
  useAddWithFormFacultyMutation,
  useDeleteFacultyMutation,
  useUpdateFacultyMutation,
} = facultiesApi;
