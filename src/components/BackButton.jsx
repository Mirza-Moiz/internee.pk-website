import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBackClick}
      className="fixed top-[130px] left-[5%] p-2 text-lg cursor-pointer text-[#58a940cd]  bg-[#7be5a25b] hover:bg-[#7be5a2d3] hover:text-white rounded-full transition-all duration-300 ease-in-out"
    >
      <IoArrowBackOutline className=" w-6 h-6" />
    </button>
  );
};

export default BackButton;
