import { useQuery, UseQueryResult } from "react-query";
import { Post } from "./PostInterface";

export const usePosts = (count: number): UseQueryResult<Post[], Error> => {
  return useQuery(
    ["posts", count],
    async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      return data?.slice(0, count);
    },
    {
      enabled: count > 0,
    },
  );
};
