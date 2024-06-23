import { ReactTyped } from "react-typed";
import Hero from "../assets/images/hero.webp";
import Incubation from "../assets/images/incubation.jpg";
import Pitb from "../assets/images/pitb.png";
import Nic from "../assets/images/nic.png";
const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row m-4 sm:mx-32 mt-3 ">
      <div className="flex-1 flex-col">
        <h1 className="text-4xl sm:text-5xl p-2 text-[#21282E] font-bold">
          Looking for dream internship?
        </h1>
        <div className="text-[#43a724] p-2 text-5xl sm:text-6xl font-semibold min-h-48 sm:min-h-36 w-[100%] md:max-w-[80%]">
          <ReactTyped
            startWhenVisible
            strings={[
              "Get a competitive job",
              "In your desired domain",
              "Gain hands-on experience",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </div>
        <p className="text-[#717275] text-[20px] m-1 w-[100%] md:max-w-[80%]">
          Internee.pk kickstart student&apos;s tech careers with first
          internships, providing industry exposure, practical skills, and
          networking opportunities, paving the way for their success in the tech
          industry.
        </p>
        <div className="flex items-center justify-start">
          <img
            className="h-11 sm:h-14 md:h-16 w-auto m-2"
            src={Incubation}
            alt="Incubation"
          />
          <img
            className="h-11 sm:h-14 md:h-16 w-auto m-2"
            src={Pitb}
            alt="Pitb"
          />
          <img
            className="h-11 sm:h-14 md:h-16 w-auto m-2"
            src={Nic}
            alt="Nic"
          />
        </div>
        <div className="flex  mt-4 text-[14px] sm:text-[18px]">
          <div className="flex flex-col items-center">
            <button className="mx-4 w-32 sm:w-40 py-2 bg-white text-[#43a724] hover:text-[#74cb5acd] rounded-[25px] border-solid border-[#43a724] border-2 transition-all duration-300 ease-in-out">
              <a href="https://job.internee.pk/" target="_blank">
                Job Portal
              </a>
            </button>
            <p className="text-[#717275] font-semibold text-[12px] m-1 max-w-[80%] text-center">
              Coming Soon!
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <button className="mx-4 w-32 sm:w-40  py-2 bg-[#43a724] hover:bg-[#74cb5acd] text-white rounded-[25px] transition-all duration-300 ease-in-out">
              <a href="https://learn.internee.pk/" target="_blank">
                Our LMS
              </a>
            </button>
            <p className="text-[#717275] font-semibold text-[12px] m-1 max-w-[80%] text-center">
              90% Courses are in Urdu
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img src={Hero} alt="Internee.pk" />
      </div>
    </div>
  );
};
export default HeroSection;
