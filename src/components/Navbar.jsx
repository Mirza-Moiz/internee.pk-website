import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={Logo} alt="Internee.pk" />
            </NavLink>
          </div>
          <div className="flex items-center">
            <div className="md:ml-auto">
              <div className="flex text-[16px] font-bold h-[50px] items-center text-[#21282E]">
                <NavLink
                  to="/internship"
                  className="m-2 px-4 hover:text-[#4a4b4b] transition-all duration-300 ease-in-out"
                >
                  Internship
                </NavLink>
                <NavLink
                  to="/company"
                  className="m-2 px-4 hover:text-[#4a4b4b] transition-all duration-300 ease-in-out"
                >
                  Company Collaboration
                </NavLink>
                <NavLink
                  to="/contact"
                  className="m-2 px-4 hover:text-[#4a4b4b] transition-all duration-300 ease-in-out"
                >
                  Contact Us
                </NavLink>
                <button className="mx-4 w-36 py-2 bg-[#43a724] hover:bg-[#74cb5acd] text-white rounded-[25px] transition-all duration-300 ease-in-out">
                  <a href="https://job.internee.pk/" target="_blank">
                    Job Portal
                  </a>
                </button>
                <button className="mx-4 w-40 py-2 bg-white text-[#43a724] hover:text-[#74cb5acd] rounded-[25px] border-solid border-[#43a724] border-2 transition-all duration-300 ease-in-out">
                  <a
                    href="https://portal.internee.pk/login.php"
                    target="_blank"
                  >
                    Internee&apos;s Login
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
