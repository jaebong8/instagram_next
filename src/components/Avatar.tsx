import React from "react";
import { twMerge } from "tailwind-merge";

const Avatar = ({
  image,
  gradient = false,
  className,
}: {
  image?: string | null;
  gradient?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "rounded-full w-9 h-9 flex justify-center items-center p-[0.1rem]",
        className,
        gradient &&
          " bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image ?? undefined}
        alt="profile image"
        className="rounded-full p-[0.1rem] bg-white w-full h-full"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default Avatar;
