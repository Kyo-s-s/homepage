import { Container, Heading, Text } from "@chakra-ui/react";
import { awards } from "../_data/awards";

export const Award = () => {
  return (
    <Container maxW="1200px">
      <Heading py={2} textAlign="center">
        Award
      </Heading>
      {awards.map((award) => (
        <Text key={award}>{award}</Text>
      ))}
    </Container>
  );
};
