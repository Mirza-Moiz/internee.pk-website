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

import { FiDownloadCloud } from "react-icons/fi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { PiHeadphonesLight } from "react-icons/pi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const internshipCards = [
    {
        title: "Frontend Internship",
        description:
            "Choosing Internee.pk means more than just learning to code. It's about career advancement and propelling your journey towards becoming aproficient frontend developer. We believe in sculpting future tech leaders, and with us, you                        become part of a vibrant community committed to                          excellence.                          ",
        image: "./images/frontend.webp",
    },
    {
        title: "Cloud Computing internship",
        description:
            "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services. ",
        image: "./images/cloud.webp",
    },
    {
        title: "Graphic Designing Internship",
        description:
            "What sets our Graphic Designing internship apart? It's the perfect blend of theory and hands-on practice. You'll not only grasp the principles of design but also dive into real-world projects that challenge and enhance your creative skills.",
        image: "./images/graphics.webp",
    },
    {
        title: "Backend Internship",
        description:
            "Backend internship? It's not just about learning; it's about crafting scalable solutions that power the digital landscape. Throughout he nternship, you'll engage in hands-on rojects, tackling real-world challenges longside seasoned developers who are assionate about mentoring the next generation.",
        image: "./images/BackendDevelopment.webp",
    },
    {
        title: "Video Editing Internship",
        description:
            "It's not just about splicing clips; it's abou understanding the nuances of pacing, rhythm, and visual aesthetics. Throughout the internship, you'll work on diverse projects, refining your skills under the guidance of experienced professionals passionate about visual storytelling.",
        image: "./images/portrait-woman.webp",
    },
    {
        title: "Mobile App Internship ",
        description:
            "Our internship goes beyond coding; it's about understanding user behavior, mastering UI/UX principles, and creating apps that leave a lasting impression. Whether you're a seasoned coder or a budding developer, our program is tailored to nurture your skills and broaden your understanding of app architecture.",
        image: "./images/mobile-app.webp",
    },
    {
        title: "Chatbot Development Internship",
        description:
            " Our program is designed for enthusiasts eager to explore natural language processing, machine learning, and the art of crafting intelligent conversational agents. From understanding user intents to deploying chatbots in real-world scenarios, you'll gain hands-on experience with cutting-edge technologies.",
        image: "./images/chatbot.webp",
    },
    {
        title: " Digital Marketing Internship ",
        description:
            "Internee.pk offers a comprehensive Digital Marketing internship that goes beyond textbooks. Gain practical experience in social media management, content creation, SEO optimization, and analytics. Work on real projects, refine your skills, and make a tangible impact. ",
        image: "./images/marketing.webp",
    },
    {
        title: "Cyber Security Internship ",
        description:
            "We believe in nurturing talent that can tackle evolving cyber threats. Our interns don't just learn; they engage with cutting-edge technologies, analyze vulnerabilities, and develop robust security strategies. ",
        image: "./images/cyber.webp",
    },
    {
        title: "Backend Internship ",
        description:
            "Backend internship? It's not just about learning. it's about crafting scalable solutions that power the digital landscape. Throughout the internship, you'll engage in hands-on projects, tackling real-world challenges alongside seasoned developers who are passionate about mentoring the next generation. ",
        image: "./images/BackendDevelopment.webp",
    },
    {
        title: "Technical Writing Internship",
        description:
            "We understand the importance of effective communication in the tech world. Our Technical Writing Internship offers a unique blend of hands-on experience in translating technical jargon into clear, concise, and engaging content.",
        image: "./images/technical-writing.webp",
    },
];

