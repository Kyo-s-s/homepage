import { Container, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { awards } from "../_data/awards";

export const Award = () => {
  return (
    <Container maxW="1200px">
      <Heading py={2} textAlign="center">
        Award
      </Heading>
      <UnorderedList>
        {awards.map((award) => (
          <ListItem key={award}>{award}</ListItem>
        ))}
      </UnorderedList>
    </Container>
  );
};
