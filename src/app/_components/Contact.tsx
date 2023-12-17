import { Box, Flex, Grid, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import HomeCard from "./HomeCard";
import { contact, contacts } from "../_data/contacts";

const Item = ({ contact }: { contact: contact }) => {
  const { platform, username, url } = contact;
  return (
    <LinkBox>
      <LinkOverlay href={url} />
      <Flex px={8} py={2} gap={6} align="center">
        <contact.icon size="3.2em" />
        <Box>
          <Text fontSize="1.2em" as="b">
            {platform}
          </Text>
          <Text>{username}</Text>
        </Box>
      </Flex>
    </LinkBox>
  );
};

const Contact = () => {
  return (
    <HomeCard title="Contact">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
      >
        {contacts.map((contact, idx) => (
          <Item key={idx} contact={contact} />
        ))}
      </Grid>
    </HomeCard>
  );
};

export default Contact;
