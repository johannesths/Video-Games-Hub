import { Card, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "../skeleton";

/* Loading Skeletons that match size of actual game cards */

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
