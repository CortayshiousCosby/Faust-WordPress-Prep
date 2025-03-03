import React from "react";
import { Box, Container, Heading, Text, Image } from "@chakra-ui/react";
import WordPressContent from "./WordPressContent";

interface PostPageBannerProps {
  date?: string;
  featuredImage?: {
    sourceUrl: string;
    altText: string;
    mediaDetails?: {
      width: number;
      height: number;
    };
  };
  content?: string;
}

const PostPageBanner: React.FC<PostPageBannerProps> = ({
  date,
  featuredImage,
  content,
}) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <Box as="section" py={10} bg="gray.50">
      <Container maxW="container.xl">
        {featuredImage && (
          <Box mb={6} position="relative" height="400px">
            <Image
              src={featuredImage.sourceUrl}
              alt={featuredImage.altText || ""}
              objectFit="cover"
              width="100%"
              height="100%"
              borderRadius="lg"
            />
          </Box>
        )}

        {date && (
          <Text fontSize="sm" color="gray.600" mb={2}>
            {formattedDate}
          </Text>
        )}

        {content && (
          <Box mt={4}>
            <WordPressContent content={content} />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default PostPageBanner;
