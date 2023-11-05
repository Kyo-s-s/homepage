"use client";

import {
  Box,
  Code,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

export const Markdown = ({ html }: { html: string }) => {
  console.log(html);
  const doc = new DOMParser().parseFromString(
    html,
    "text/html"
  ).documentElement;
  return dfs(doc);
};

const dfs = (elem: ChildNode, key?: number): JSX.Element => {
  const name = elem.nodeName;
  const text = elem.textContent;
  switch (true) {
    case ["HTML", "BODY", "P"].includes(name): {
      const children = Array.from(elem.childNodes);
      return (
        <Box key={key}>{children.map((child, idx) => dfs(child, idx))}</Box>
      );
    }

    case ["H1", "H2", "H3", "H4", "H5", "H6"].includes(name): {
      const size = {
        H1: "3xl",
        H2: "2xl",
        H3: "xl",
        H4: "lg",
        H5: "md",
        H6: "sm",
      }[name];
      return (
        <Heading id={text ?? undefined} size={size} key={key}>
          {text}
        </Heading>
      );
    }

    case name == "UL": {
      const children = Array.from(elem.childNodes);
      return (
        <UnorderedList key={key}>
          {children.map((child, idx) => dfs(child, idx))}
        </UnorderedList>
      );
    }

    case name == "LI": {
      const children = Array.from(elem.childNodes);
      return (
        <ListItem key={key}>
          {children.map((child, idx) => dfs(child, idx))}
        </ListItem>
      );
    }

    case name == "CODE":
      return <Code key={key}>{text}</Code>;

    case name == "PRE": {
      return (
        // eslint-disable-next-line react/no-children-prop
        <Code display="block" whiteSpace="pre" children={text} key={key} />
      );
    }

    // TODO: blockquote

    case name == "STRONG":
      return (
        <Text as="b" key={key}>
          {text}
        </Text>
      );

    case "#text".includes(name):
      return <Text key={key}>{text}</Text>;
  }
  return <Box key={key}></Box>;
};
