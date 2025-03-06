import React from "react";
import Image from "next/image";

interface CoreImageProps {
  renderedHtml?: string;
  attributes?: {
    url?: string;
    alt?: string;
    caption?: string;
    width?: number;
    height?: number;
    align?: string;
    id?: number;
    linkDestination?: string;
    href?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

export const CoreImage: React.FC<CoreImageProps> = (props) => {
  const { renderedHtml, attributes = {} } = props;

  if (renderedHtml) {
    return <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />;
  }

  const {
    url,
    alt = "",
    caption,
    width,
    height,
    align,
    id,
    linkDestination,
    href,
  } = attributes;

  if (!url) {
    return null;
  }

  const imageStyle = {
    display: "block",
    maxWidth: "100%",
    height: "auto",
  };

  const figureStyle = {
    margin: 0,
    textAlign: align,
  };

  const ImageComponent =
    width && height ? (
      <Image
        src={url}
        alt={alt}
        width={width}
        height={height}
        style={imageStyle}
      />
    ) : (
      <img src={url} alt={alt} style={imageStyle} />
    );

  const ImageWithOptionalLink =
    linkDestination && href ? (
      <a href={href} target="_blank" rel="noreferrer">
        {ImageComponent}
      </a>
    ) : (
      ImageComponent
    );

  return (
    <figure style={figureStyle as React.CSSProperties}>
      {ImageWithOptionalLink}
      {caption && <figcaption dangerouslySetInnerHTML={{ __html: caption }} />}
    </figure>
  );
};
