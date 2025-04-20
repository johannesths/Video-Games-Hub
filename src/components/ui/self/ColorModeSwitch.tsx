/**
 * ColorModeSwitch.tsx
 *
 * Simple switch to change the color mode between light and dark.
 */

import { Box, HStack } from "@chakra-ui/react";
import { useColorMode } from "../color-mode";
import { Switch } from "@/components/ui/switch";

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
