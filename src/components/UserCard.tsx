import { UserSearchResult } from "@/types/model/user";
import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";

const UserCard = ({
  user: { name, username, image, following, followers },
}: {
  user: UserSearchResult;
}) => {
  return (
    <Link
      href={`/user/${username}`}
      className="flex items-center w-full gap-2 p-4 mb-2 bg-white border rounded-sm border-neutral-300 hover:bg-neutral-50"
    >
      <Avatar image={image} className="w-14 h-14" />
      <div className="text-neutral-500 ">
        <p className="font-bold leading-4 text-black">{username}</p>
        <p>{name}</p>
        <p className="text-sm leading-4">{`${followers} followers / ${following} following`}</p>
      </div>
    </Link>
  );
};

export default UserCard;
