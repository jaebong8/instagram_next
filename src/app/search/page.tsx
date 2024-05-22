import UserSearch from "@/components/UserSearch";
import { Metadata } from "next";
import React from "react";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "User Search Page",
  description: "Search users to follow",
};
const SearchPage = () => {
  return <UserSearch />;
};

export default SearchPage;
