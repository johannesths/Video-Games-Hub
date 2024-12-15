import { Game } from "@/hooks/useGames";
import { Card, Heading, Icon, Image } from "@chakra-ui/react";
import PlatformIconList from "./self/PlatformIconList";
import { FaWindows } from "react-icons/fa";

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
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (parentPlatform) => parentPlatform.platform
            )}
          />
        </>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;

/*

*/
