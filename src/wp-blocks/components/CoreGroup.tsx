import React from "react";
import { Box } from "@chakra-ui/react";
import { FaustBlocks } from "@wordpress/block-editor";

interface CoreGroupProps {
  attributes: {
    className?: string;
    style?: any;
  };
  innerBlocks?: any[];
}

export default function CoreGroup({
  attributes,
  innerBlocks = [],
}: CoreGroupProps) {
  const { className, style } = attributes;

  return (
    <Box className={className} style={style}>
      {innerBlocks?.length > 0 && <FaustBlocks blocks={innerBlocks} />}
    </Box>
  );
}
