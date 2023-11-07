"use client";

import { Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface PreProps {
  children: ReactNode;
  raw: string;
}

const Pre = ({ children, raw, ...props }: PreProps) => {
  const copyTextToClipboard = () => {
    navigator.clipboard.writeText(raw);
  };

  return (
    <>
      <Button onClick={copyTextToClipboard}>Copy</Button>
      <pre {...props}>{children}</pre>
    </>
  );
};

export default Pre;
