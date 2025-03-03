import React from "react";
import { Box } from "@chakra-ui/react";
import { BlockRenderer } from "../../lib/blocks";

interface GroupProps {
  attributes: {
    className?: string;
    align?: string;
    style?: {
      spacing?: {
        padding?: {
          top?: string;
          right?: string;
          bottom?: string;
          left?: string;
        };
        margin?: {
          top?: string;
          right?: string;
          bottom?: string;
          left?: string;
        };
      };
    };
  };
  innerBlocks: any[];
}

export default function Group({ attributes, innerBlocks }: GroupProps) {
  const { className, align, style } = attributes;

  const padding = {
    top: style?.spacing?.padding?.top || "0",
    right: style?.spacing?.padding?.right || "0",
    bottom: style?.spacing?.padding?.bottom || "0",
    left: style?.spacing?.padding?.left || "0",
  };

  const margin = {
    top: style?.spacing?.margin?.top || "0",
    right: style?.spacing?.margin?.right || "0",
    bottom: style?.spacing?.margin?.bottom || "0",
    left: style?.spacing?.margin?.left || "0",
  };

  return (
    <Box
      className={`wp-block-group ${align ? `align${align}` : ""} ${
        className || ""
      }`}
      padding={`${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`}
      margin={`${margin.top} ${margin.right} ${margin.bottom} ${margin.left}`}
    >
      {innerBlocks.map((block, index) => (
        <BlockRenderer key={index} block={block} />
      ))}
    </Box>
  );
}
