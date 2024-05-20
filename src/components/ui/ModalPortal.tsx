import React, { ReactNode } from "react";
import reactDom from "react-dom";
type Props = {
  children: ReactNode;
};

const ModalPortal = ({ children }: Props) => {
  if (typeof window === "undefined") {
    return null;
  }
  const node = document.getElementById("portal") as Element;
  return reactDom.createPortal(children, node);
};

export default ModalPortal;
