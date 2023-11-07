import { Flex, Heading } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";

import { ReactNode } from "react";

interface LinkHeadingProps {
  children: ReactNode;
  id: string;
}

export const LinkHeading = (as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
  const Component = ({ children, id }: LinkHeadingProps) => {
    return (
      <Flex className="link-heading" py={2} alignItems="center" gap={2}>
        <Heading as={as} id={id}>
          {children}
        </Heading>
        <a className="link-icon" href={"#" + id}>
          <LinkIcon boxSize={6} color="#7b7c7d" />
        </a>
      </Flex>
    );
  };

  Component.displayName = `LinkHeading.${as}`;

  return Component;
};
