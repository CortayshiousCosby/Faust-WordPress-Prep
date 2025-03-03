import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

interface SiteWrapperProps {
  siteProps: any;
  children: React.ReactNode;
}

const SiteWrapper: React.FC<SiteWrapperProps> = ({ siteProps, children }) => {
  const { generalSettings } = siteProps;

  return (
    <>
      <Head>
        <title>{generalSettings?.title || "My WordPress Site"}</title>
        <meta name="description" content={generalSettings?.description || ""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main">{children}</Box>
    </>
  );
};

export default SiteWrapper;
