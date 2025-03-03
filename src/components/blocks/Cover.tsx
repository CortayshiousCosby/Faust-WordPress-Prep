import React from "react";
import { Box } from "@chakra-ui/react";
import { BlockRenderer } from "../../lib/blocks";

interface CoverProps {
  attributes: {
    url?: string;
    dimRatio?: number;
    minHeight?: number;
    contentPosition?: string;
    align?: string;
    style?: {
      spacing?: {
        padding?: any;
        margin?: any;
      };
    };
  };
  innerBlocks: any[];
}

export default function Cover({ attributes, innerBlocks }: CoverProps) {
  const {
    url,
    dimRatio = 0,
    minHeight = 400,
    contentPosition = "center center",
    align,
    style,
  } = attributes;

  return (
    <Box
      position="relative"
      minHeight={`${minHeight}px`}
      width="100%"
      backgroundImage={`url(${url})`}
      backgroundSize="cover"
      backgroundPosition="center"
      className={`alignfull wp-block-cover is-position-${contentPosition.replace(
        " ",
        "-"
      )}`}
      padding={style?.spacing?.padding ? "var(--wp--preset--spacing--50)" : "0"}
      margin={style?.spacing?.margin ? "0" : "inherit"}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundColor="black"
        opacity={(dimRatio || 0) / 100}
      />
      <Box
        position="relative"
        zIndex="1"
        width="100%"
        height="100%"
        display="flex"
        alignItems={
          contentPosition.includes("top")
            ? "flex-start"
            : contentPosition.includes("bottom")
            ? "flex-end"
            : "center"
        }
        justifyContent={
          contentPosition.includes("left")
            ? "flex-start"
            : contentPosition.includes("right")
            ? "flex-end"
            : "center"
        }
        padding="2rem"
        color="white"
      >
        {innerBlocks.map((block, index) => (
          <BlockRenderer key={index} block={block} />
        ))}
      </Box>
    </Box>
  );
}
