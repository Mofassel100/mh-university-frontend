import { baseApi } from "./baseApi";
const AUTH_API_ENDP = "/auth";
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (loginData) => ({
        url: `${AUTH_API_ENDP}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
  }),
  overrideExisting: false,
});

export const { useUserLoginMutation } = authApi;
