import { Text } from "@chakra-ui/react";

export const works = [
  {
    title: "Nasa",
    link: "https://nasa-hackathon-2023-yokohama.vercel.app",
    comment: <Text>NASA Space Apps Challenge 2023 Yokohama 最優秀賞作品</Text>,
  },
  {
    title: "Library",
    link: "https://kyo-s-s.github.io/Library/",
    img: "Kyo-s-s-Library.png",
    comment: (
      <Text>
        競プロで使用しているライブラリ集です。online-judge-tools/verification-helperを使用し、
        テストを自動化しています。
      </Text>
    ),
  },
  {
    title: "SIT Timetable",
    link: "https://kyo-s-s.github.io/sit_timetable/",
    img: "sit-timetable.png",
    comment: (
      <Text>
        履修登録の際に、時間割管理が簡単にできるサイトがあれば便利だなと思い、
        Reactを用いて作成しました。
      </Text>
    ),
  },
];
