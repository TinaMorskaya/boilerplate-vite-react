import React from "react";
import { usePosts } from "./usePosts";
import { useAppSelector } from "../../reduxHooks";
import { selectCount } from "../counter/counterSlice";
import { Link } from "react-router-dom";
import Card from "antd/lib/card/Card";
import tw from "twin.macro";

export const Posts = () => {
  const count = useAppSelector(selectCount);
  const { status, data, error, isFetching } = usePosts(count);

  return (
    <div>
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <h2 css={tw`text-emerald-900 text-xl font-bold text-center mb-6`}>Posts count is {data?.length || 0}</h2>
          <div css={tw`flex flex-col gap-y-4 px-10`} data-testid="posts">
            {data?.map((post) => (
              <Link to={`/posts/${post.id}`} key={post.id}>
                <Card type="inner" title={post.title}>
                  {post.body}
                </Card>
              </Link>
            ))}
          </div>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  );
};
