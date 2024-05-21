import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  onClick: () => void;
  className?: string;
};

const Button = ({ text, onClick, className }: Props) => {
  return (
    <button
      className={twMerge(
        "border-none rounded-md p-2 px-8 text-white font-bold leading-4 bg-red-500 ",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
