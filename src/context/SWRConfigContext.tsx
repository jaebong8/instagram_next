"use client";
import React, { ReactNode } from "react";
import { SWRConfig } from "swr";

type Props = {
  children: ReactNode;
};
const SWRConfigContext = ({ children }: Props) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => fetch(url).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRConfigContext;
