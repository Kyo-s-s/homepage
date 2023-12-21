import { tagColors } from "@/app/_data/tagColor";
import { Flex, Link, Tag } from "@chakra-ui/react";

const BlogTag = ({ tag }: { tag: string }) => {
  return (
    // TODO: /blog ならカンマ区切りで追加する、BlogTag.tsxに切り出し
    <Link href={"/blog?tag=" + tag}>
      <Tag colorScheme={tagColors[tag]}>{tag}</Tag>
    </Link>
  );
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
