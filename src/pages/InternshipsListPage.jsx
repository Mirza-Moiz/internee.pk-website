import { useParams } from "react-router-dom";
import { internshipsList } from "../constants/index";

import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";

const InternshipsListPage = () => {
  const { id } = useParams();
  console.log(id);

  const internship = internshipsList.find(
    (internship) => internship?.path === id
  );

  console.log(internship?.data);

  return (
    <section className="flex flex-col justify-center items-center my-14">
      <h1 className="text-center text-xl w-[90%] sm:text-3xl   text-[#21282E] font-bold  mt-10">
        Featured Internships
      </h1>
      <p className="text-center my-4 text-[#717275] text-[16px] sm:text-[18px] md:text-[20px] m-1 w-[90%] md:max-w-[70%]">
        Grab your <b>Internships</b> on your favourite domain now..!
      </p>
      <div className="flex flex-col w-[90%] md:w-[70%]">
        {internship?.data?.map((internship, index) => (
          <Card
            key={index}
            image={internship.image}
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

const Card = ({ image, title, location, duration, type, remote }) => {
  return (
    <div
      className="flex  py-6 px-4 items-center w-full rounded-lg my-6"
      style={{
        boxShadow: "rgb(0 0 0 / 10%) 0px 0px 20px 10px",
      }}
    >
      <div
        className="m-4 flex flex-col justify-center items-center w-[70px] h-[70px] rounded-full "
        style={{
          boxShadow: "rgb(0 0 0 / 10%) 0px 0px 20px 10px",
        }}
      >
        <img src={image} alt={title} className="h-[60px] w-[60px] " />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex flex-col  w-[100%] md:w-[70%]">
          <h2 className=" text-xl md:text-xl  text-[#21282E] font-semibold">
            {title}
          </h2>

          <div className="flex flex-nowrap justify-start items-center my-1 text-[#717275] text-[14px] sm:text-[15px] m-1 w-full overflow-hidden">
            <p className="flex justify-start items-center flex-1  text-ellipsis w-[130px]">
              <FaMapMarkerAlt className="text-red-600 w-5 h-5 m-2" />
              {location}
            </p>
            <p className="flex justify-start items-center flex-1 whitespace-nowrap">
              <IoIosTimer className="text-green-600 w-5 h-5 m-2" />
              {duration}
            </p>
            <div className="flex flex-1 whitespace-nowrap">
              <p className="flex p-1 mx-2 font-semibold text-[12px]">{type}</p>
              <p className="flex rounded-md h-fit p-1 px-2 mx-2 font-semibold text-[12px] bg-[#F0F8ff] hover:bg-transparent transition-all duration-300 ease-in-out">
                {remote}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end ">
          <button
            className="
         w-[140px] h-fit py-2 mx-3 mt-4 text-white hover:bg-[#58a940cd] rounded-[5px] bg-[#43a724] transition-all duration-300 ease-in-out "
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default InternshipsListPage;
