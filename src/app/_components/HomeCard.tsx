import { Box, Container, Heading } from "@chakra-ui/react";
import { constants } from "../_data/constants";
import { ReactNode } from "react";

const HomeCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Container maxW={constants.maxW}>
      <Heading py={2}>{title}</Heading>
      <Box px={4} py={2}>
        {children}
      </Box>
    </Container>
  );
};

export default HomeCard;
