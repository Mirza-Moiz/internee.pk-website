import { RxEnvelopeClosed } from "react-icons/rx";

const FeaturesSection = () => {
  const features = [
    "5500+ Students already registered",
    "Task based projects that based on hands on experience",
    "Massive Courses with high-quality videos on LMS",
    "Empowering youth towards IT revolution & technology",
    "Hands on Experience via Virtual internship",
    "Complete your task and get market competent job",
    "Direct Collaboration with companies for direct hiring",
  ];
  return (
    <div className="flex justify-center items-center min-h-screenp-6">
      <div className=" p-6 flex flex-col justify-between md:flex-row w-full max-w-6xl">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className=" text-2xl sm:text-4xl md:text-5xl  text-[#21282E] font-bold my-12">
            Why internee.pk?
          </h1>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 border-l-2 border-[#43a724]"></div>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center mb-10 relative">
                <div className=" p-3 bg-white border-[2px] border-[#43a724] rounded-lg flex items-center justify-center absolute left-0">
                  <RxEnvelopeClosed className="text-[#43a724] w-5 h-5" />
                </div>
                <div className="ml-20 my-2">
                  <span className="text-lg font-semibold">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center items-center">
          <img
            src="./images/programing.jpg"
            alt="Developer"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
