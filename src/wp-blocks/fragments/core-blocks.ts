import { gql } from "@apollo/client";

export const CoreParagraphFragment = gql`
  fragment CoreParagraphFragment on CoreParagraphBlock {
    attributes {
      ... on CoreParagraphBlockAttributes {
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

export const CoreHeadingFragment = gql`
  fragment CoreHeadingFragment on CoreHeadingBlock {
    attributes {
      ... on CoreHeadingBlockAttributes {
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
  fragment CoreImageBlockFragment on CoreImageBlock {
    attributes {
      ... on CoreImageBlockAttributes {
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
  fragment CoreButtonBlockFragment on CoreButtonBlock {
    attributes {
      ... on CoreButtonBlockAttributes {
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
  fragment CoreButtonsBlockFragment on CoreButtonsBlock {
    attributes {
      ... on CoreButtonsBlockAttributes {
        align
        layout
        orientation
        style
      }
    }
  }
`;

export const CoreColumnsBlockFragment = gql`
  fragment CoreColumnsBlockFragment on CoreColumnsBlock {
    attributes {
      ... on CoreColumnsBlockAttributes {
        isStackedOnMobile
        align
        style
      }
    }
  }
`;

export const CoreColumnBlockFragments = gql`
  fragment CoreColumnBlockFragments on CoreColumnBlock {
    attributes {
      ... on CoreColumnBlockAttributes {
        width
        verticalAlignment
        style
      }
    }
  }
`;

export const CoreGroupBlockFragment = gql`
  fragment CoreGroupBlockFragment on CoreGroupBlock {
    attributes {
      ... on CoreGroupBlockAttributes {
        align
        style
        backgroundColor
        textColor
      }
    }
  }
`;

export const CoreCoverBlockFragment = gql`
  fragment CoreCoverBlockFragment on CoreCoverBlock {
    attributes {
      ... on CoreCoverBlockAttributes {
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
  fragment GravityformsFormFragment on GravityformsFormBlock {
    attributes {
      ... on GravityformsFormBlockAttributes {
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
