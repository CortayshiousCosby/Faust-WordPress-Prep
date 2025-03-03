import React from "react";

// Default block component for unregistered blocks
export const DefaultBlockComponent = ({ block }: { block: any }) => {
  if (!block) return null;

  return (
    <div className="default-block">
      {block.renderedHtml ? (
        <div dangerouslySetInnerHTML={{ __html: block.renderedHtml }} />
      ) : (
        <div>
          <em>Block {block.name} not implemented</em>
        </div>
      )}
    </div>
  );
};
