"use client";

import {
  Box,
  Heading,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const WorksCard = ({
  work,
}: {
  work: {
    title: string;
    link?: string;
    img: string;
    comment: ReactNode;
    details?: ReactNode;
  };
}) => {
  const { title, link, img, comment, details } = work;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Title = link ? <Link href={link}>{title}</Link> : title;

  return (
    <>
      <Box>
        <Heading py={2} size="md">
          {Title}
        </Heading>
        <Image
          objectFit="cover"
          src={img}
          aspectRatio="16/10"
          alt={title}
          onClick={onOpen}
        />
        {comment && <Box>{comment}</Box>}
      </Box>

      <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{Title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody px={4}>
            <Image src={img} alt={title} />
            <Box py={4}>{details ?? comment}</Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WorksCard;
