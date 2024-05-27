import { Post } from "@/types";
import { format } from "date-fns";
import Link from "next/link";

interface PostItemProps {
  post: Pick<Post, "title" | "description" | "date">;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className=" flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/editor/${post.title}`}
          className=" font-semibold hover:underline"
        >
          {post.title}
        </Link>
        <div className=" text-sm text-muted-foreground">
          {format(post.date, "yyyy-MM-dd")}
        </div>
        <div className=" text-sm text-muted-foreground">{post.description}</div>
      </div>
    </div>
  );
};

export default PostItem;