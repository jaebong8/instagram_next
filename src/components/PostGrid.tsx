import { SimplePost } from "@/types/model/post";
import React from "react";
import { GridLoader } from "react-spinners";
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
      {isLoading && <GridLoader />}
      <ul className="grid grid-cols-3 gap-4 px-8 py-4">
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
