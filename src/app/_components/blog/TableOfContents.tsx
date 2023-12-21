"use client";

import { format, parseISO } from "date-fns";
import { Box, Editable, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Post } from "contentlayer/generated";
import { useSearchParams } from "next/navigation";
import { BlogTags } from "./BlogTags";
import { BlogTag } from "./BlogTag";

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

const SearchBox = ({ tag }: { tag: string | null }) => {
  if (tag == null) {
    return <></>;
  }
  return (
    <Editable>
      <Flex>
        <Text pr={2}>Search:</Text>
        <BlogTag tag={tag} closeable />
      </Flex>
    </Editable>
  );
};

export const TableOfContents = ({ posts }: { posts: Post[] }) => {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  return (
    <>
      <SearchBox tag={tag} />
      {posts
        .filter((post) => tag == null || post.tags?.includes(tag))
        .map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
    </>
  );
};
