// Type declarations for WordPress modules
declare module "@wordpress/block-editor" {
  export interface FaustBlocksProps {
    blocks: any[];
  }

  export const FaustBlocks: React.FC<FaustBlocksProps>;
}
