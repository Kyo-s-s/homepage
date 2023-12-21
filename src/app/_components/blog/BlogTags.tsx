import { Flex } from "@chakra-ui/react";
import { BlogTag } from "./BlogTag";

export const BlogTags = ({ tags }: { tags: string[] | undefined }) => {
  if (tags == undefined) {
    return <></>;
  }
  return (
    <Flex py={1} gap={1}>
      {tags.map((tag, idx) => (
        <BlogTag key={idx} tag={tag} />
      ))}
    </Flex>
  );
};
