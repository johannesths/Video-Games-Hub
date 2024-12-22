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

/* Menu to filter platforms
  updates GameQuery
 */

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
