"use client";
import { SimplePost } from "@/types/model/post";
import React from "react";

import useSWR from "swr";
import PostListCard from "./PostListCard";
import dynamic from "next/dynamic";

const GridLoader = dynamic(
  () => import("react-spinners").then((lib) => lib.GridLoader),
  {
    ssr: false,
  }
);

const PostList = () => {
  const { data: posts, error, isLoading } = useSWR<SimplePost[]>("/api/posts");
  return (
    <section>
      {isLoading && (
        <div className="mt-32 text-center">
          <GridLoader color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id} className="mb-4">
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PostList;
