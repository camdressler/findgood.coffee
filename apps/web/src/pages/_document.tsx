import React from "react";

import { Html, Head, Main, NextScript } from "next/document";

export default function () {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="../../assets/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="preconnect" />
                
                <link rel="preconnect" href="https://fonts.googleapis.com" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
