"use client";
import { SimplePost } from "@/types/model/post";
import React from "react";
import { RingLoader } from "react-spinners";
import useSWR from "swr";
import PostGridCard from "./PostGridCard";

const PostGrid = ({ username, query }: { username: string; query: string }) => {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR<SimplePost[]>(`/api/users/${username}/${query}`);
  console.log(posts);
  return (
    <div>
      {isLoading && (
        <div className="flex items-center justify-center mt-20 md:mt-24">
          <RingLoader color="red" />{" "}
        </div>
      )}
      {!isLoading && !error && posts?.length === 0 && (
        <p className="mt-10 font-bold text-center">No Result!</p>
      )}
      <ul className="grid grid-cols-2 gap-4 px-8 py-4 md:grid-cols-3">
        {posts &&
          posts.map((post, index) => (
            <li key={post.id}>
              <PostGridCard post={post} priority={index < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PostGrid;
