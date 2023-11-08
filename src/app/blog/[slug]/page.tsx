import { Box, Container } from "@chakra-ui/react";
import { allPosts } from "contentlayer/generated";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import Pre from "@/app/_components/blog/Pre";
import LinkHeading from "@/app/_components/blog/LinkHeading";
import "../../../styles/markdown.css";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

const components: MDXComponents = {
  pre: Pre as any,
  h1: LinkHeading("h1") as any,
  h2: LinkHeading("h2") as any,
  h3: LinkHeading("h3") as any,
  h4: LinkHeading("h4") as any,
  h5: LinkHeading("h5") as any,
  h6: LinkHeading("h6") as any,
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
