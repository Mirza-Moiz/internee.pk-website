import HeroSection from "../components/HeroSection";
import InternshipSection from "../components/InternshipSection";
import BlogSection from "../components/BlogSection";
import DynamicSections from "../components/DynamicSections";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialSection from "../components/TestimonialSection";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <HeroSection screenWidth={screenWidth} />
      <InternshipSection />
      <BlogSection />
      <DynamicSections screenWidth={screenWidth} />
      <FeaturesSection screenWidth={screenWidth} />
      <TestimonialSection />
    </>
  );
};

export default HomePage;
