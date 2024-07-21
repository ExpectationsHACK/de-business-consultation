import ExploreContainer from "@/components/ExploreContainer";
import FeaturesContainer from "@/components/FeaturesContainer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LatestArticle from "@/components/LatestArticle";
import Review from "@/components/Review";
import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <Section />
      <FeaturesContainer />
      <div>
      <ExploreContainer />
      </div>
      <LatestArticle />
      <Review />
    </div>
    
  );
}
