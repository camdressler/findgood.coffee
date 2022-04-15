import Head from "next/head";
import Script from "next/script";
import React from "react";

import SearchBox from "../components/SearchBox";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Find Good Coffee</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="Find Good Cofee" />
        <meta name="description" content="Find local, top-rated coffee shops" />
        <meta name="keywords" content="coffee,search,find,cafe,local" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.findgood.coffee" />
        <meta
          property="og:title"
          content="Find Good Coffee - Find local, top-rated coffee shops"
        />
        <meta
          property="og:description"
          content="Find local, top-rated coffee shops"
        />

        <meta name="theme-color" content="brown" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.findgood.coffee/" />
        <meta
          property="twitter:title"
          content="Find Good Coffee - Find local, top-rated coffee shops"
        />
        <meta
          property="twitter:description"
          content="Find local, top-rated coffee shops"
        />

        <Script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          crossOrigin="anonymous"
        />

        <link
          rel="document"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Header />
      <section id="home" className="flex mx-12">
        <div className="absolute bg-white backdrop-blur-lg bg-opacity-50 w-1/3 mt-32 py-4 pr-6 z-10">
          <div className="text-4xl block mb-4">
            <span className="text-brown-dark">SEARCH FOR </span>
            <span className="text-brown-dark">TOP LOCAL </span>
            <span className="text-brown-dark">COFFEE </span>
            <span className="text-brown-dark">SHOPS</span>
          </div>
          <span>
            WE FILTER OUT LARGE COFFEE CHAINS AND REVEAL THE BEST LOCAL CAFES
          </span>
        </div>
        <div className="absolute bg-white backdrop-blur-lg bg-opacity-50 w-1/3 mt-32 py-4 pr-6 z-10">
            <SearchBox />
          </div>
        <div className="flex relative m-auto justify-center text-black text-8xl ">
          <img
            src={require("../../public/assets/coffee.jpg").default.src}
            width="900"
            className="z-0"
          />
        </div>
      </section>
      <section id="about" className="flex bg-back"></section>
    </div>
  );
}
