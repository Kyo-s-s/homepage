"use client";

import React, { ReactNode, useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { CheckIcon, CopyIcon } from "@chakra-ui/icons";

interface PreProps {
  children: ReactNode;
  raw: string;
}

const Pre = ({ children, raw, ...props }: PreProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyTextToClipboard = async () => {
    navigator.clipboard.writeText(raw);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Box position="relative">
      <Box as="pre" {...props}>
        <IconButton
          aria-label="code copy"
          top="0.2em"
          right="0.2em"
          position="absolute"
          onClick={copyTextToClipboard}
          className="copy-button"
          border="none"
          bg="transparent"
          _hover={{ bg: "transparent" }}
          icon={
            isCopied ? (
              <CheckIcon color="#f7fcfe" />
            ) : (
              <CopyIcon color="#f7fcfe" />
            )
          }
        />
        {children}
      </Box>
    </Box>
  );
};

export default Pre;
