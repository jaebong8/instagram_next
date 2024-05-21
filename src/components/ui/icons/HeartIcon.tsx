import { AiOutlineHeart } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

export default function HeartIcon({ className }: { className?: string }) {
  return <AiOutlineHeart className={twMerge("w-6 h-6", className)} />;
}
