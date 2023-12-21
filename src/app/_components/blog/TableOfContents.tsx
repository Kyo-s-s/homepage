"use client";

import { format, parseISO } from "date-fns";
import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import { Post } from "contentlayer/generated";
import { BlogTags } from "./BlogTags";
import { useSearchParams } from "next/navigation";

const PostCard = (post: Post) => {
  return (
    <Box py={2}>
      <Heading as="h3" size="lg">
        <Link href={post.url}>{post.title}</Link>
      </Heading>
      <BlogTags tags={post.tags} />
      <Text>{format(parseISO(post.date), "LLLL d, yyyy")}</Text>
    </Box>
  );
};

export const TableOfContents = ({ posts }: { posts: Post[] }) => {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");
  return (
    <>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </>
  );
};
