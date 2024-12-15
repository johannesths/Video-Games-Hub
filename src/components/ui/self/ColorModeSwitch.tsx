import { HStack } from "@chakra-ui/react";
import { useColorMode } from "../color-mode";
import { Switch } from "@/components/ui/switch";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch onCheckedChange={toggleColorMode}>{colorMode}</Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
