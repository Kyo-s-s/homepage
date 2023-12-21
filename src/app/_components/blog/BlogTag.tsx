"use client";

import { tagColors } from "@/app/_data/tagColor";
import { Link, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";

export const BlogTag = ({
  tag,
  closeable = false,
}: {
  tag: string;
  closeable?: boolean;
}) => {
  return (
    // TODO: /blog ならカンマ区切りで追加する、BlogTag.tsxに切り出し
    <Tag colorScheme={tagColors[tag]}>
      <Link href={"/blog?tag=" + tag}>
        <TagLabel>{tag}</TagLabel>
      </Link>
      {closeable && (
        <TagCloseButton onClick={() => (location.href = "/blog")} />
      )}
    </Tag>
  );
};
