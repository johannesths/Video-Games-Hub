/**
 * PlatformIconList.tsx
 *
 * A list of the most popular platforms, displayed as icons.
 * Only available platforms are shown on the game gard, see props.
 */

import {
  FaWindows,
  FaApple,
  FaXbox,
  FaPlaystation,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "@/hooks/useGames";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  //

  return (
    <HStack>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug] ?? FaWindows;
        return (
          <Icon key={platform.slug} color="gray.600">
            <IconComponent />
          </Icon>
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
