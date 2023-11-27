import { Box } from "@chakra-ui/react";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import "../../../styles/markdown.css";
import MdxBody from "@/app/_components/blog/MdxBody";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  return (
    <Box p={4}>
      <MdxBody code={post.body.code} />
    </Box>
  );
}
