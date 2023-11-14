import {
  Box,
  Center,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import HomeCard from "./HomeCard";
import { works } from "../_data/works";
import { ReactNode } from "react";

const WorksCard = ({
  work,
}: {
  work: {
    title: string;
    link?: string;
    img?: string;
    comment: ReactNode;
    details?: ReactNode;
  };
}) => {
  const { title, link, img, comment, details } = work;
  return (
    <Center>
      <Box>
        <Heading py={2} size="md">
          {link ? <Link href={link}>{title}</Link> : title}
        </Heading>
        <Image
          objectFit="cover"
          src={img ?? "twitter_icon.png"}
          aspectRatio="16/10"
          alt="icon"
        />
        {comment && <Box>{comment}</Box>}
      </Box>
    </Center>
  );
};

const Works = () => {
  return (
    <HomeCard title="Works">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={2}
        alignItems="start"
      >
        {works.map((work, idx) => (
          <WorksCard key={idx} work={work} />
        ))}
      </Grid>
    </HomeCard>
  );
};

export default Works;
