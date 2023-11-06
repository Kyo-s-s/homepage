"use client";

import { extendTheme } from "@chakra-ui/react";
import { Zen_Kaku_Gothic_New } from "next/font/google";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400"],
  subsets: ["latin"],
});

const theme = extendTheme({
  fonts: {
    body: zenKakuGothicNew.style.fontFamily,
    heading: zenKakuGothicNew.style.fontFamily,
  },
});

export default theme;
