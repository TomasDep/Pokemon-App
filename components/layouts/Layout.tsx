import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children: any;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="TomasDep" />
        <meta
          name="description"
          content={`Information about the pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta
          property="og:title"
          content={`Information about the pokemon ${title}`}
        />
        <meta
          property="og:description"
          content={`This page is about the pokemon ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "20px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
