import { Box, HStack } from "@chakra-ui/react";
import { useColorMode } from "../color-mode";
import { Switch } from "@/components/ui/switch";

// Switch to toggle color mode (dark/light)
// Displayed on the far right of the navbar

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch onCheckedChange={toggleColorMode} colorPalette="green" />
      <Box textStyle="body">
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Box>
    </HStack>
  );
};

export default ColorModeSwitch;
