import { useQuery, UseQueryResult } from "react-query";
import { Post } from "./PostInterface";

const getPostById = async (id: number | string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await response.json();
};

export const usePost = (postId: number | string): UseQueryResult<Post, Error> => {
  return useQuery(["post", postId], () => getPostById(postId), {
    enabled: !!postId,
  });
};
