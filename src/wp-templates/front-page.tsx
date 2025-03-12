import { gql } from "@apollo/client";
import { Container } from "@chakra-ui/react";
import { FaustTemplate, flatListToHierarchical } from "@faustwp/core";
import dynamic from "next/dynamic";
import { GetHomePageQuery } from "../__generated__/graphql";
import {
  CoreButtonBlockFragment,
  CoreButtonsBlockFragment,
  CoreColumnBlockFragments,
  CoreColumnsBlockFragment,
  CoreGroupBlockFragment,
  CoreImageBlockFragment,
  CoreParagraphFragment,
  CoreHeadingBlockFragment,
} from "../wp-blocks/fragments/core-blocks";
import { WordPressBlocksViewer } from "@faustwp/blocks";
// Dynamically import the SiteWrapper component
const SiteWrapper = dynamic(() => import("../components/SiteWrapper"), {
  ssr: false, // Set to false if the component should not be server-side rendered
});

const Component: FaustTemplate<GetHomePageQuery> = (props) => {
  if (props.loading) {
    return <>Loading page data...</>;
  }

  if (!props.data) {
    // console.error("props.data is undefined");
    return <>Error: Data is missing</>;
  }

  const { editorBlocks } = props.data.page;
  const hierarchicalBlocks = flatListToHierarchical(editorBlocks, {
    childrenKey: "innerBlocks",
  });

  //   console.log("Hierachy Blocks", hierarchicalBlocks);

  // Prepare site props
  const siteProps = {
    generalSettings: props.data.generalSettings,
    primaryMenuItems: props.data.primaryMenuItems,
    footerMenuItems: props.data.footerMenuItems,
  };

  return (
    <SiteWrapper siteProps={siteProps}>
      <WordPressBlocksViewer blocks={hierarchicalBlocks} />
    </SiteWrapper>
  );
};

// Update GraphQL query to include primaryMenuItems if needed
Component.query = gql`
  ${CoreParagraphFragment}
  ${CoreHeadingBlockFragment}
  ${CoreGroupBlockFragment}
  ${CoreColumnsBlockFragment}
  ${CoreColumnBlockFragments}
  ${CoreImageBlockFragment}
  ${CoreButtonsBlockFragment}
  ${CoreButtonBlockFragment}
  query GetHomePage {
    generalSettings {
      title
      description
    }
    page(id: "home", idType: URI) {
      title
      editorBlocks(flat: true) {
        name
        __typename
        renderedHtml
        id: clientId
        parentId: parentClientId
        ...CoreParagraphFragment
        ...CoreHeadingBlockFragment
        ...CoreGroupBlockFragment
        ...CoreColumnsBlockFragment
        ...CoreColumnBlockFragments
        ...CoreImageBlockFragment
        ...CoreButtonsBlockFragment
        ...CoreButtonBlockFragment
      }

      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
    primaryMenuItems: menuItems(where: { location: PRIMARY }) {
      nodes {
        id
        uri
        path
        label
        parentId
        cssClasses
        menu {
          node {
            name
          }
        }
      }
    }
    footerMenuItems: menuItems(where: { location: FOOTER }) {
      nodes {
        id
        uri
        path
        label
        parentId
        cssClasses
        menu {
          node {
            name
          }
        }
      }
    }
  }
`;

export default Component;
