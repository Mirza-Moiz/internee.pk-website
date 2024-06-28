import { ReactTyped } from "react-typed";
import BackButton from "../components/BackButton";

const JobPortalPage = () => {
  return (
    <>
      <BackButton />
      <div className="flex items-center justify-center h-screen">
        <div className="text-[#43a724] p-2 text-5xl sm:text-6xl font-semibold min-h-48 sm:min-h-36 ">
          <ReactTyped
            startWhenVisible
            strings={["Coming Soon!!!", "Job Portal", "Stay Tuned!"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </div>
      </div>
    </>
  );
};

export default JobPortalPage;
