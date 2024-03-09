import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import cookie from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1:8000/",
  prepareHeaders: (headers) => {
    const token = cookie.get("jwttoken");
    if (token) {
      headers.set("authorization", `Token ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQuery,

  tagTypes: ["userAddress"],

  endpoints: () => ({}),
});
