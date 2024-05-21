import React from "react";
import Avatar from "./Avatar";

type Props = {
  username: string;
  userImage: string;
};

const PostUserAvatar = ({ username, userImage }: Props) => {
  return (
    <div className="flex items-center p-2">
      <Avatar image={userImage} className="w-14 h-14" gradient />
      <span className="ml-2 font-bold text-gray-900">{username}</span>
    </div>
  );
};

export default PostUserAvatar;
