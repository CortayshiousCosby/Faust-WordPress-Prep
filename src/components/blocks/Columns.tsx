import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { BlockRenderer } from "../../lib/blocks";

interface ColumnsProps {
  attributes: {
    className?: string;
    isStackedOnMobile?: boolean;
  };
  innerBlocks: any[];
}

export default function Columns({ attributes, innerBlocks }: ColumnsProps) {
  const { className } = attributes;
  const columnCount = innerBlocks.length || 3;

  return (
    <Grid
      templateColumns={{ base: "1fr", md: `repeat(${columnCount}, 1fr)` }}
      gap={6}
      className={`wp-block-columns ${className || ""}`}
    >
      {innerBlocks.map((block, index) => (
        <GridItem key={index}>
          <BlockRenderer block={block} />
        </GridItem>
      ))}
    </Grid>
  );
}
