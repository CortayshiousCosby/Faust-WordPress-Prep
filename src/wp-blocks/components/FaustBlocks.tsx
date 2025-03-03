import React from "react";
import { Box } from "@chakra-ui/react";
import { DefaultBlockComponent } from "../config";
import { blockComponents } from "./index";

interface Block {
  name: string;
  attributes: Record<string, any>;
  innerBlocks?: Block[];
  parentName?: string;
}

interface FaustBlocksProps {
  blocks: Block[];
  parentName?: string;
}

/**
 * A component that renders a list of blocks
 */
export default function FaustBlocks({
  blocks = [],
  parentName,
}: FaustBlocksProps) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <Box width="100%">
      {blocks.map((block, index) => {
        // Type assertion to ensure TypeScript knows this is a valid component
        const BlockComponent =
          (blockComponents as any)[block.name] || DefaultBlockComponent;

        // Special handling for buttons to ensure they're centered
        const isButtonsBlock = block.name === "core/buttons";
        const isButtonBlock = block.name === "core/button";

        // Add parent name to block for context awareness
        const blockWithParent = {
          ...block,
          parentName: parentName || null,
        };

        return (
          <Box
            key={`${block.name}-${index}`}
            width="100%"
            textAlign={isButtonBlock || isButtonsBlock ? "center" : "inherit"}
            className={`block-${block.name.replace("/", "-")}`}
          >
            <BlockComponent
              block={blockWithParent}
              attributes={block.attributes}
              innerBlocks={block.innerBlocks}
              parentName={parentName}
            />
          </Box>
        );
      })}
    </Box>
  );
}
