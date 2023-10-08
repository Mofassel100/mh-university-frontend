import { IAdmin, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { taqTypes } from "../slices/taq-types";

const ADMIN_URL = "/admins";
export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addAdminWithFormData: builder.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [taqTypes.admin],
    }),
    admins: builder.query({
      query: (arg: Record<string, any>) => ({
        url: ADMIN_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IAdmin[], meta?: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [taqTypes.admin],
    }),
  }),

  overrideExisting: false,
});

export const { useAddAdminWithFormDataMutation, useAdminsQuery } = adminApi;
