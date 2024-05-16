import React from "react";

const Avatar = ({ image }: { image?: string | null }) => {
  return (
    <div className="overflow-hidden rounded-full w-9 h-9 bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image ?? undefined}
        alt="profile image"
        className="rounded-full p-[0.15rem]"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default Avatar;
