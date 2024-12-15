import usePlatforms from "@/hooks/usePlatforms";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { HiSortAscending } from "react-icons/hi";

const PlatformSelecter = () => {
  const { data, error } = usePlatforms();
  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          <HiSortAscending /> Open
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
          <MenuItem value={platform.name} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelecter;
