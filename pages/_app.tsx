import type { AppProps } from "next/app";
import MainLayout from "@/components/MainLayout";

import "@/styles/custom.scss";
import "@/styles/globals.scss";
import "bootstrap-icons/font/bootstrap-icons.css"
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
   const router = useRouter();
   useEffect(() => {
     typeof document !== undefined
       ? require("bootstrap/dist/js/bootstrap")
       : null;
   }, [router.events]);

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
