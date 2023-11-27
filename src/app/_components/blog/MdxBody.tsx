"use client";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import Pre from "@/app/_components/blog/Pre";
import LinkHeading from "@/app/_components/blog/LinkHeading";
import { Container } from "@chakra-ui/react";

const components: MDXComponents = {
  pre: Pre as any,
  h1: LinkHeading("h1") as any,
  h2: LinkHeading("h2") as any,
  h3: LinkHeading("h3") as any,
  h4: LinkHeading("h4") as any,
  h5: LinkHeading("h5") as any,
  h6: LinkHeading("h6") as any,
};

const MdxBody = ({ code }: { code: string }) => {
  const MdxComponent = useMDXComponent(code);
  return (
    <Container maxW="800px">
      <MdxComponent components={components} />
    </Container>
  );
};

export default MdxBody;
