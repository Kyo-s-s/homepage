import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export const Profile = () => {
  return (
    <Container maxW="1200px">
      <Heading py={2} textAlign="center">
        Profile
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={8}
        px={8}
      >
        <GridItem>
          <Box h="100%">
            <Center h="100%">
              <Image maxH="250px" src="twitter_icon.png" alt="icon" />
            </Center>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Box>
            <Text>
              以下は、あなたの自己紹介文の一例です：
              こんにちは、Kyo_s_sと申します。山梨県出身の学生で、現在は芝浦工業大学システム理工学部数理科学科に在籍しています。私の大きな趣味は競技プログラミングで、その分野での実績としてAtCoderのAlgorithm部門で青色のランクとHeuristic部門でも青色のランクを持っています。また、ICPC
              2022 Yokohama大会に出場した経験もあります。
              数理科学に興味を持ち、競技プログラミングを通じて問題解決とアルゴリズム設計に情熱を注いでいます。私は効果的なソリューションを見つけ出すことに喜びを感じ、チームで協力してプログラミングの課題に挑戦することが好きです。
              私の個人HPでは、競技プログラミングに関する情報や経験を共有し、数理科学についての学びや研究についても発信していく予定です。どうぞお気軽にお立ち寄りいただき、ご興味のある内容をご覧いただければ幸いです。
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};
