import { Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import HomeCard from "./HomeCard";
import { affiliation, affiliations } from "../_data/affiliations";
import { ReactNode } from "react";

const Item = ({ affiliation }: { affiliation: affiliation }) => {
  const { title, url, details } = affiliation;
  const linkTitle = url ? <Link href={url}>{title}</Link> : title;
  return (
    <>
      <ListItem>{linkTitle}</ListItem>
      {details && <Box paddingLeft="0.5em">{details}</Box>}
    </>
  );
};

const Affiliation = () => {
  return (
    <HomeCard title="Affiliation">
      <UnorderedList>
        {affiliations.map((affiliation, idx) => (
          <Item affiliation={affiliation} key={idx} />
        ))}
      </UnorderedList>
    </HomeCard>
  );
};

export default Affiliation;
