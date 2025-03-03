import React from "react";
import { Box } from "@chakra-ui/react";

interface Block {
  id: string;
  name: string;
  renderedHtml?: string;
  innerBlocks?: Block[];
}

interface WordPressBlocksRendererProps {
  blocks: Block[];
}

/**
 * A simple component to render WordPress blocks using their rendered HTML
 * This is a fallback for when the @faustwp/blocks package doesn't work with your schema
 */
export default function WordPressBlocksRenderer({
  blocks,
}: WordPressBlocksRendererProps) {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <Box className="wp-content">
      {blocks.map((block) => (
        <BlockRenderer key={block.id} block={block} />
      ))}
    </Box>
  );
}

interface BlockRendererProps {
  block: Block;
}

function BlockRenderer({ block }: BlockRendererProps) {
  // If the block has rendered HTML, use that
  if (block.renderedHtml) {
    return (
      <Box
        className={`wp-block wp-block-${block.name.replace("/", "-")}`}
        dangerouslySetInnerHTML={{ __html: block.renderedHtml }}
      />
    );
  }

  // If it has inner blocks, render those
  if (block.innerBlocks && block.innerBlocks.length > 0) {
    return (
      <Box className={`wp-block wp-block-${block.name.replace("/", "-")}`}>
        {block.innerBlocks.map((innerBlock) => (
          <BlockRenderer key={innerBlock.id} block={innerBlock} />
        ))}
      </Box>
    );
  }

  // If there's nothing to render, return null
  return null;
}
