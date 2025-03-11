import { FaustProvider } from "@faustwp/core";
import { AppProps } from "next/app";
import "../../faust.config";
import "../styles/globals.css";
import "../styles/wordpress.css";
import "../styles/app.css";
import "../../globalStylesheet.css";
import { Provider } from "@/components/ui/provider";
import Head from "next/head";
import { fromThemeJson, WordPressBlocksProvider } from "@faustwp/blocks";
import { useRouter } from "next/router";
import wpBlocks from "@/wp-blocks";
import themeJson from "../../theme.json";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        {/* WordPress Core Styles */}
        <link
          rel="stylesheet"
          href={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-includes/css/dist/block-library/style.min.css`}
        />
        <link
          rel="stylesheet"
          href={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-includes/css/dist/block-library/theme.min.css`}
        />
      </Head>
      <FaustProvider pageProps={pageProps}>
        <WordPressBlocksProvider
          config={{
            blocks: wpBlocks,
            theme: fromThemeJson(themeJson),
          }}
        >
          <Provider>
            <Component {...pageProps} key={router.asPath} />
          </Provider>
        </WordPressBlocksProvider>
      </FaustProvider>
    </>
  );
}
