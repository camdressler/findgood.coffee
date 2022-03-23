import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Find Good Coffee</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
