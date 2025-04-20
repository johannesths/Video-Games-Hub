/**
 * GameCard.tsx
 *
 * Displays a game on a card component with an image, platforms, critic score
 * and heading.
 */

import { Game } from "@/hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root variant="elevated">
      {/* Image */}
      <Image src={game.background_image} overflow="hidden" borderRadius="2px" />
      <Card.Body gap={2}>
        <>
          <Heading>{game.name}</Heading>
          <HStack justifyContent="space-between">
            {/* Platforms */}
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (parentPlatform) => parentPlatform.platform
              )}
            />
            {/* Critic score */}
            <CriticScore score={game.metacritic} />
          </HStack>
        </>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;

/*

*/
