import type { Metadata } from "next";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Robby Wright's Home",
    description: "The home of Robby Wright, software developer and content creator.",
  };
  
 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}