const cardsHomePage = [
    {
        title: "Backend Development",
        image: "./images/BackendDevelopment.webp",
    },
    {
        title: "App Development Internship",
        image: "./images/mobile-app.webp",
    },
    {
        title: "Graphic Design",
        image: "./images/graphics.webp",
    },
    {
        title: "Chatbot Development",
        image: "./images/chatbot.webp",
    },
    {
        title: "Data Analytics",
        image: "./images/analysis.webp",
    },
    {
        title: "Figma Internship",
        image: "./images/figma.png",
    },
];
const cardsInernshipPage = [
    {
        title: "Backend Development",
        image: "./images/BackendDevelopment.webp",
    },
    {
        title: "App Development Internship",
        image: "./images/mobile-app.webp",
    },
    {
        title: "Graphic Design",
        image: "./images/graphics.webp",
    },
    {
        title: "Chatbot Development",
        image: "./images/chatbot.webp",
    },
    {
        title: "Data Analytics",
        image: "./images/analysis.webp",
    },
    {
        title: "Figma Internship",
        image: "./images/figma.png",
    },
    {
        title: "Backend Development",
        image: "./images/BackendDevelopment.webp",
    },
    {
        title: "App Development Internship",
        image: "./images/mobile-app.webp",
    },
    {
        title: "Graphic Design",
        image: "./images/graphics.webp",
    },
    {
        title: "Chatbot Development",
        image: "./images/chatbot.webp",
    },
    {
        title: "Data Analytics",
        image: "./images/analysis.webp",
    },
    {
        title: "Figma Internship",
        image: "./images/figma.png",
    },
];

const blogs = [
    {
        title: "Complete all of the task but didn't get certification yet? 😓🤦‍♀️",
        description:
            "📧 Drop us a quick email at issues@internee.pk with the subject Didn&apos;t get certification yet. Our team will swiftly resolve the matter, ensuring you get your recognition promptly.",
    },
    {
        title: "We've hit a major milestone: 20,000 followers on LinkedIn! 🎉",
        description:
            "Thank you for being a part of our incredible journey towards empowering students and professionals in the world of IT and services. Your support means the world to us! 🚀",
    },
    {
        title:
            "🚀Calling communities to Empower Students, Collaborate with Internee.pk!✌",
        description:
            "We'd love to discuss how a collaboration with Internee.pk can benefit your universites , socities, institutes and educational institutions and specially with students.",
    },
    {
        title: "Ready to Showcase Your Expertise? Follow These Simple Steps! 🌟",
        description:
            "To complete the process, send us all the task details via email at careers@internee.pk. This ensures that we have all the necessary information to validate your certification.",
    },
];

