import React from "react";

interface CoreHeadingProps {
  renderedHtml?: string;
  attributes?: {
    content?: string;
    level?: number;
    align?: string;
    textColor?: string;
    backgroundColor?: string;
    fontSize?: string;
    style?: any;
    [key: string]: any;
  };
  [key: string]: any;
}

export const CoreHeading: React.FC<CoreHeadingProps> = (props) => {
  const { renderedHtml, attributes = {} } = props;

  if (renderedHtml) {
    return <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />;
  }

  const {
    content,
    level = 2,
    align,
    textColor,
    backgroundColor,
    fontSize,
    style,
  } = attributes;

  const headingStyle = {
    textAlign: align,
    color: textColor,
    backgroundColor,
    fontSize,
    ...style,
  };

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return content ? (
    <HeadingTag
      style={headingStyle}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  ) : null;
};
