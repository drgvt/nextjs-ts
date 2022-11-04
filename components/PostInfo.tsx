import Heading from "./Heading";
import { FC } from "react";
import { postType } from "../types";

type postInfoProps = {
  post: postType;
};

const PostInfo: FC<postInfoProps> = ({ post }) => {
  return (
    <div>
      <Heading tag="h3" text={post.title} />
      {post.body}
    </div>
  );
};

export default PostInfo;
