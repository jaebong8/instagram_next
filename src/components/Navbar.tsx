"use client";
import Link from "next/link";
import React from "react";
import HomeIcon from "./ui/icons/HomeIcon";
import NewIcon from "./ui/icons/NewIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import { usePathname } from "next/navigation";
import ColorButton from "./ui/ColorButton";
import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from "./Avatar";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    activeIcon: <HomeFillIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    activeIcon: <SearchFillIcon />,
  },
  {
    href: "/new",
    icon: <NewIcon />,
    activeIcon: <NewFillIcon />,
  },
];

const Navbar = () => {
  const pathName = usePathname();
  const { data: session, status } = useSession();
  const user = session?.user;
  return (
    <nav className="flex items-center justify-between p-5 grow">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold">Instagram</h1>
      </Link>

      <ul className="flex items-center gap-5">
        {menu.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              {pathName === item.href ? item.activeIcon : item.icon}
            </Link>
          </li>
        ))}
        {user && (
          <li>
            <Link href={`/user/${user.username}`}>
              <Avatar image={user.image} />
            </Link>
          </li>
        )}
        {status === "loading" ? (
          <span>loading...</span>
        ) : session ? (
          <li>
            <ColorButton text="Sign Out" onClick={() => signOut()} />
          </li>
        ) : (
          <li>
            <ColorButton text="Sign In" onClick={() => signIn()} />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
