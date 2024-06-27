import { useParams } from "react-router-dom";
import { internshipsList } from "../constants/index";

const InternshipsListPage = () => {
  const { id } = useParams();
  console.log(id);

  const internship = internshipsList.find(
    (internship) => internship.path === id
  );

  console.log(internship.data);

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-center text-xl w-[90%] sm:text-3xl   text-[#21282E] font-bold  mt-10">
        Featured Internships
      </h1>
      <p className="text-center my-4 text-[#717275] text-[16px] sm:text-[18px] md:text-[20px] m-1 w-[90%] md:max-w-[70%]">
        Grab your <b>Internships</b> on your favourite domain now..!
      </p>
      <div className="flex flex-col w-[70%]">
        {internship?.data?.map((internship, index) => (
          <Card
            key={index}
            icon={internship.icon}
            title={internship.title}
            location={internship.location}
            duration={internship.duration}
            type={internship.type}
            remote={internship.remote}
          />
        ))}
      </div>
    </section>
  );
};

const Card = ({ icon, title, location, duration, type, remote }) => {
  return (
    <div
      className="flex  py-6 px-4 items-center w-full rounded-lg my-6"
      style={{
        boxShadow: "rgb(0 0 0 / 20%) -1px 2px 18px 7px",
      }}
    >
      <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#F0F8FF] rounded-lg mr-4">
        <img src={icon} alt="icon" className="w-[30px] h-[30px]" />
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col w-[70%]">
          <h2 className=" text-xl md:text-xl  text-[#21282E] font-semibold">
            {title}
          </h2>

          <div className="flex flex-wrap justify-center  my-1 text-[#717275] text-[14px] sm:text-[16px] md:text-[16px] m-1 w-full">
            <p className="flex-1">{location}</p>
            <p className="flex-1">{duration}</p>
            <div className="flex flex-1">
              <p className="flex p-1 mx-2 font-semibold text-[12px]">{type}</p>
              <p className="flex rounded-md p-1 px-2  mx-2 font-semibold text-[12px] bg-[#F0F8ff] hover:bg-transparent transition-all duration-300 ease-in-out">
                {remote}
              </p>
            </div>
          </div>
        </div>
        <button className="w-[140px] h-fit py-2 mx-6 my-3 text-white hover:bg-[#58a940cd] rounded-[5px] bg-[#43a724] transition-all duration-300 ease-in-out ">
          Apply Now
        </button>
      </div>
    </div>
  );
};
export default InternshipsListPage;
