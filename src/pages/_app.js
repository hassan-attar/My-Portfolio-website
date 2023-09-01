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
        <link rel="icon" href="/favicon.png" />
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
