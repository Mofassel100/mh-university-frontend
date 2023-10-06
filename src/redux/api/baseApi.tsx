import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "@/helper/config/envConfig";
import { axiosBaseQuery } from "@/helper/axios/axiosBaseQuery";
import { tagTypesList } from "../slices/taq-types";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
