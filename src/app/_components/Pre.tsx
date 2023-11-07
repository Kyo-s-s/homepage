"use client";

import React, { ReactNode, useState } from "react";
import { Button } from "@chakra-ui/react";

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
    <>
      <pre {...props}>
        <Button
          size="sm"
          top="0.5em"
          right="0.5em"
          position="absolute"
          onClick={copyTextToClipboard}
        >
          {isCopied ? "Copied!" : "Copy"}
        </Button>
        {children}
      </pre>
    </>
  );
};

export default Pre;
