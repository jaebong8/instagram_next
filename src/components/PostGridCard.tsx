import { SimplePost } from "@/types/model/post";
import Image from "next/image";
import React, { useState } from "react";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./PostModal";
import PostDetail from "./PostDetail";

const PostGridCard = ({
  post,
  priority = false,
}: {
  post: SimplePost;
  priority: boolean;
}) => {
  const { image, username } = post;
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="relative w-full aspect-square">
      <Image
        className="object-cover"
        src={image}
        alt={`photo by ${username}`}
        priority={priority}
        fill
        sizes="650px"
        onClick={() => setOpenModal(true)}
      />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </div>
  );
};

export default PostGridCard;
