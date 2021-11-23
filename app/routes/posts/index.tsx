import { Link, useLoaderData } from "remix";
import { getPosts } from "../../post";
import type { Post } from "../../post";

export let loader = () => {
  return [
    {
      slug: "my-first-post",
      title: "My First Post",
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I Made Just For You",
    },
  ];
};

export default function Posts() {
  let posts: Post[] = useLoaderData();
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={post.slug}>{post.title}</Link>
        </li>
      ))}
    </div>
  );
}
