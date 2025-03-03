import { gql } from "@apollo/client";
import Head from "next/head";
import { GetHomePageQuery } from "../__generated__/graphql";
import { FaustTemplate, flatListToHierarchical } from "@faustwp/core";
import { Container, Box, Heading, Image } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import WordPressContent from "../components/WordPressContent";
import { WordPressBlocksViewer } from "@faustwp/blocks";
import blocks from "../wp-blocks";
import WordPressBlocksRenderer from "../components/WordPressBlocksRenderer";

// Dynamically import the SiteWrapper component
const SiteWrapper = dynamic(() => import("../components/SiteWrapper"), {
  ssr: false, // Set to false if the component should not be server-side rendered
});

interface ExtendedQuery extends GetHomePageQuery {
  page?: {
    title: string;
    content: string;
    editorBlocks?: any[];
    featuredImage?: {
      node: {
        sourceUrl: string;
        altText: string;
      };
    };
  };
}

const Component: FaustTemplate<ExtendedQuery> = (props) => {
  if (props.loading) {
    return <>Loading page data...</>;
  }

  if (!props.data) {
    console.error("props.data is undefined");
    return <>Error: Data is missing</>;
  }

  const { page } = props.data;

  if (!page) {
    return (
      <Container maxW="container.xl" py={10}>
        <Box textAlign="center">
          Home Page Not Found. Please create a page with the slug "home" in
          WordPress.
        </Box>
      </Container>
    );
  }

  // Convert flat list of blocks to hierarchical structure
  const blockList = page.editorBlocks
    ? flatListToHierarchical(page.editorBlocks, {
        childrenKey: "innerBlocks",
      })
    : null;

  // For debugging - log block structure to help identify issues
  if (blockList) {
    console.log("Block structure:", JSON.stringify(blockList, null, 2));
  }

  // Function to render blocks with error handling
  const renderBlocks = () => {
    if (!blockList) {
      return page.content && <WordPressContent content={page.content} />;
    }

    // Use direct content as a fallback - this ensures columns and other content appears
    return (
      <>
        <Box className="wp-blocks-content">
          <WordPressContent content={page.content || ""} />
        </Box>
      </>
    );
  };

  return (
    <SiteWrapper siteProps={props.data}>
      <Head>
        <title>{page.title}</title>
      </Head>
      <Container maxW="container.xl" py={10}>
        {/* Featured Image */}
        {page.featuredImage?.node && (
          <Box mb={6}>
            <Image
              src={page.featuredImage.node.sourceUrl}
              alt={page.featuredImage.node.altText || page.title}
              borderRadius="lg"
              width="100%"
            />
          </Box>
        )}

        {/* Page Title */}
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          {page.title}
        </Heading>

        {/* Render blocks */}
        {renderBlocks()}
      </Container>
    </SiteWrapper>
  );
};

// Include fragment spreads for all the blocks we want to support
Component.query = gql`
  query GetHomePage {
    generalSettings {
      title
      description
    }
    page(id: "home", idType: URI) {
      title
      content
      editorBlocks {
        name
        __typename
        renderedHtml
        id: clientId
        parentId: parentClientId
        # Include any available fields that might help with rendering
        innerBlocks {
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
            # Add another level of nesting to capture deep structures like columns
            innerBlocks {
              name
              __typename
              renderedHtml
              id: clientId
              parentId: parentClientId
            }
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
    primaryMenuItems: menuItems(where: { location: PRIMARY }, last: 50) {
      nodes {
        id
        uri
        path
        label
        parentId
        cssClasses
        url
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
