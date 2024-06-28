import { Link } from "react-router-dom";

const InternshipCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white min-h-[522px] h-auto w-auto rounded-xl shadow-md m-2 sm:m-4">
      <img src={image} alt={title} className="h-auto w-full rounded-t-md" />

      <h1 className="mx-2  text-xl font-bold text-[#21282E] p-2">{title}</h1>
      <p className="mx-2 text-[#717275] text-wrap text-sm p-2">{description}</p>
      <button className="w-32 py-2 my-3 text-white hover:bg-[#58a940cd] rounded-[10px] bg-[#43a724] transition-all duration-300 ease-in-out ">
        <Link to={`/internships/${title.toLowerCase().replace(/\s+/g, "")}`}>
          Apply Now
        </Link>
      </button>
    </div>
  );
};

export default InternshipCard;
