import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] min-h-[250px] pt-4">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-28  justify-between flex-wrap    ">
          <div className="flex flex-wrap sm:flex-1  items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0  mr-4 mt-4" to="/">
              <img className="h-12 w-auto" src={Logo} alt="Internee.pk" />
            </NavLink>
          </div>
          <div className="flex flex-col items-start mx-4 pr-4">
            <h1 className="text-[16px] font-bold m-1 items-center text-[#21282E]">
              Company
            </h1>
            <NavLink className="text-[#4A5056] text-[16px] m-1  " to="/contact">
              Contact Us
            </NavLink>
            <NavLink className="text-[#4A5056] text-[16px] m-1  " to="/privacy">
              Privacy Policy
            </NavLink>
            <NavLink className="text-[#4A5056] text-[16px] m-1  " to="/terms">
              Terms and Conditions
            </NavLink>
          </div>
          <div className="flex flex-col  items-start mx-4 pr-4">
            <h1 className="text-[16px] font-bold m-1 items-center text-[#21282E]">
              Get Help
            </h1>
            <NavLink className="text-[#4A5056] text-[16px] m-1  " to="/contact">
              Training Videos{" "}
            </NavLink>
            <NavLink className="text-[#4A5056] text-[16px] m-1  " to="/privacy">
              Request Help
            </NavLink>
          </div>
          <div className="flex flex-col  items-start mx-4 pr-4">
            <h1 className="text-[16px] font-bold m-1 items-center text-[#21282E]">
              Socialize with us
            </h1>
            <div className="flex items-center">
              <a href="https://www.facebook.com/internee.pk" target="_blank">
                <img
                  src="https://img.icons8.com/color/48/000000/facebook.png"
                  className="m-1 h-8 w-8"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/internee-pk/"
                target="_blank"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/linkedin.png"
                  className="m-1 h-8 w-8"
                />
              </a>
              <a href="https://www.instagram.com/internee.pk/" target="_blank">
                <img
                  src="https://img.icons8.com/color/48/000000/instagram-new.png"
                  className="m-1 h-8 w-8"
                />
              </a>
              <a href="https://twitter.com/interneepk" target="_blank">
                <img
                  src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                  className="m-1 h-8 w-8"
                />
              </a>
            </div>
            <p className="text-[#4A5056] text-[16px] m-1  ">Copyright ©2024</p>
            <p className="text-[#4A5056] text-[16px] m-1  ">
              {" "}
              internee.pk Pvt Ltd.{" "}
            </p>
            <p className="text-[#4A5056] text-[16px] m-1  ">
              {" "}
              All rights reserved.{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
