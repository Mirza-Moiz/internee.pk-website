import ContactForm from "../components/ContactForm";
import { FiDownloadCloud } from "react-icons/fi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { PiHeadphonesLight } from "react-icons/pi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const CompanyPage = () => {
  const card = [
    {
      icon: <FiDownloadCloud className="h-24 w-24  p-4 text-[#43a724]" />,
      number: "7k+",
      title: "Internship Provided",
    },
    {
      icon: <LiaUserFriendsSolid className="h-24 w-24  p-4 text-[#43a724]" />,
      number: "15k+",
      title: "LinkedIn Family",
    },
    {
      icon: <PiHeadphonesLight className="h-24 w-24  p-4 text-[#43a724]" />,
      number: "19",
      title: "Courses on LMS",
    },
    {
      icon: (
        <AiOutlineSafetyCertificate className="h-24 w-24  p-4 text-[#43a724]" />
      ),
      number: "15",
      title: "Companies Onboarded",
    },
  ];
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <h1 className=" text-xl sm:text-3xl   text-[#21282E] font-bold  mt-10">
          Are you looking for hands on candidate for your company?
        </h1>
        <p className="text-center my-4 text-[#717275] text-[16px] sm:text-[18px] md:text-[20px] m-1 w-[90%] md:max-w-[70%]">
          Internee.pk kickstart student&apos;s tech careers with first
          internships, providing industry exposure, practical skills, and
          networking opportunities, paving the way for their success in the tech
          industry.
        </p>
        <div
          className="
          my-20
          grid 
        grid-cols-1
        gap-4
        w-[90%]
        md:grid-cols-2
        lg:grid-cols-3
         xl:grid-cols-4"
        >
          {card.map((item, index) => (
            <div
              key={index}
              className="
                flex
                flex-col
                items-center
                justify-center
                border-2
                border-[#43a724]
                rounded-lg
                px-4
                m-4
                "
            >
              <div className="">{item.icon}</div>
              <h1 className=" text-xl md:text-3xl  text-[#21282E] font-semibold">
                {item.number}
              </h1>
              <p className="text-center  text-[14px] sm:text-[16px] md:text-[18px] m-1 w-[100%] md:max-w-[80%]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default CompanyPage;
