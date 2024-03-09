import { api } from "./api";

export const login = api.injectEndpoints({
  endpoints: (build) => ({
    getStatsCourier: build.query({
      query: ({ user_address }) => `/user/${user_address}`,
      providesTags: ["userAddress"],
    }),
  }),
});

export const { useLoginEmailMutation, useLoginMutation, useRegisterMutation } =
  login;
