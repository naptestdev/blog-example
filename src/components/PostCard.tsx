import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export function PostCard(post: Post) {
  return (
    <Link
      href={post.url}
      className="mb-8 flex gap-2 text-black hover:text-blue-500 dark:text-white"
    >
      <div className="flex-shrink-0">
        <Image
          width={300}
          height={156}
          src={`/assets/${post._raw.flattenedPath}/thumbnail.jpeg`}
          alt=""
        />
      </div>
      <div>
        <h2 className="mb-1 text-xl transition">{post.title}</h2>
        <time dateTime={post.date} className="mb-2 block text-xs text-gray">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
    </Link>
  );
}
