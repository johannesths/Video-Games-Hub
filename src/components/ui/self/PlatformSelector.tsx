/**
 * PlatformSelecter.tsx
 *
 * Menu to filter platforms that games are available on.
 * Updates the game query.
 */

import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { HiSortAscending } from "react-icons/hi";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelecter = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="lg">
          <HiSortAscending />{" "}
          {selectedPlatform ? selectedPlatform.name : "Platforms"}
        </Button>
      </MenuTrigger>
      {/* Platforms */}
      <MenuContent>
        {data.map((platform) => (
          <MenuItem
            value={platform.name}
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
            fontSize={selectedPlatform?.id === platform.id ? "14" : "11"}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelecter;
