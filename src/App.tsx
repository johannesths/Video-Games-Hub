import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/ui/self/NavBar";
import { ColorModeProvider } from "./components/ui/color-mode";
import GameGrid from "./components/ui/GameGrid";
import GenreList from "./components/ui/self/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelecter from "./components/ui/self/PlatformSelecter";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/ui/self/SortSelector";
import { HStack } from "@chakra-ui/react";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
        <GridItem area="main">
          <HStack spaceX={5} padding={2} marginBottom={5}>
            <PlatformSelecter
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </ColorModeProvider>
  );
}

export default App;
