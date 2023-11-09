import { Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export const affiliations = [
  {
    title: "芝浦工業大学 システム理工学部 数理科学科 3年",
    url: "https://www.mathsci.shibaura-it.ac.jp",
  },
  {
    title: "数理科学研究会 (サークル)",
    url: "https://sitmathclub.github.io",
  },
  {
    title: "モノグサ株式会社 開発インターン",
    url: "https://corp.monoxer.com",
    details: (
      <>
        <Text>
          2022年度夏季の短期インターンに参加し、現在は長期インターンとして継続しています。
        </Text>
        <UnorderedList>
          <ListItem>
            <Link href="https://tech.monoxer.com/entry/2022/10/04/110000">
              Monoxer Intern Report #9_数式誤答生成の精度向上
            </Link>
          </ListItem>
        </UnorderedList>
      </>
    ),
  },
];
