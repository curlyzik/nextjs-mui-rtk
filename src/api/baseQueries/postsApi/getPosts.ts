import { jsonPlaceHolderApi } from '..';

interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}
export const getPosts = jsonPlaceHolderApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query: () => ({
        url: `/posts`,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useLazyGetPostsQuery } = getPosts;
