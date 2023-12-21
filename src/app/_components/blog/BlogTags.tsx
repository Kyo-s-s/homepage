import { tagColors } from "@/app/_data/tagColor";
import { Flex, Tag } from "@chakra-ui/react";

const BlogTag = ({ tag }: { tag: string }) => {
  return <Tag colorScheme={tagColors[tag]}>{tag}</Tag>;
};

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
