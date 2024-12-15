import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/ui/self/NavBar";
import { ColorModeProvider } from "./components/ui/color-mode";
import GameGrid from "./components/ui/GameGrid";
import GenreList from "./components/ui/self/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelecter from "./components/ui/self/PlatformSelecter";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <ColorModeProvider>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <GridItem area="aside" hideBelow="lg">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
        <GridItem area="main">
          <PlatformSelecter />
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </ColorModeProvider>
  );
}

export default App;
