import { SearchUser } from "@/types/model/user";
import { client } from "./sanity";

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};
export const addUser = async ({ username, email, image, name }: OAuthUser) => {
  return client.createIfNotExists({
    _id: username,
    _type: "user",
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
};

export const getUserByUsername = async (username: string) => {
  return client
    .fetch(
      `*[_type == "user" && username == "${username}"][0]{
    ...,
    "id":_id,
    following[]->{username,image},
    followers[]->{username,image},
    "bookmarks":bookmarks[]->_id
  }`
    )
    .then((user) => ({
      ...user,
      following: user?.following || 0,
      followers: user?.followers || 0,
    }));
};

export const searchUsers = async (keyword?: string) => {
  const query = keyword
    ? `&& (name match "${keyword}") || (username match "${keyword}")`
    : "";
  return client
    .fetch(
      `*[_type == "user" ${query}]{
      ...,
      "following": count(following),
      "followers": count(followers),
    }
    `
    )
    .then((users) =>
      users.map((user: SearchUser) => ({
        ...user,
        following: user?.following ?? 0,
        followers: user?.followers ?? 0,
      }))
    );
};

export const getUserForProfile = async (username: string) => {
  return client
    .fetch(
      `
    *[_type == "user" && username == "${username}"][0]{
      ...,
      "id":_id,
      "following": count(following),
      "followers": count(followers),
      "posts": count(*[_type == "post" && author->username == "${username}"])
    }
    `
    )
    .then((user) => {
      if (!user) return undefined;
      return {
        ...user,
        following: user?.following ?? 0,
        followers: user?.followers ?? 0,
        posts: user?.posts ?? 0,
      };
    });
};
