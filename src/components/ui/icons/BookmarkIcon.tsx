import { RiBookmarkLine } from "react-icons/ri";
import { twMerge } from "tailwind-merge";

export default function BookmarkIcon({ className }: { className?: string }) {
  return <RiBookmarkLine className={twMerge("w-6 h-6", className)} />;
}
