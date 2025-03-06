import React from "react";

interface CoreParagraphProps {
  renderedHtml?: string;
  attributes?: {
    content?: string;
    align?: string;
    textColor?: string;
    backgroundColor?: string;
    fontSize?: string;
    style?: any;
    [key: string]: any;
  };
  [key: string]: any;
}

export const CoreParagraph: React.FC<CoreParagraphProps> = (props) => {
  const { renderedHtml, attributes = {} } = props;

  if (renderedHtml) {
    return <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />;
  }

  const { content, align, textColor, backgroundColor, fontSize, style } =
    attributes;

  const paragraphStyle = {
    textAlign: align,
    color: textColor,
    backgroundColor,
    fontSize,
    ...style,
  };

  return content ? (
    <p style={paragraphStyle} dangerouslySetInnerHTML={{ __html: content }} />
  ) : null;
};
