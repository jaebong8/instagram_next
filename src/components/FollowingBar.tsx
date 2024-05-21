"use client";
import { HomeUser } from "@/types/model/user";
import Link from "next/link";
import React from "react";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr";
import Avatar from "./Avatar";
import CarouselWrapper from "./ui/CarouselWrapper";

const FollowingBar = () => {
  const { data, error, isLoading } = useSWR<HomeUser>("/api/me");
  const users = data?.following;
  return (
    <section className="flex items-center justify-center w-full p-4 shadow-md shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto">
      {isLoading ? (
        <PropagateLoader color="red" size={8} />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <CarouselWrapper>
          {users.map(({ username, image }) => (
            <Link
              key={username}
              href={`/user/${username}`}
              className="flex flex-col items-center w-20"
            >
              <Avatar image={image} gradient className="w-20 h-20" />
              <p className="w-full overflow-hidden text-sm text-center text-ellipsis">
                {username}
              </p>
            </Link>
          ))}
        </CarouselWrapper>
      )}
    </section>
  );
};

export default FollowingBar;
