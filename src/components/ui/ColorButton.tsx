import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  className?: string;
};

const ColorButton = ({ text, onClick, type = "button", className }: Props) => {
  return (
    <div className="p-[0.15rem] rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300">
      <button
        className={twMerge(
          "bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity font-semibold",
          className
        )}
        onClick={onClick}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

export default ColorButton;
