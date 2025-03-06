import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

interface SiteProps {
  generalSettings?: {
    title?: string;
    description?: string;
  };
  primaryMenuItems?: {
    nodes: Array<{
      id: string;
      label: string;
      path: string;
      parentId: string;
      [key: string]: any;
    }>;
  };
  [key: string]: any;
}

interface SiteWrapperProps {
  children: ReactNode;
  siteProps: SiteProps;
}

const SiteWrapper: React.FC<SiteWrapperProps> = ({ children, siteProps }) => {
  const { title = "WordPress Site", description = "" } =
    siteProps.generalSettings || {};
  const menuItems = siteProps.primaryMenuItems?.nodes || [];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <Header
        siteTitle={title}
        siteDescription={description}
        menuItems={menuItems}
      />

      <main className="container">{children}</main>

      <Footer />
    </>
  );
};

export default SiteWrapper;
