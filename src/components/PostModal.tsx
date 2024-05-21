import React, { ReactNode } from "react";
import CloseIcon from "./ui/icons/CloseIcon";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

const PostModal = ({ children, onClose }: Props) => {
  return (
    <section
      className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full bg-slate-900/70 "
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        onClick={() => onClose()}
        className="fixed top-0 right-0 p-8 text-white"
      >
        <CloseIcon />
      </button>
      <div className="w-4/5 bg-white h-3/5 max-w-7xl">{children}</div>
    </section>
  );
};

export default PostModal;
