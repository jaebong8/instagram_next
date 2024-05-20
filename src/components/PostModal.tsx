import React, { ReactNode } from "react";
import CloseIcon from "./ui/icons/CloseIcon";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

const PostModal = ({ children, onClose }: Props) => {
  return (
    <section
    className="fixed top-0 left-0 z-50 w-full h-full bg-slate-500"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <button onClick={() => onClose()}>
        <CloseIcon />
      </button>
      {children}
    </section>
  );
};

export default PostModal;
