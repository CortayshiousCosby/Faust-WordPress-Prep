import { gql } from "@apollo/client";

export const CoreParagraphFragment = gql`
  fragment CoreParagraphFragment on CoreParagraph {
    attributes {
      ... on CoreParagraphAttributes {
        content
        align
        dropCap
        fontSize
        backgroundColor
        textColor
        style
      }
    }
  }
`;

export const CoreHeadingBlockFragment = gql`
  fragment CoreHeadingBlockFragment on CoreHeading {
    attributes {
      ... on CoreHeadingAttributes {
        content
        level
        align
        fontSize
        backgroundColor
        textColor
        style
      }
    }
  }
`;

export const CoreImageBlockFragment = gql`
  fragment CoreImageBlockFragment on CoreImage {
    attributes {
      ... on CoreImageAttributes {
        url
        alt
        caption
        align
        href
        rel
        linkClass
        linkTarget
        sizeSlug
        title
        width
        height
        id
      }
    }
  }
`;

export const CoreButtonBlockFragment = gql`
  fragment CoreButtonBlockFragment on CoreButton {
    attributes {
      ... on CoreButtonAttributes {
        url
        text
        linkTarget
        rel
        className
        backgroundColor
        textColor
        style
      }
    }
  }
`;

export const CoreButtonsBlockFragment = gql`
  fragment CoreButtonsBlockFragment on CoreButtons {
    attributes {
      ... on CoreButtonsAttributes {
        align
        layout
        style
      }
    }
  }
`;

export const CoreColumnsBlockFragment = gql`
  fragment CoreColumnsBlockFragment on CoreColumns {
    attributes {
      ... on CoreColumnsAttributes {
        isStackedOnMobile
        align
        style
      }
    }
  }
`;

export const CoreColumnBlockFragments = gql`
  fragment CoreColumnBlockFragments on CoreColumn {
    attributes {
      ... on CoreColumnAttributes {
        width
        verticalAlignment
        style
      }
    }
  }
`;

export const CoreGroupBlockFragment = gql`
  fragment CoreGroupBlockFragment on CoreGroup {
    attributes {
      ... on CoreGroupAttributes {
        align
        style
        backgroundColor
        textColor
      }
    }
  }
`;

export const CoreCoverBlockFragment = gql`
  fragment CoreCoverBlockFragment on CoreCover {
    attributes {
      ... on CoreCoverAttributes {
        url
        id
        hasParallax
        dimRatio
        overlayColor
        backgroundType
        minHeight
        minHeightUnit
        gradient
        contentPosition
        align
        style
      }
    }
  }
`;

export const GravityformsFormFragment = gql`
  fragment GravityformsFormFragment on GravityformsForm {
    attributes {
      ... on GravityformsFormAttributes {
        formId
        title
        description
        ajax
        tabindex
        fieldValues
      }
    }
  }
`;
