import BlogHeroSection from "@/components/BlogHeroSection";
import BlogNavLinks from "@/components/BlogNavLinks";
import Footer from "@/components/Footer";


export default function BlogLayout({ children }) {
  return (
      <div>
        <BlogHeroSection />
        <BlogNavLinks />
        {children}
        <Footer />
      </div>
  );
}
