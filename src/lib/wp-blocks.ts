import { FaustBlocks } from "@faustwp/blocks";

// Import block components
import Paragraph from "../components/blocks/Paragraph";
import Heading from "../components/blocks/Heading";

// Register WordPress blocks
FaustBlocks.registerComponent("core/paragraph", Paragraph);
FaustBlocks.registerComponent("core/heading", Heading);

// Add more block registrations as needed
