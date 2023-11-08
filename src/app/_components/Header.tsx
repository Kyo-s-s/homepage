"use client";

import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Link,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Container,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const pages = [
  { title: "Home", path: "/" },
  { title: "Blog", path: "/blog" },
];

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container maxW="1200px" h="auto" px={0}>
        <Flex justify="space-between" p={4}>
          <Heading size="xl">Kyo_s_s Homepage</Heading>
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              aria-label="Open Menu"
              size="md"
              icon={<HamburgerIcon />}
              onClick={onOpen}
            />
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            {pages.map((val, idx) => (
              <Link key={idx} href={val.path} px={2}>
                <Button variant="ghost">{val.title}</Button>
              </Link>
            ))}
          </Box>
        </Flex>
      </Container>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Kyo_s_s Homepage</DrawerHeader>
            <DrawerBody>
              <VStack>
                {pages.map((val, idx) => (
                  <Link key={idx} href={val.path}>
                    {val.title}
                  </Link>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
