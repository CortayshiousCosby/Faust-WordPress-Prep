import React from "react";
import { Box, Text, TextProps } from "@chakra-ui/react";
import { getStyles, useBlocksTheme, WordPressBlock } from "@faustwp/blocks";
import { CoreParagraphFragmentFragment } from "@/__generated__/graphql";

interface CoreParagraphProps {
  block: {
    attributes: {
      content?: string;
      align?: string;
      dropCap?: boolean;
      fontSize?: string;
      backgroundColor?: string;
      textColor?: string;
      style?: any;
    };
  };
}

const CoreParagraph: WordPressBlock<CoreParagraphFragmentFragment> = (
  props
) => {
  // console.log('Paragraph Props', props);
  const theme = useBlocksTheme();
  const style = getStyles(theme, { ...props });
  const { attributes } = props;

  return (
    <Box
      as={"p"}
      style={style}
      dangerouslySetInnerHTML={{ __html: attributes?.content ?? "" }}
    />
  );
};

export default CoreParagraph;
