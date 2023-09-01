import "@/styles/globals.css";
import Header from "@/components/layout-elements/Header";
import Footer from "@/components/layout-elements/Footer";
import Head from "next/head";
import React from "react";
import NavProvider from "@/components/context/NavContext";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/android-chrome-192x192.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <NavProvider>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </NavProvider>
    </>
  );
}
