import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageURL from "@/services/imageUrl";
import { Box, Button, Heading, HStack, Image } from "@chakra-ui/react";
import { SkeletonText } from "../skeleton";

// List of genres shown on the left, also used to filter genres

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre | null) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) {
    return (
      <Box as="ul" padding="8px">
        <SkeletonText noOfLines={20} height="32px" gap="2" />
      </Box>
    );
  }

  return (
    <Box as="ul" padding="8px">
      <Heading size="3xl" textAlign="center">
        Genres
      </Heading>
      {data.map((genre) => (
        <Box padding="5px" key={genre.id}>
          <li>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageURL(genre.image_background)}
              />
              <Button
                variant={genre.id === selectedGenre?.id ? "solid" : "outline"}
                width="80%"
                onClick={() =>
                  onSelectGenre(selectedGenre?.id === genre.id ? null : genre)
                }
              >
                {genre.name}
              </Button>
            </HStack>
          </li>
        </Box>
      ))}
    </Box>
  );
};

export default GenreList;
