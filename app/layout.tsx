import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400","500","600","700"] });

export const metadata: Metadata = {
  title: "Ritumbhara | India, Thoughtfully Hosted",
  description: "Hotels, villas, serviced apartments and boutique stays across India, each one managed to the same exacting standard.",
  metadataBase: new URL("https://ritumbhara.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return React.createElement("html", { lang: "en" },
                             React.createElement("body", { className: montserrat.className + " bg-[#FBF9F6] text-[#2B2B2B]" },
                                                 React.createElement(Navbar, null),
                                                 children,
                                                 React.createElement(Footer, null)
                                                 )
                             );
}
