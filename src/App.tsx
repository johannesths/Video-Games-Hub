/**
 * App.tsx
 *
 * This is the root component of the application, designed as a responsive gaming hub interface.
 *
 * Key Features:
 * - Responsive layout using Chakra UI's Grid system, adapting to screen size.
 * - Centralized query state ('gameQuery') to filter games by genre, platform, sort order and search input.
 * - Light/Dark mode support via a custom 'ColorModeProvider'.
 * - Modular component structure for clarity and reuse (e.g., 'NavBar', 'GenreList', 'GameGrid', etc.).
 *
 * User Flow:
 * - Users can search for games via the NavBar.
 * - On larger screens, a genre list appears in a sidebar for category-based filtering.
 * - Users can refine results further using platform and sort selectors.
 * - The 'GameGrid' displays results dynamically based on the current query state.
 */

import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/ui/self/NavBar";
import { ColorModeProvider } from "./components/ui/color-mode";
import GameGrid from "./components/ui/self/GameGrid";
import GenreList from "./components/ui/self/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelecter from "./components/ui/self/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/ui/self/SortSelector";
import { HStack } from "@chakra-ui/react";
import GameHeading from "./components/ui/self/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <ColorModeProvider>
      {/* Layout */}
      <Grid
        templateAreas={{
          base: '"nav" "main"',
          lg: '"nav nav" "aside main"',
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        {/* NavBar */}
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>

        {/* Genre list */}
        <GridItem area="aside" hideBelow="lg">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
        <GridItem area="main">
          <Box spaceX={5} padding={2} marginBottom={5}>
            <GameHeading gameQuery={gameQuery} />
            <HStack>
              {/* Platform selector */}
              <PlatformSelecter
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />

              {/* Sorting options */}
              <SortSelector
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
                sortOrder={gameQuery.sortOrder}
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </ColorModeProvider>
  );
}

export default App;
