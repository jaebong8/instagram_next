"use client";

import { SearchUser } from "@/types/model/user";
import { FormEvent, useState } from "react";
import { RingLoader } from "react-spinners";
import useSWR from "swr";
import UserCard from "./UserCard";
import useDebounce from "@/hooks/useDebounce";

const UserSearch = () => {
  const [keyword, setKeyword] = useState("");
  const debounceValue = useDebounce(keyword, 500);
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<SearchUser[]>(`/api/search/${debounceValue}`);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="flex flex-col items-center w-full max-w-2xl">
      <form onSubmit={onSubmit} className="w-full my-4">
        <input
          className="w-full p-3 text-xl border border-gray-400 outline-none"
          type="text"
          placeholder="Search for a username or name"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          autoFocus
        />
      </form>
      {error && <p>Something went wrong!</p>}
      {isLoading && <RingLoader color="red" />}
      {!error && !isLoading && users?.length === 0 && <p>No result!</p>}
      <ul className="w-full p-4">
        {users &&
          users.map((user) => (
            <li key={user.email}>
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default UserSearch;
