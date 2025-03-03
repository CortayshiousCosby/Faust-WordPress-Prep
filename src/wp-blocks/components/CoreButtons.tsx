import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import FaustBlocks from "./FaustBlocks";

interface CoreButtonsProps {
  block: {
    name: string;
    attributes: {
      className?: string;
      style?: any;
      layout?: {
        type?: string;
        justifyContent?: string;
      };
    };
    innerBlocks?: any[];
    parentName?: string; // To check if parent is a column
  };
}

export default function CoreButtons({ block }: CoreButtonsProps) {
  const { attributes, innerBlocks = [], parentName } = block;
  const { className, style, layout } = attributes;

  // Determine justification from layout or className
  let justifyContent = "flex-start"; // Default to left alignment

  // Check if this is inside a column (for centering)
  const isInColumn = parentName === "core/column";

  if (isInColumn) {
    justifyContent = "center"; // Center in columns
  }

  if (layout?.justifyContent) {
    justifyContent = layout.justifyContent;
  } else if (className) {
    if (className.includes("is-content-justification-center")) {
      justifyContent = "center";
    } else if (className.includes("is-content-justification-left")) {
      justifyContent = "flex-start";
    } else if (className.includes("is-content-justification-right")) {
      justifyContent = "flex-end";
    } else if (className.includes("is-content-justification-space-between")) {
      justifyContent = "space-between";
    }
  }

  return (
    <Box width="100%" my={4} className={`wp-block-buttons ${className || ""}`}>
      <Flex
        justifyContent={justifyContent}
        flexWrap="wrap"
        width="100%"
        gap={4}
        alignItems="center"
      >
        {innerBlocks?.length > 0 && <FaustBlocks blocks={innerBlocks} />}
      </Flex>
    </Box>
  );
}
