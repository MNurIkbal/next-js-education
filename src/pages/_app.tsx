import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import "@/styles/css/styles.css";
import "@/styles/css/styles.bundle.css";

export default function App({ Component, pageProps : {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    
  )
}
