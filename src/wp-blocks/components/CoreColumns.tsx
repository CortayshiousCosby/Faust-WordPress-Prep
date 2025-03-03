import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import FaustBlocks from "./FaustBlocks";

interface CoreColumnsProps {
  block: {
    name: string;
    attributes: {
      className?: string;
      style?: any;
      isStackedOnMobile?: boolean;
      verticalAlignment?: string;
    };
    innerBlocks?: any[];
  };
}

export default function CoreColumns({ block }: CoreColumnsProps) {
  const { attributes, innerBlocks = [] } = block;
  const {
    className,
    style,
    isStackedOnMobile = true,
    verticalAlignment,
  } = attributes;

  // Calculate the number of columns based on innerBlocks
  const columnCount = innerBlocks?.length || 1;

  // Determine vertical alignment
  let alignItems = "stretch"; // Default
  if (verticalAlignment === "top") {
    alignItems = "flex-start";
  } else if (verticalAlignment === "center") {
    alignItems = "center";
  } else if (verticalAlignment === "bottom") {
    alignItems = "flex-end";
  }

  return (
    <Box width="100%" my={6} className={className} style={style}>
      <SimpleGrid
        columns={{ base: isStackedOnMobile ? 1 : columnCount, md: columnCount }}
        gap={6}
        width="100%"
        alignItems={alignItems}
        justifyItems="center"
        textAlign="center"
      >
        {innerBlocks?.length > 0 && <FaustBlocks blocks={innerBlocks} />}
      </SimpleGrid>
    </Box>
  );
}
