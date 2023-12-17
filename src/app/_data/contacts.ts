import { IconType } from "react-icons";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

export type contact = {
  platform: string;
  username: string;
  url: string;
  icon: IconType;
};

export const contacts: contact[] = [
  {
    platform: "GitHub",
    username: "Kyo-s-s",
    url: "https://github.com/Kyo-s-s",
    icon: FaGithub,
  },
  {
    platform: "X (Twitter)",
    username: "@Kyo_s_s",
    url: "https://twitter.com/Kyo_s_s",
    icon: FaXTwitter,
  },
];
