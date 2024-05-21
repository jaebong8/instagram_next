import { MdGridOn } from "react-icons/md";
import { twMerge } from "tailwind-merge";

const PostIcon = ({ className }: { className?: string }) => {
  return <MdGridOn className={twMerge("w-3 h-3", className)} />;
};

export default PostIcon;
