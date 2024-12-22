import { Badge } from "@chakra-ui/react";

/* Critic score from fetch are shown as a colored badge on game card
  color is based on the number of the score */

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score >= 75 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge
      fontSize="14px"
      paddingX="4px"
      borderRadius="3px"
      colorPalette={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
