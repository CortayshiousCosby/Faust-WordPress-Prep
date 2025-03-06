import React from "react";
import { CoreParagraph } from "./CoreParagraph";
import { CoreHeading } from "./CoreHeading";
import { CoreImage } from "./CoreImage";

/**
 * Define custom block components for Faust WordPressBlocksViewer
 * Map block names to components as expected by WordPressBlocksViewer
 */
const blocks: Record<string, React.ComponentType<any>> = {
  "core/paragraph": CoreParagraph,
  "core/heading": CoreHeading,
  "core/image": CoreImage,
};

export default blocks;
