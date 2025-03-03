import React, { CSSProperties } from "react";
import { Box, Image, Link, Text } from "@chakra-ui/react";

interface CoreImageProps {
  block: {
    attributes: {
      url?: string;
      alt?: string;
      caption?: string;
      align?: string;
      href?: string;
      rel?: string;
      linkClass?: string;
      linkTarget?: string;
      sizeSlug?: string;
      title?: string;
      width?: number | string;
      height?: number | string;
      id?: number;
    };
  };
}

const CoreImage: React.FC<CoreImageProps> = ({ block }) => {
  const {
    url,
    alt = "",
    caption,
    align = "none",
    href,
    linkTarget,
    width,
    height,
  } = block.attributes;

  if (!url) return null;

  const imageElement = (
    <Image
      src={url}
      alt={alt}
      title={block.attributes.title}
      width={width || "100%"}
      height={height || "auto"}
      objectFit="cover"
      borderRadius="md"
    />
  );

  const getAlignmentStyle = (): CSSProperties => {
    switch (align) {
      case "left":
        return {
          float: "left",
          marginRight: "1rem",
          marginBottom: "1rem",
        } as CSSProperties;
      case "right":
        return {
          float: "right",
          marginLeft: "1rem",
          marginBottom: "1rem",
        } as CSSProperties;
      case "center":
        return { margin: "0 auto", display: "block" };
      case "wide":
        return { width: "100%" };
      case "full":
        return {
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        };
      default:
        return {};
    }
  };

  const imageWithAlignment = (
    <Box className={`align${align}`} style={getAlignmentStyle()}>
      {href ? (
        <Link href={href} target={linkTarget || "_self"}>
          {imageElement}
        </Link>
      ) : (
        imageElement
      )}

      {caption && (
        <Text
          fontSize="sm"
          color="gray.600"
          textAlign="center"
          mt={2}
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      )}
    </Box>
  );

  return imageWithAlignment;
};

export default CoreImage;
