import Head from "next/head";
import Script from "next/script";
import React from "react";

import SearchBox from "../components/SearchBox";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="w-screen h-screen">
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
      <div
        id="home"
        className="flex flex-grow space-x-24 justify-center pt-16 m-4 mb-6"
      >
        <div className="max-w-4xl">
          <h1 className=" text-4xl mb-6 text-center">
            Search for <span className="font-semibold">top-rated, </span>
            <span className="font-semibold">local </span>
            <span className="text-brown">coffee </span> shops
          </h1>
          <div className="mx-12 mb-12">
            <SearchBox className="hover:cursor-pointer" />
          </div>
          <a
            href="https://twitter.com/getGoodCoffee"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center"
          >
            <svg
              className="fill-current text-brown cursor-pointer"
              width={41}
              height={31}
              viewBox="0 0 40 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4:1266)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.5816 8.09625V8.09255L37.0535 4.34662C37.1777 4.21248 37.2575 4.0433 37.2821 3.86214C37.3066 3.68097 37.2747 3.49665 37.1907 3.33428C37.1067 3.17191 36.9746 3.0394 36.8126 2.95481C36.6505 2.87022 36.4663 2.83767 36.285 2.86159L31.9336 3.4356C30.8188 2.0541 29.2449 1.11894 27.4986 0.800405C25.7522 0.481872 23.9495 0.801162 22.4188 1.70013C20.888 2.5991 19.7311 4.01794 19.1586 5.69829C18.5861 7.37864 18.6362 9.2087 19.2997 10.8552C13.7521 10.7256 7.81195 9.62758 4.80855 3.67632C4.43821 2.94121 3.37165 2.89862 3.13464 3.68743C0.960783 10.946 4.78633 20.3784 13.2133 22.9059C11.1098 24.9612 5.7066 25.5186 1.28482 25.1149C0.4238 25.0353 -0.116887 26.0167 0.549713 26.5666C4.25675 29.6404 9.39883 30.3125 14.1391 30.3125C26.1749 30.3125 34.5056 20.1302 33.5816 8.09625Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_4:1266">
                  <rect
                    width="38.885"
                    height="29.6267"
                    transform="translate(0.251709 0.686523)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
      <img src={require("../../public/assets/beans.png").default.src} className="fixed relative bottom-0" />
    </div>
  );
}
