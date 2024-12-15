import { Game } from "@/hooks/useGames";
import { Card, Heading, HStack, Icon, Image } from "@chakra-ui/react";
import PlatformIconList from "./self/PlatformIconList";
import { FaWindows } from "react-icons/fa";
import CriticScore from "./self/CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root variant="elevated">
      <Image src={game.background_image} overflow="hidden" borderRadius="2px" />
      <Card.Body gap={2}>
        <>
          <Heading>{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (parentPlatform) => parentPlatform.platform
              )}
            />
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
