import { ListItem, UnorderedList } from "@chakra-ui/react";
import { awards } from "../_data/awards";
import HomeCard from "./HomeCard";

const Award = () => {
  return (
    <HomeCard title="Award">
      <UnorderedList>
        {awards.map((award) => (
          <ListItem key={award}>{award}</ListItem>
        ))}
      </UnorderedList>
    </HomeCard>
  );
};

export default Award;
