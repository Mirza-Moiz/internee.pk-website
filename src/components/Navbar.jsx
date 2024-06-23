import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="bg-white fixed top-0 w-full z-50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between">
          <div className="flex md:flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink
              onClick={() => setShowMobileMenu(false)}
              className="flex flex-shrink-0 items-center mr-4"
              to="/"
            >
              <img className="h-10 w-auto" src={Logo} alt="Internee.pk" />
            </NavLink>
          </div>
          {
            <div className="md:hidden">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="text-[#21282E] hover:text-[#4a4b4b] transition-all duration-300 ease-in-out"
              >
                {showMobileMenu ? (
                  <IoClose className="text-[30px]" />
                ) : (
                  <RxHamburgerMenu className="text-[30px]" />
                )}
              </button>
            </div>
          }

          <div className="flex items-center hidden md:block">
            <div className="md:ml-auto">
              <div className="flex text-[14px] lg:text-[16px] font-bold h-[50px] items-center text-[#21282E]">
                <NavLink
                  to="/internship"
                  className=" m-1 xl:m-2 px-2 lg:px-3 xl:px-4 hover:text-[#4a4b4b] transition-all duration-300 ease-in-out"
                >
                  Internship
                </NavLink>
                <NavLink
                  to="/company"
                  className=" m-1 xl:m-2 px-2 lg:px-3 xl:px-4 hover:text-[#4a4b4b] transition-all duration-300 ease-in-out"
                >
                  Company Collaboration
                </NavLink>
                <NavLink
                  to="/contact"
                  className=" m-1 xl:m-2 px-2 lg:px-3 xl:px-4 hover:text-[#4a4b4b] transition-all duration-300 ease-in-out"
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

      {showMobileMenu && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="/internship"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Internship
            </NavLink>
            <NavLink
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="/company"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Company Collaboration
            </NavLink>
            <NavLink
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact Us
            </NavLink>
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              <a href="https://job.internee.pk/" target="_blank">
                Job Portal
              </a>
            </button>
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              <a href="https://portal.internee.pk/login.php" target="_blank">
                Internee&apos;s Login
              </a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
