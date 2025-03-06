export const CoreParagraphFragment = `
  fragment CoreParagraphFragment on CoreParagraph {
    attributes {
      content
      cssClassName
      style
      fontSize
      fontFamily
      textColor
      backgroundColor
      align
      anchor
      gradient
    }
  }
`;
export const CoreHeadingBlockFragment = `
  fragment CoreHeadingBlockFragment on CoreHeading {
    attributes {
      align
      anchor
      backgroundColor
      fontFamily
      fontSize
      gradient
      level
      style
      textAlign
      textColor
      content
    }
    renderedHtml
    name
    cssClassNames
    innerBlocks {
      name
      renderedHtml
    }
  }
`;

export const CoreLatestPostsFragment = `
  fragment CoreLatestPostsFragment on CoreLatestsPosts {
    attributes {
      align
      anchor
      backgroundColor
    }
    renderedHtml
    name
    cssClassNames
    innerBlocks {
      name
      renderedHtml
    }
  }
`;

export const CoreButtonsBlockFragment = `
  fragment CoreButtonsBlockFragment on CoreButtons {
    attributes {
      className
      align
      anchor
      fontFamily
      fontSize
      layout
      style
    }
  }
`;

export const CoreButtonBlockFragment = `
  fragment CoreButtonBlockFragment on CoreButton {
    attributes {
      anchor
      gradient
      textAlign
      textColor
      style
      fontSize
      fontFamily
      linkTarget
      rel
      url
      backgroundColor
      className
      text
    }
  }
`;

export const CoreGroupBlockFragment = `
  fragment CoreGroupBlockFragment on CoreGroup {
      cssClassNames
      attributes {
          className
          style
          backgroundColor
          borderColor
          textColor
          fontSize
          fontFamily
          layout
          metadata
          tagName
          gradient
          lock
          anchor
          allowedBlocks
          align
      }
  }
`;

export const CoreColumnsBlockFragment = `
  fragment CoreColumnsBlockFragment on CoreColumns {
    cssClassNames
    attributes {
      className
      style
      backgroundColor
      borderColor
      textColor
      fontSize
      fontFamily
      layout
      metadata
      gradient
      lock
      anchor
      align
      cssClassName
      verticalAlignment
    }
  }
`;

export const CoreColumnBlockFragments = `
  fragment CoreColumnBlockFragments on CoreColumn {
    attributes {
      anchor
      borderColor
      backgroundColor
      cssClassName
      fontSize
      fontFamily
      gradient
      layout
      style
      textColor
      verticalAlignment
      className
      width
    }
  }
`;

export const CoreImageBlockFragment = `
  fragment CoreImageBlockFragment on CoreImage {
    attributes {
      align
      alt
      anchor
      borderColor
      className
      width
      url
      title
      style
      src
      sizeSlug
      rel
      lock
      linkTarget
      linkDestination
      linkClass
      href
      height
      cssClassName
    }
    mediaDetails {
      width
      height
      sizes {
        mimeType
        name
        sourceUrl
        width
        height
      }
    }
  }
`;

export const GravityformsFormFragment = `
  ... on GravityformsForm {
    attributes {
      formId
    }
  }
`;
