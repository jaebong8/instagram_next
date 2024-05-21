import { SimplePost } from "@/types/model/post";
import { client, urlFor } from "./sanity";

export const getPostsByFollowing = (username: string) => {
  return client
    .fetch(
      `*[_type == "post" && author->username == "${username}"
     || author._ref in *[_type=="user" && username=="${username}"].following[]._ref]
     | order(_createdAt desc){
        ...,
        "username": author->username,
        "userImage": author->image,
        "image": photo,
        "likes": likes[]->username,
        "text": comments[0].comment,
        "comments": count(comments),
        "id":_id,
        "createdAt":_createdAt
     }`
    )
    .then((posts) =>
      posts.map((post: SimplePost) => ({ ...post, image: urlFor(post.image) }))
    );
};

export const getPost = async (id: string) => {
  return client
    .fetch(
      `*[_type == "post" && _id == "${id}"][0]{
      ...,
      "username": author->username,
      "userImage": author->image,
      "image":photo,
      "likes": likes[]->username,
      comments[]{comment, "username": author->username, "image": author->image},
      "id":_id,
      "createdAt":_createdAt
    }`
    )
    .then((post) => ({ ...post, image: urlFor(post.image) }));
};
