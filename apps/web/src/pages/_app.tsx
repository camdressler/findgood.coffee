import React from "react";

import Head from "next/head";
import Script from "next/script";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>FindGood.Coffee — Search for local coffee</title>
                <meta name="description" content="Search for local coffee" />
                <meta name="keywords" content="coffee,search,find,cafe,local" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.findgood.coffee" />
                <meta property="og:title" content="FindGood.Coffee — Search for local coffee" />
                <meta property="og:description" content="Search for local coffee" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.findgood.coffee/" />
                <meta property="twitter:title" content="FindGood.Coffee — Search for local coffee" />
                <meta property="twitter:description" content="Search for local coffee" />
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
