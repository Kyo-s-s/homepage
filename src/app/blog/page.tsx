import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { Box, Container, Heading, Link, LinkBox, Text } from "@chakra-ui/react";

const PostCard = (post: Post) => {
  return (
    <Box py={2}>
      <Heading as="h3" size="lg">
        <Link href={post.url}>{post.title}</Link>
      </Heading>
      <Text>{format(parseISO(post.date), "LLLL d, yyyy")}</Text>
    </Box>
  );
};

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <Container maxW="800px">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </Container>
  );
}
