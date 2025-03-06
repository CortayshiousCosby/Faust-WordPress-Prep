import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

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

const CoreParagraph: React.FC<CoreParagraphProps> = ({ block }) => {
  const { content, align, fontSize, backgroundColor, textColor, style } =
    block.attributes;

  if (!content) return null;

  const textProps: TextProps = {
    textAlign: align as any,
    fontSize: fontSize || "md",
    bg: backgroundColor,
    color: textColor,
  };

  // Apply custom styles if available
  if (style?.typography?.fontSize) {
    textProps.fontSize = style.typography.fontSize;
  }

  if (style?.spacing?.margin) {
    textProps.margin = style.spacing.margin;
  }

  return <Text>I am paragraph</Text>;
  // return <Text {...textProps} dangerouslySetInnerHTML={{ __html: content }} />;
};

export default CoreParagraph;
