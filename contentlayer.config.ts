import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { Pluggable } from "unified";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import { visit } from "unist-util-visit";

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

const handlePreTags = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl.tagName !== "code") return;
      let code = "";
      const dfs = (node: any) => {
        if (node.value !== undefined) {
          code += node.value;
        } else {
          for (const child of node.children) {
            dfs(child);
          }
        }
      };
      dfs(codeEl);
      node.properties["raw"] = code;
    }
  });
};

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypePrismPlus,
      rehypeSlug,
      rehypeKatex as unknown as Pluggable<any[]>,
      handlePreTags,
    ],
  },
});
