import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { Container } from "@chakra-ui/react";
import { TableOfContents } from "../_components/blog/TableOfContents";

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <Container maxW="800px">
      <TableOfContents posts={posts} />
    </Container>
  );
}
