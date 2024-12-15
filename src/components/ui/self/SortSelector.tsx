import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { HiSortAscending } from "react-icons/hi";

interface Props {}

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          <HiSortAscending /> Sort by
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="Relevance">Relevance</MenuItem>
        <MenuItem value="Date added">Date added</MenuItem>
        <MenuItem value="Name">Name</MenuItem>
        <MenuItem value="Release Date">Release Date</MenuItem>
        <MenuItem value="Average Rating">Average Rating</MenuItem>
        <MenuItem value="Popularity">Popularity</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
