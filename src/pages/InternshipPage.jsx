import InternshipSection from "../components/InternshipSection";
import DynamicSections from "../components/DynamicSections";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialSection from "../components/TestimonialSection";
import About from "../components/About";

import { cardsInernshipPage } from "../constants/index";

import { PiTelevisionSimple } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import { TbScreenShare } from "react-icons/tb";
import { GrTask } from "react-icons/gr";
import { RiTaskLine } from "react-icons/ri";
import { GoTasklist } from "react-icons/go";

const sections = [
  {
    subTitle: "Our own task portal",
    title: "Manage Project Via Own Task Portal",
    description:
      "Welcome to internee.pk task portal. Where Tasks Transform Into Skills",
    image: "./images/task.webp",
    content: [
      {
        title: "Hands on Projects ",
        description:
          "we believe in learning by doing. Dive into hands-on projects that simulate real-world scenarios. From coding challenges to creative projects, every task is crafted to impart practical skills that resonate in professional environments.",
        icon: (
          <PiTelevisionSimple className="h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]" />
        ),
      },
      {
        title: "How to represent yourself ",
        description:
          "More than just completing tasks, It empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments. Let your work speak volumes about your capabilities.",
        icon: (
          <FaUserFriends className="h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]" />
        ),
      },
      {
        title: "SDLC Techniques ",
        description:
          "Understanding the Software Development Life Cycle (SDLC) is pivotal in the tech world. Acquire skills that align with industry standards and boost your project management proficiency.",
        icon: (
          <TbScreenShare className="h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]" />
        ),
      },
      {
        title: "Easy to understand ",
        description:
          "Learning shouldn't be complicated. Our tasks are designed to be easily comprehensible, ensuring a smooth learning experience for everyone. Whether you're a seasoned professional or a beginner.",
        icon: (
          <GrTask className="h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]" />
        ),
      },
    ],
  },
  {
    subTitle: "Already have a good skill but looking for job?",
    title: "Job Portal, Ultimate Place To Find The Best Job",
    description:
      "Streamline the approval process with your customer to quickly close the deal, get the sale, and start production.",
    image: "./images/job.png",
    content: [
      {
        title: "100% Mobile friendly ",
        description: "online art approvals",
        icon: (
          <TbScreenShare className="h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]" />
        ),
      },
      {
        title: "Speed up the design process ",
        description: "Everything is done online, from mockup to final design.",
        icon: (
          <RiTaskLine className="h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]" />
        ),
      },
      {
        title: "Communicate easier ",
        description:
          "Add multiple recipients to an Art Approval to reduce traditional email clutter.",
        icon: (
          <FaUserFriends className="h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]" />
        ),
      },
      {
        title: "Add changes faster ",
        description:
          "Students can add comments to approvals for changes, saving you both time on finalizing designs.",
        icon: (
          <GoTasklist className="h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]" />
        ),
      },
    ],
  },
];
const InternshipPage = ({ screenWidth }) => {
  return (
    <>
      <About />
      <InternshipSection cards={cardsInernshipPage} />
      <DynamicSections sections={sections} screenWidth={screenWidth} />
      <FeaturesSection />
      <TestimonialSection />
    </>
  );
};

export default InternshipPage;
