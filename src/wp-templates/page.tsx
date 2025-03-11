import { gql } from "@apollo/client";
import { FaustTemplate, flatListToHierarchical } from "@faustwp/core";
import dynamic from "next/dynamic";
import { GetPageQuery } from "../__generated__/graphql";
import { WordPressBlocksViewer } from "@faustwp/blocks";
import blocks from "../wp-blocks";
// Import fragments but don't include in gql directly
import {
  CoreButtonBlockFragment,
  CoreButtonsBlockFragment,
  CoreColumnBlockFragments,
  CoreColumnsBlockFragment,
  CoreGroupBlockFragment,
  CoreImageBlockFragment,
  CoreParagraphFragment,
  CoreHeadingBlockFragment,
  CoreCoverBlockFragment,
  GravityformsFormFragment,
} from "../wp-blocks/fragments/core-blocks";

// Dynamically import the SiteWrapper component
const SiteWrapper = dynamic(() => import("../components/SiteWrapper"), {
  ssr: false, // Set to false if the component should not be server-side rendered
});

const Component: FaustTemplate<GetPageQuery> = (props) => {
  // Loading state for previews
  if (props.loading) {
    return <>Loading page data...</>;
  }

  if (!props.data) {
    console.error("props.data is undefined");
    return <>Error: Data is missing</>;
  }

  if (!props.data.page) {
    console.error("Page data is missing");
    return <>Error: Page data is missing</>;
  }

  const { title, content } = props.data.page;

  // Try to use editorBlocks if available
  let blockContent;
  const pageData = props.data.page as any; // Use type assertion to avoid TypeScript errors

  if (pageData.editorBlocks && Array.isArray(pageData.editorBlocks)) {
    try {
      const hierarchicalBlocks = flatListToHierarchical(pageData.editorBlocks, {
        childrenKey: "innerBlocks",
      });
      blockContent = <WordPressBlocksViewer blocks={hierarchicalBlocks} />;
    } catch (error) {
      console.error("Error processing blocks:", error);
      blockContent = <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
  } else {
    // Fallback to using content if editorBlocks aren't available
    blockContent = <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  // Type assertion to ensure primaryMenuItems conforms to expected structure
  const siteProps = {
    ...props.data,
    primaryMenuItems: props.data.primaryMenuItems
      ? {
          nodes: props.data.primaryMenuItems.nodes.map((node) => ({
            id: node.id,
            label: node.label || "",
            path: node.path || "",
            parentId: node.parentId || "",
          })),
        }
      : undefined,
  };

  return (
    <SiteWrapper siteProps={siteProps}>
      <article className="prose lg:prose-xl mx-auto">
        {title && <h1>{title}</h1>}
        {blockContent}
      </article>
    </SiteWrapper>
  );
};

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};

// Use string template instead of gql tag for the fragments to avoid duplicates
Component.query = gql`
  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      editorBlocks(flat: true) {
        name
        __typename
        renderedHtml
        id: clientId
        parentId: parentClientId
        innerBlocks {
          name
          __typename
          renderedHtml
          id: clientId
          parentId: parentClientId
        }
      }
    }
    generalSettings {
      title
      description
    }
    primaryMenuItems: menuItems(where: { location: PRIMARY }) {
      nodes {
        id
        label
        path
        parentId
      }
    }
  }
`;

export default Component;
