import { CoreBlocks } from "@faustwp/blocks";
import { blockComponents } from "./components";

// Create a merged object of our custom block components and the CoreBlocks
const mergedBlocks = {
  ...CoreBlocks,
  // Override specific CoreBlocks with our custom implementations
  ...blockComponents,
};

export default mergedBlocks;
