"use client";
import { HomeUser, ProfileUser } from "@/types/model/user";
import React from "react";
import useSWR from "swr";
import Button from "./ui/Button";

const FollowButton = ({ user }: { user: ProfileUser }) => {
  const { username } = user;
  const { data: loggedInUser } = useSWR<HomeUser>("/api/me");

  const showButton = loggedInUser && loggedInUser.username !== username;
  const following =
    loggedInUser &&
    loggedInUser.following.find((item) => item.username === username);
  const text = following ? "Unfollow" : "Follow";
  return (
    <>
      {showButton && (
        <Button
          text={text}
          onClick={() => {}}
          className={text === "Follow" ? "bg-blue-500" : ""}
        />
      )}
    </>
  );
};

export default FollowButton;
