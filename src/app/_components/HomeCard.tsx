import { Container, Heading } from "@chakra-ui/react";
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
    <Container my={2} maxW={constants.maxW}>
      <Heading textAlign="center">{title}</Heading>
      {children}
    </Container>
  );
};

export default HomeCard;
