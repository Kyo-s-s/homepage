import axios from "axios";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
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

const Rate = ({ value }: { value: number }) => {
  const colorMap: { [key: number]: string } = {
    0: "black",
    400: "gray",
    800: "green",
    1200: "cyan",
    1600: "#0000ff",
    2000: "#C0C000",
  };
  const color = colorMap[value - (value % 400)] || "black";
  return (
    <Text as="b" color={color}>
      {value}
    </Text>
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
          <Link href="https://atcoder.jp/users/Kyo_s_s?contestType=algo">Algorithm</Link>
          : <Rate value={algoNowRate} /> (Max: <Rate value={algoMaxRate} />)
          {" / "}  
          <Link href="https://atcoder.jp/users/Kyo_s_s?contestType=heuristic">Heuristic</Link>
          : <Rate value={heurNowRate} />
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
