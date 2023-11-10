import { Box, Center, Grid, Image, Text } from "@chakra-ui/react";
import HomeCard from "./HomeCard";

const WorksCard = ({ title }: { title: string }) => {
  return (
    <Center>
      <Box>
        <Image
          objectFit="cover"
          src="twitter_icon.png"
          aspectRatio="16/10"
          alt="icon"
        />
        <Text>{title}</Text>
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
      >
        <WorksCard title="Nasa" />
        <WorksCard title="Library" />
        <WorksCard title="sit-timetable" />
      </Grid>
    </HomeCard>
  );
};

export default Works;
