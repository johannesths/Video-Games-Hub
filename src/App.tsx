import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">NAV</GridItem>
      <GridItem area="aside" hideBelow="lg">
        ASIDE
      </GridItem>
      <GridItem area="main">MAIN</GridItem>
    </Grid>
  );
}

export default App;
