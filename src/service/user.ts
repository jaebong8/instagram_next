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
