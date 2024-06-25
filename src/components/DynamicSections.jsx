import { motion } from "framer-motion";
import { fadeIn, bottomUp, staggerContainer } from "../utils/motion";

import { PiTelevisionSimple } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import { TbScreenShare } from "react-icons/tb";
import { GrTask } from "react-icons/gr";
import { IoCloudDoneOutline } from "react-icons/io5";
import { MdOutlineSavedSearch } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineFolderCopy } from "react-icons/md";
import { RiPhoneFindLine } from "react-icons/ri";
import { RiShapesLine } from "react-icons/ri";
import { IoMdDownload } from "react-icons/io";
import { VscTasklist } from "react-icons/vsc";
import { RiTaskLine } from "react-icons/ri";
import { GoTasklist } from "react-icons/go";
const DynamicSections = () => {
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
      subTitle: "Our LMS",
      title: "Guided Tutorials in Learning Management System",
      description:
        "Want to learn something but don't know what's the roadmap or your english is not too good? That's why we launch LMS for you.",
      image: "./images/lms.png",
      content: [
        {
          title: "Sell Courses and Earn ",
          description:
            "Are you an expert in your field? Share your knowledge on our LMS. Create and sell courses, or contribute as an instructor. Empower others on their learning journey while earning rewards for your expertise.",
          icon: (
            <IoCloudDoneOutline className="h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]" />
          ),
        },
        {
          title: "Certification ",
          description:
            "Complete courses on our LMS and earn certifications that validate your expertise. Showcase your accomplishments to potential employers and stand out in a competitive landscape.",
          icon: (
            <MdOutlineSavedSearch className="h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]" />
          ),
        },
        {
          title: "Courses in Urdu ",
          description:
            "Dive into the world of knowledge with our courses in Urdu. Breaking language barriers, Our LMS ensures that education is accessible and relatable for everyone. Learn, grow, and excel in a language that feels like home.",
          icon: (
            <IoMdInformationCircleOutline className="h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]" />
          ),
        },
        {
          title: "Practice Exercises ",
          description:
            "Theory is just the beginning. Our LMS goes beyond by offering practical exercises that challenge and refine your skills. Apply your knowledge in real-world scenarios, solidifying your understanding and boosting your confidence.",
          icon: (
            <MdOutlineFolderCopy className="h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]" />
          ),
        },
      ],
    },
    {
      subTitle: "Are you Tech Instructor or Content Creator?",
      title: "Create Courses In Local Language & Generate Income",
      description:
        "Are you a professional want to start your journey as a tech instructor and content creator to make some revenue? Just visit Our LMS Intructor Portal",
      image: "./images/instructor.png",
      content: [
        {
          title: "Upload Tutorials & Excersice ",
          description:
            "Transform your expertise into impactful learning materials. As an instructor on Internee.pk LMS, you can effortlessly upload tutorials and exercises, shaping the educational experience for countless learners. ",
          icon: (
            <RiPhoneFindLine className="h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]" />
          ),
        },
        {
          title: "Generate Revenue ",
          description:
            "Teach what you love and earn what you deserve. Internee.pk LMS offers instructors the opportunity to generate revenue. Monetize your expertise, reach a global audience, and make a meaningful income from your passion.",
          icon: (
            <RiShapesLine className="h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]" />
          ),
        },
        {
          title: "Instructor Identity ",
          description:
            "Internee.pk LMS provides a platform for instructors to build their brand. Showcase your skills, experience, and teaching style, creating a unique and recognizable identity in the world of online education.",
          icon: (
            <IoMdDownload className="h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]" />
          ),
        },
        {
          title: "Perfact Share Ratio ",
          description:
            "We believe in fair partnerships. we enjoy a perfect share ratio that ensures transparency and fairness. Your hard work deserves to be rewarded, and we make sure you get your share",
          icon: (
            <VscTasklist className="h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]" />
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
          description:
            "Everything is done online, from mockup to final design.",
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

  return (
    <section className=" flex flex-col justify-center items-center">
      <div className="w-[90%]">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row my-24 ${
              index === 1 || index === 3 ? "md:flex-row-reverse" : ""
            }`}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="flex w-full items-center md:w-1/2"
            >
              <motion.div
                variants={
                  index === 1 || index === 3
                    ? fadeIn("left", "tween", 0.2, 1)
                    : fadeIn("right", "tween", 0.2, 1)
                }
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-fit"
                />
              </motion.div>
            </motion.div>
            <div className="flex flex-col w-full py-2 md:w-1/2 pl-1 md:pl-10">
              <h1 className="text-xl md:text-2xl font-bold">
                {section.subTitle}
              </h1>
              <h1 className=" text-2xl sm:text-4xl md:text-5xl  text-[#21282E] font-bold">
                {section.title}
              </h1>
              <p className="my-4 text-[#717275] text-[16px] sm:text-[18px] md:text-[20px] m-1 w-[100%] md:max-w-[80%]">
                {section.description}
              </p>
              <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 md:gap-8 w-[100%]">
                {section.content.map((content, contentIndex) => (
                  <div key={contentIndex} className="flex">
                    <motion.div
                      variants={bottomUp}
                      initial="hidden"
                      whileInView="show"
                      className="icon"
                    >
                      {content.icon}
                    </motion.div>
                    <div>
                      <p className="text-[#717275] text-[14px] m-1 w-[100%] md:max-w-[90%]">
                        <b>{content.title}</b>
                        {content.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DynamicSections;
