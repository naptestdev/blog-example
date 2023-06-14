import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  const recommendedPosts = allPosts
    .filter((post) => post._raw.flattenedPath !== params.slug)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 4);

  return (
    <div className="mx-auto py-6 px-4 max-w-[1080px] flex items-start gap-10 flex-col md:flex-row">
      <article className="py-8 flex-grow">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <time dateTime={post.date} className="mb-1 text-xs text-gray">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
        <div
          className="prose dark:prose-invert max-w-none prose-img:mx-auto"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
      <div className="md:w-[336px] sticky top-10 flex-shrink-0 flex flex-col items-stretch gap-5">
        {recommendedPosts.map((post) => (
          <Link
            href={post.url}
            key={post._id}
            className="flex gap-2 text-black hover:text-blue-500 dark:text-white"
          >
            <div className="flex-shrink-0">
              <Image
                style={{ objectFit: "cover", height: 100, width: 156 }}
                height={100}
                width={156}
                src={`/assets/${post._raw.flattenedPath}/thumbnail.jpeg`}
                alt=""
              />
            </div>
            <div>
              <h4 className="transition line-clamp-3">{post.title}</h4>
              <time
                dateTime={post.date}
                className="mb-2 block text-xs text-gray"
              >
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostLayout;
