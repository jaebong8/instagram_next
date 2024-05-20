import { User } from "@/types/model/user";
import React from "react";
import Avatar from "./Avatar";

const SideBar = ({
  user: { name, username, image, email },
}: {
  user: User;
}) => {
  return (
    <>
      <div className="flex items-center">
        {image && <Avatar image={image} className="w-12 h-12" />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-lg leading-4 text-neutral-500">{name}</p>
          <p>{email}</p>
        </div>
      </div>
      <p className="mt-8 text-sm text-neutral-500">
        About | Help | Press | API | Jobs | Privacy | Terms | Location
      </p>
      <p className="mt-8 text-sm font-bold text-neutral-500">
        @Copyright Instgram-next from Jaebong8
      </p>
    </>
  );
};

export default SideBar;
