import { FullPost, SimplePost } from "@/types/model/post";
import React from "react";
import useSWR from "swr";
import Image from "next/image";
import PostUserAvatar from "./PostUserAvatar";
import ActionBar from "./ActionBar";
import CommentForm from "./CommentForm";
import Avatar from "./Avatar";
import { RingLoader } from "react-spinners";
type Props = {
  post: SimplePost;
};

const PostDetail = ({ post }: Props) => {
  const { id, userImage, username, image, createdAt, likes } = post;
  const { data, isLoading } = useSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;
  return (
    <section className="flex flex-col w-full h-full md:flex-row">
      <div className="relative basis-3/5">
        <Image
          className="object-cover"
          src={image}
          alt={`photo by ${username}`}
          priority
          fill
          sizes="650px"
        />
      </div>
      <div className="flex flex-col w-full basis-2/5">
        <PostUserAvatar userImage={userImage} username={username} />
        <ul className="h-full p-4 mb-1 overflow-y-auto border-t border-gray-200">
          {isLoading && (
            <div className="flex items-center justify-center w-full h-full">
              <RingLoader color="red" />
            </div>
          )}
          {comments &&
            comments.map(
              ({ image, username: commentUsername, comment }, index) => {
                return (
                  <li key={index} className="flex items-center mb-1">
                    <Avatar
                      image={image}
                      gradient={commentUsername === username}
                    />
                    <div className="ml-2">
                      <span className="mr-1 font-bold">{commentUsername}</span>
                      <span>{comment}</span>
                    </div>
                  </li>
                );
              }
            )}
        </ul>
        <ActionBar post={post} showText={false} />
        <CommentForm />
      </div>
    </section>
  );
};

export default PostDetail;
