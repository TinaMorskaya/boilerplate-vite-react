import React from "react";
import { usePost } from "./usePost";
import { useParams } from "react-router-dom";
import tw from "twin.macro";

export const Post = () => {
  const { postId } = useParams();
  const { status, data, error, isFetching } = usePost(postId ?? 0);

  return (
    <div>
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <h1 css={tw`font-bold`}>This is post with postId = {postId}</h1>
          <h2>
            <span css={tw`font-bold`}>Tittle:</span> {data?.title}
          </h2>
          <p>
            <span css={tw`font-bold`}>Body:</span> {data?.body}
          </p>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  );
};
