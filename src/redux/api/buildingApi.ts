import { IBuilding, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { taqTypes } from "../slices/taq-types";

const BUILDING_URL = "/building";

export const buildingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all building
    buildings: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BUILDING_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IBuilding[], meta: IMeta) => {
        return {
          buildings: response,
          meta,
        };
      },
      providesTags: [taqTypes.building],
    }),
    // get single building
    building: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BUILDING_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [taqTypes.building],
    }),
    // create a new building
    addBuilding: build.mutation({
      query: (data) => ({
        url: `${BUILDING_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [taqTypes.building],
    }),
    // update existing building
    updateBuilding: build.mutation({
      query: (data) => ({
        url: `${BUILDING_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [taqTypes.building],
    }),
    // delete existing building
    deleteBuilding: build.mutation({
      query: (id) => ({
        url: `${BUILDING_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [taqTypes.building],
    }),
  }),
});

export const {
  useAddBuildingMutation,
  useBuildingsQuery,
  useBuildingQuery,
  useUpdateBuildingMutation,
  useDeleteBuildingMutation,
} = buildingApi;
