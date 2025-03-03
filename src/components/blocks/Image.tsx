import React from "react";
import { Box, Image as ChakraImage } from "@chakra-ui/react";

interface ImageProps {
  attributes: {
    url?: string;
    alt?: string;
    caption?: string;
    id?: number;
    sizeSlug?: string;
    linkDestination?: string;
    className?: string;
  };
}

export default function Image({ attributes }: ImageProps) {
  const { url, alt, caption, className, sizeSlug } = attributes;

  if (!url) return null;

  return (
    <Box
      className={`wp-block-image size-${sizeSlug || "large"} ${
        className || ""
      }`}
    >
      <figure>
        <ChakraImage src={url} alt={alt || ""} borderRadius="md" />
        {caption && (
          <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
        )}
      </figure>
    </Box>
  );
}
