import InternshipSection from "../components/InternshipSection";
import DynamicSections from "../components/DynamicSections";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialSection from "../components/TestimonialSection";
import About from "../components/About";

import { cardsInernshipPage, sectionsInternshipPage } from "../constants/index";
import BackButton from "../components/BackButton";

const InternshipPage = ({ screenWidth }) => {
  return (
    <>
      <BackButton />
      <About />
      <InternshipSection cards={cardsInernshipPage} />
      <DynamicSections
        sections={sectionsInternshipPage}
        screenWidth={screenWidth}
      />
      <FeaturesSection screenWidth={screenWidth} />
      <TestimonialSection />
    </>
  );
};

export default InternshipPage;
