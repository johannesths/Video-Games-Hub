/**
 * GameCardSkeleton.tsx
 *
 * Loading skeletons that match the size of the actual game cards.
 */

import { Card, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "../skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="345px">
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
