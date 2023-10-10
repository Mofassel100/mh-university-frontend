import { IMeta, IRoom } from "@/types";
import { baseApi } from "./baseApi";
import { taqTypes } from "../slices/taq-types";

const ROOM_URL = "/rooms";

export const roomApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all rooms
    rooms: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ROOM_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IRoom[], meta: IMeta) => {
        return {
          rooms: response,
          meta,
        };
      },
      providesTags: [taqTypes.room],
    }),
    // get single room
    room: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${ROOM_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [taqTypes.room],
    }),
    // create a new room
    addRoom: build.mutation({
      query: (data) => ({
        url: `${ROOM_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [taqTypes.room],
    }),
    // update room
    updateRoom: build.mutation({
      query: (data) => ({
        url: `${ROOM_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [taqTypes.room],
    }),
    // delete room
    deleteRoom: build.mutation({
      query: (id) => ({
        url: `${ROOM_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [taqTypes.room],
    }),
  }),
});

export const {
  useAddRoomMutation,
  useRoomsQuery,
  useRoomQuery,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
} = roomApi;
