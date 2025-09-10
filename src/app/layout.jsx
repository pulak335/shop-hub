import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Commerce Platform",
  description: "Your one-stop shop for everything you need",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
