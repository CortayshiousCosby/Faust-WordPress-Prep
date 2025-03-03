import React from "react";
import { Box } from "@chakra-ui/react";
import { BlockRenderer } from "../../lib/blocks";

interface ColumnProps {
  attributes: {
    className?: string;
    width?: string;
  };
  innerBlocks: any[];
}

export default function Column({ attributes, innerBlocks }: ColumnProps) {
  const { className, width } = attributes;

  return (
    <Box
      className={`wp-block-column ${className || ""}`}
      width={width || "auto"}
    >
      {innerBlocks.map((block, index) => (
        <BlockRenderer key={index} block={block} />
      ))}
    </Box>
  );
}
