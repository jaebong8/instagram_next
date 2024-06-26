import { ProfileUser } from "@/types/model/user";
import React from "react";
import Avatar from "./Avatar";
import FollowButton from "./FollowButton";

const UserProfile = ({ user }: { user: ProfileUser }) => {
  const { image, username, name, followers, following, posts } = user;
  const info = [
    { title: "posts", data: posts },
    { title: "followers", data: followers },
    { title: "following", data: following },
  ];
  return (
    <section className="flex flex-col items-center justify-center w-full py-12 border-b md:flex-row border-neutral-300">
      <Avatar image={image} gradient className="w-[138px] h-[138px]" />
      <div className="md:ml-10 basis-1/3">
        <div className="flex flex-col items-center md:flex-row">
          <h1 className="my-2 text-2xl md:mr-8 mdLmb-0">{username}</h1>
          <FollowButton user={user} />
        </div>

        <ul className="flex gap-4 my-4">
          {info.map(({ title, data }, index) => (
            <li key={index}>
              <span className="mr-1 font-bold">{data}</span>
              {title}
            </li>
          ))}
        </ul>
        <p className="text-xl font-bold text-center md:text-start">{name}</p>
      </div>
    </section>
  );
};

export default UserProfile;
