import { Text } from "@chakra-ui/react";

export type work = {
  title: string;
  link?: string;
  img: string;
  comment: JSX.Element;
  details?: JSX.Element;
};

export const works = [
  {
    title: "Moonquake Viewer",
    link: "https://nasa-hackathon-2023-yokohama.vercel.app",
    img: "moonquake_viewer.png",
    comment: (
      <Text>
        NASA Space Apps Challenge 2023 横浜大会最優秀賞作品です。
        月面上の地震データを可視化するWebアプリで、Next.jsを用いて作成しました。
      </Text>
    ),
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
        履修登録の際に時間割管理が簡単にできるサイトがあれば便利だなと思い、
        Reactを用いて作成しました。
      </Text>
    ),
  },
];
