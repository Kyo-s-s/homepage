import { Grid } from "@chakra-ui/react";
import HomeCard from "./HomeCard";
import { works } from "../_data/works";
import WorksCard from "./WorksCard";

const Works = () => {
  return (
    <HomeCard title="Works">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={4}
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
