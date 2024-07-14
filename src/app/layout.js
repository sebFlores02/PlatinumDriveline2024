import { Inter } from "next/font/google";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Platinum Driveline México",
  description: "Aplicación desarrollada para Platinum Driveline México",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className={inter.className}>{children}</main>
      </body>
    </html>
  );
}
