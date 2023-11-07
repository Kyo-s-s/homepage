import { Box, Container } from "@chakra-ui/react";
import { allPosts } from "contentlayer/generated";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import "../../../styles/markdown.css";
import Pre from "@/app/_components/Pre";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

const components: MDXComponents = {
  pre: Pre as any,
};

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Box p={4}>
      <Container maxW="800px">
        <MDXContent components={components} />
      </Container>
    </Box>
  );
}
