import { baseApi } from "../../../store/base-query";
import { User, UserFilters, Users } from "../types";

const users = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<Users, UserFilters>({
      query: (args) => {
        const { skip, limit, search, query } = args;
        return {
          url: search ? `users/search?q=${query}` : "users",
          method: "GET",
          params: {
            skip,
            limit,
          } as UserFilters,
        };
      },
    }),
    getUser: build.query<User, { id: string | number }>({
      query: (args) => {
        const { id } = args;
        return {
          url: `users/${id}`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 0,
    }),
    getStats: build.query<Users, { key: string; value: string }>({
      query: (args) => {
        const { key, value } = args;
        return {
          url: `users/filter?key=${key}&value=${value}&limit=1`,
          method: "GET",
        };
      },
    }),

    contactUs: build.mutation<
      'OK',
      {
        service_id: string;
        template_id: string;
        user_id: string;
        template_params: {
          name: string;
          email: string;
        };
      }
    >({
      query: (body) => {
        return {
          url: `https://api.emailjs.com/api/v1.0/email/send`,
          method: "POST",
          body: body,
        };
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useLazyGetStatsQuery,
  useContactUsMutation,
} = users;
