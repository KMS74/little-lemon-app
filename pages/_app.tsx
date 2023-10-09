import type { AppProps } from "next/app";
import MainLayout from "@/components/MainLayout";

import "@/styles/custom.scss";
import "@/styles/globals.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Little Lemon</title>
        <meta name="description" content="Little Lemon Restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
        <link rel="icon" href="/assets/logo.svg" />
        <meta property="og:title" content="Little Lemon" />
        <meta property="og:description" content="Little Lemon Restaurant" />
        <meta property="og:image" content="/assets/restaurant chef B.jpg" />
        <meta property="og:url" content="https://www.littlelemon.com" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
