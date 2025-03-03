import React from "react";

// Import block components
import Cover from "../components/blocks/Cover";
import Heading from "../components/blocks/Heading";
import Paragraph from "../components/blocks/Paragraph";
import Button from "../components/blocks/Button";
import Columns from "../components/blocks/Columns";
import Column from "../components/blocks/Column";
import Image from "../components/blocks/Image";
import Group from "../components/blocks/Group";
import GravityForm from "../components/blocks/GravityForm";

// Define a type for block components
type BlockComponent = React.ComponentType<{
  attributes: any;
  innerBlocks?: any[];
  children?: React.ReactNode;
}>;

// Block registry with type safety
const blockComponents: Record<string, BlockComponent> = {
  "core/cover": Cover,
  "core/heading": Heading,
  "core/paragraph": Paragraph,
  "core/button": Button,
  "core/buttons": Button,
  "core/columns": Columns,
  "core/column": Column,
  "core/image": Image,
  "core/group": Group,
  "gravityforms/form": GravityForm,
};

// BlockRenderer component
interface BlockProps {
  block: {
    name: string;
    attributes: any;
    innerBlocks?: any[];
  };
}

export const BlockRenderer: React.FC<BlockProps> = ({ block }) => {
  if (!block || !block.name) {
    return null;
  }

  const BlockComponent = blockComponents[block.name];

  if (!BlockComponent) {
    console.warn(`No component registered for block: ${block.name}`);
    return (
      <div>
        <em>Block {block.name} not implemented</em>
      </div>
    );
  }

  return (
    <BlockComponent
      attributes={block.attributes || {}}
      innerBlocks={block.innerBlocks || []}
    >
      {block.innerBlocks?.map((innerBlock, index) => (
        <BlockRenderer key={index} block={innerBlock} />
      ))}
    </BlockComponent>
  );
};
