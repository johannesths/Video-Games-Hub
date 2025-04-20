/**
 * CriticScore.tsx
 *
 * Displays the critic score fetched in the rawg.io request as a number
 * with a color background (green, yellow, red) depending on score.
 */

import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  // Determine background color
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
