import axios from "axios";
import { Box, Heading, Text } from "@chakra-ui/react";
import HomeCard from "./HomeCard";
import { skills } from "../_data/skills";
import { ReactNode } from "react";

const getAtCoderRate = async (type: "algo" | "heuristic") => {
  const url = `https://atcoder.jp/users/Kyo_s_s/history/json?contestType=${type}`;
  const response = await axios.get(url);
  return (response.data as any[]).map((elem: any) => {
    return {
      NewRating: elem["NewRating"] as number,
    };
  });
};

const Skill = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <Box>
      <Heading size="md" py={2}>
        {title}
      </Heading>
      <Box pl="1em">{children}</Box>
    </Box>
  );
};

const Skills = async () => {
  const algo = await getAtCoderRate("algo");
  const heur = await getAtCoderRate("heuristic");
  const algoNowRate = algo[algo.length - 1].NewRating;
  const heurNowRate = heur[heur.length - 1].NewRating;
  const algoMaxRate = algo.reduce(
    (acc, val) => (acc = Math.max(acc, val.NewRating)),
    0
  );

  return (
    <HomeCard title="Skills">
      <Skill title="AtCoder">
        <Text>
          Algorithm: {algoNowRate} (Max: {algoMaxRate}) / Heuristic:{" "}
          {heurNowRate}
        </Text>
      </Skill>
      <Skill title="Language">
        <Text>{skills.language.join(" / ")}</Text>
      </Skill>
      <Skill title="Framework">
        <Text>{skills.framework.join(" / ")}</Text>
      </Skill>
      <Skill title="Tools">
        <Text>{skills.tools.join(" / ")}</Text>
      </Skill>
    </HomeCard>
  );
};

export default Skills;
