import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/ui/self/NavBar";
import { ColorModeProvider } from "./components/ui/color-mode";
import GameGrid from "./components/ui/GameGrid";

function App() {
  return (
    <ColorModeProvider>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <GridItem area="aside" hideBelow="lg">
          ASIDE
        </GridItem>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </ColorModeProvider>
  );
}

export default App;
