"use client";
import { ProfileUser } from "@/types/model/user";
import React, { useState } from "react";
import useSWR from "swr";
import PostIcon from "./ui/icons/PostIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import PostGrid from "./PostGrid";
import { twMerge } from "tailwind-merge";

const tabs = [
  { type: "posts", icon: <PostIcon /> },
  { type: "saved", icon: <BookmarkIcon className="w-3 h-3" /> },
  { type: "liked", icon: <HeartIcon className="w-3 h-3" /> },
];

const UserPosts = ({ user: { username } }: { user: ProfileUser }) => {
  const [query, setQuery] = useState(tabs[0].type);

  return (
    <section>
      <ul className="flex justify-center uppercase">
        {tabs.map(({ type, icon }) => (
          <li
            key={type}
            onClick={() => setQuery(type)}
            className={twMerge(
              "p-4 mx-12 border-black cursor-pointer",
              type === query ? "border-t font-bold" : ""
            )}
          >
            <button>{icon}</button>
            <span>{type}</span>
          </li>
        ))}
      </ul>
      <PostGrid username={username} query={query} />
    </section>
  );
};

export default UserPosts;
