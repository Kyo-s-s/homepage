import { Box, Flex, Heading } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";

import { ReactNode } from "react";

interface LinkHeadingProps {
  children: ReactNode;
  id: string;
}

const size = {
  h1: "2.4em",
  h2: "2.2em",
  h3: "2.0em",
  h4: "1.8em",
  h5: "1.6em",
  h6: "1.4em",
};

const iconSize = {
  h1: "1.6em",
  h2: "1.4em",
  h3: "1.2em",
  h4: "1.0em",
  h5: "1.0em",
  h6: "1.0em",
};

const LinkHeading = (as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
  const Component = ({ children, id }: LinkHeadingProps) => {
    return (
      <Flex className="link-heading" py={2} alignItems="center" gap={2}>
        <Heading as={as} fontSize={size[as]} id={id}>
          {children}
        </Heading>
        <Box as="a" className="link-icon" href={"#" + id}>
          <LinkIcon fontSize={iconSize[as]} color="#7b7c7d" />
        </Box>
      </Flex>
    );
  };

  Component.displayName = `LinkHeading.${as}`;

  return Component;
};

export default LinkHeading;
