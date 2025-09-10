import { Inter } from "next/font/google";
import Header from "@/components/sections/Header.jsx";
import Footer from "@/components/sections/Footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-0">
        {children}
      </main>
      <Footer />
    </>
  );
}
