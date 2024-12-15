import { Input } from "@chakra-ui/react";
import { InputGroup } from "../input-group";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <InputGroup startElement={<LuSearch />}>
      <Input borderRadius={20} placeholder="Search Games..."></Input>
    </InputGroup>
  );
};

export default SearchInput;