const sectionsHomePage = [
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
                Icon: (
                    PiTelevisionSimple
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },

            },
            {
                title: "How to represent yourself ",
                description:
                    "More than just completing tasks, It empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments. Let your work speak volumes about your capabilities.",
                Icon: (
                    FaUserFriends
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
            {
                title: "SDLC Techniques ",
                description:
                    "Understanding the Software Development Life Cycle (SDLC) is pivotal in the tech world. Acquire skills that align with industry standards and boost your project management proficiency.",
                Icon: (
                    TbScreenShare
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
            {
                title: "Easy to understand ",
                description:
                    "Learning shouldn't be complicated. Our tasks are designed to be easily comprehensible, ensuring a smooth learning experience for everyone. Whether you're a seasoned professional or a beginner.",
                Icon: (
                    GrTask
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
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
                Icon: (
                    IoCloudDoneOutline
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
            {
                title: "Certification ",
                description:
                    "Complete courses on our LMS and earn certifications that validate your expertise. Showcase your accomplishments to potential employers and stand out in a competitive landscape.",
                Icon: (
                    MdOutlineSavedSearch
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
            {
                title: "Courses in Urdu ",
                description:
                    "Dive into the world of knowledge with our courses in Urdu. Breaking language barriers, Our LMS ensures that education is accessible and relatable for everyone. Learn, grow, and excel in a language that feels like home.",
                Icon: (
                    IoMdInformationCircleOutline
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
            {
                title: "Practice Exercises ",
                description:
                    "Theory is just the beginning. Our LMS goes beyond by offering practical exercises that challenge and refine your skills. Apply your knowledge in real-world scenarios, solidifying your understanding and boosting your confidence.",
                Icon: (
                    MdOutlineFolderCopy
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
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
                Icon: (
                    RiPhoneFindLine
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
            {
                title: "Generate Revenue ",
                description:
                    "Teach what you love and earn what you deserve. Internee.pk LMS offers instructors the opportunity to generate revenue. Monetize your expertise, reach a global audience, and make a meaningful income from your passion.",
                Icon: (
                    RiShapesLine
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
            {
                title: "Instructor Identity ",
                description:
                    "Internee.pk LMS provides a platform for instructors to build their brand. Showcase your skills, experience, and teaching style, creating a unique and recognizable identity in the world of online education.",
                Icon: (
                    IoMdDownload
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
            {
                title: "Perfact Share Ratio ",
                description:
                    "We believe in fair partnerships. we enjoy a perfect share ratio that ensures transparency and fairness. Your hard work deserves to be rewarded, and we make sure you get your share",
                Icon: (
                    VscTasklist
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
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
                Icon: (
                    TbScreenShare
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
            {
                title: "Speed up the design process ",
                description: "Everything is done online, from mockup to final design.",
                Icon: (
                    RiTaskLine
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
            {
                title: "Communicate easier ",
                description:
                    "Add multiple recipients to an Art Approval to reduce traditional email clutter.",
                Icon: (
                    FaUserFriends
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
            {
                title: "Add changes faster ",
                description:
                    "Students can add comments to approvals for changes, saving you both time on finalizing designs.",
                Icon: (
                    GoTasklist
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
        ],
    },
];

const sectionsInternshipPage = [
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
                Icon: (
                    PiTelevisionSimple
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },

            },
            {
                title: "How to represent yourself ",
                description:
                    "More than just completing tasks, It empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments. Let your work speak volumes about your capabilities.",
                Icon: (
                    FaUserFriends
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
            {
                title: "SDLC Techniques ",
                description:
                    "Understanding the Software Development Life Cycle (SDLC) is pivotal in the tech world. Acquire skills that align with industry standards and boost your project management proficiency.",
                Icon: (
                    TbScreenShare
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
            {
                title: "Easy to understand ",
                description:
                    "Learning shouldn't be complicated. Our tasks are designed to be easily comprehensible, ensuring a smooth learning experience for everyone. Whether you're a seasoned professional or a beginner.",
                Icon: (
                    GrTask
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
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
                Icon: (
                    TbScreenShare
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
            {
                title: "Speed up the design process ",
                description: "Everything is done online, from mockup to final design.",
                Icon: (
                    RiTaskLine
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
            {
                title: "Communicate easier ",
                description:
                    "Add multiple recipients to an Art Approval to reduce traditional email clutter.",
                Icon: (
                    FaUserFriends
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
            {
                title: "Add changes faster ",
                description:
                    "Students can add comments to approvals for changes, saving you both time on finalizing designs.",
                Icon: (
                    GoTasklist
                ),
                iconProps: { className: 'h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]' },
            },
        ],
    },
];

const cardsCompanyPage = [
    {
        Icon: FiDownloadCloud,
        iconProps: { className: 'h-24 w-24 p-4 text-[#43a724]' },
        number: "7k+",
        title: "Internship Provided",
    },
    {
        Icon: LiaUserFriendsSolid,
        iconProps: { className: 'h-24 w-24 p-4 text-[#43a724]' },
        number: "15k+",
        title: "LinkedIn Family",
    },
    {
        Icon: PiHeadphonesLight,
        iconProps: { className: 'h-24 w-24 p-4 text-[#43a724]' },
        number: "19",
        title: "Courses on LMS",
    },
    {
        Icon: AiOutlineSafetyCertificate,
        iconProps: { className: 'h-24 w-24 p-4 text-[#43a724]' },
        number: "15",
        title: "Companies Onboarded",
    },
];


// named exxport
export { internshipCards, cardsHomePage, blogs, cardsInernshipPage, sectionsHomePage, cardsCompanyPage, sectionsInternshipPage };