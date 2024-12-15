import { Input } from "@chakra-ui/react";
import { InputGroup } from "../input-group";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup startElement={<LuSearch />}>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
