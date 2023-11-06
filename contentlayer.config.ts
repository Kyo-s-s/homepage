import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { Pluggable } from "unified";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import highlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      highlight as unknown as Pluggable<any[]>,
      rehypeSlug,
      rehypeKatex as unknown as Pluggable<any[]>,
    ],
  },
});
