import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/ui/self/NavBar";

function App() {
  return (
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
      <GridItem area="main">MAIN</GridItem>
    </Grid>
  );
}

export default App;
