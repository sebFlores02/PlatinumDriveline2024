import { Inter } from "next/font/google";
import "../../app/globals.css";

import Footer from "../components/Footer";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className={inter.className}>{children}</main>
      <Footer />
    </>
  );
}
