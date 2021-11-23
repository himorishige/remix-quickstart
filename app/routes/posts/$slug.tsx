import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

export let loader: LoaderFunction = async ({ params }) => {
  return params.slug;
};

export default function PostSlug() {
  let slug = useLoaderData();
  return (
    <div>
      <h1>Some Post: {slug}</h1>
    </div>
  );
}
