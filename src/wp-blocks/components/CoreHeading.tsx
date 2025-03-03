import React from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";

interface CoreHeadingProps {
  block: {
    attributes: {
      content?: string;
      level?: number;
      align?: string;
      fontSize?: string;
      backgroundColor?: string;
      textColor?: string;
      style?: any;
    };
  };
}

const CoreHeading: React.FC<CoreHeadingProps> = ({ block }) => {
  const {
    content,
    level = 2,
    align,
    fontSize,
    backgroundColor,
    textColor,
    style,
  } = block.attributes;

  if (!content) return null;

  const headingProps: HeadingProps = {
    as: `h${level}` as any,
    textAlign: align as any,
    fontSize:
      fontSize || ["2xl", "3xl", "4xl", "5xl", "6xl"][level - 1] || "2xl",
    bg: backgroundColor,
    color: textColor,
    mb: 4,
  };

  // Apply custom styles if available
  if (style?.typography?.fontSize) {
    headingProps.fontSize = style.typography.fontSize;
  }

  if (style?.spacing?.margin) {
    headingProps.margin = style.spacing.margin;
  }

  return (
    <Heading {...headingProps} dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default CoreHeading;
