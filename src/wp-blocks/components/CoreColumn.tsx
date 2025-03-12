import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import FaustBlocks from "./FaustBlocks";

interface CoreColumnProps {
  attributes: {
    className?: string;
    width?: string;
    style?: any;
    verticalAlignment?: string;
    url?: string; // For linking to content pages
  };
  innerBlocks?: any[];
  block?: {
    name: string;
  };
}

export default function CoreColumn({
  attributes,
  innerBlocks = [],
  block,
}: CoreColumnProps) {
  const { className, width, style, verticalAlignment, url } = attributes;
  console.log("CoreColumn", attributes);
  // Determine vertical alignment
  let alignItems = "center"; // Default center alignment for content
  let justifyContent = "flex-start";

  if (verticalAlignment === "center") {
    justifyContent = "center";
  } else if (verticalAlignment === "bottom") {
    justifyContent = "flex-end";
  }

  // Prepare the content with all blocks
  const columnContent = (
    <Box
      className={`wp-block-column ${className || ""}`}
      width={{ base: "100%", md: width || "auto" }}
      style={style}
      display="flex"
      flexDirection="column"
      alignItems={alignItems}
      justifyContent={justifyContent}
      textAlign="center"
      position="relative"
      zIndex="1"
    >
      {innerBlocks && innerBlocks.length > 0 && (
        <Box width="100%">
          <FaustBlocks blocks={innerBlocks} />
        </Box>
      )}
    </Box>
  );

  // If a URL is provided, wrap the content in a Link
  if (url) {
    return (
      <Box position="relative">
        {columnContent}
        <Link href={url} passHref>
          <a
            className="column-link"
            aria-label="Read more about this topic"
          ></a>
        </Link>
      </Box>
    );
  }

  // Otherwise just return the content
  return columnContent;
}
