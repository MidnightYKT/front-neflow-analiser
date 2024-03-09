import { api } from "./api";

export const address = api.injectEndpoints({
  endpoints: (build) => ({
    getUserAddress: build.query({
      query: ({ user_address }) => `/user/${user_address}`,
      providesTags: ["userAddress"],
    }),
  }),
});

export const { useGetUserAddress } = address;
