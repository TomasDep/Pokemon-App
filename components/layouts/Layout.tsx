import { FC } from "react";
import Head from "next/head";

interface Props {
    children: any;
    title?: string;
}

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
            </Head>
            <main>{children}</main>
        </>
    );
};
