import BlogHeroSection from "@/components/BlogHeroSection";
import BlogNavLinks from "@/components/BlogNavLinks";
import Header from "@/components/Header";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "Blog page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto`}>
       <Header />
        <BlogHeroSection />
        <BlogNavLinks />
        {children}
        </body>
    </html>
  );
}
