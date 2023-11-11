import axios from "axios";
import { Heading, Text } from "@chakra-ui/react";
import HomeCard from "./HomeCard";
import { skills } from "../_data/skills";

const getAtCoderRate = async (type: "algo" | "heuristic") => {
  const url = `https://atcoder.jp/users/Kyo_s_s?contestType=${type}`;
  const response = await axios.get(url);
  const html = JSON.stringify(response.data);
  const match = html.match(/Rating<\/th><td><span class='.+?'>[0-9]+/);
  if (match !== null) {
    return Number(match[0].match(/[0-9]+/)![0]);
  }
  return null;
};

const Skills = async () => {
  const algoRate = await getAtCoderRate("algo");
  const heurRate = await getAtCoderRate("heuristic");
  return (
    <HomeCard title="Skills">
      <Heading size="md" pb={2}>
        AtCoder
      </Heading>
      <Text pl="1em">
        Algorithm: {algoRate} / Heuristic: {heurRate}
      </Text>
      <Heading size="md" py={2}>
        Language
      </Heading>
      <Text pl="1em">{skills.language.join(" / ")}</Text>
      <Heading size="md" py={2}>
        Framework
      </Heading>
      <Text pl="1em">{skills.framework.join(" / ")}</Text>
      <Heading size="md" py={2}>
        Tools
      </Heading>
      <Text pl="1em">{skills.tools.join(" / ")}</Text>
    </HomeCard>
  );
};

export default Skills;
