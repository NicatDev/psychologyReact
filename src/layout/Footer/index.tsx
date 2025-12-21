// bloqlar, haqqımızda, əlaqə, testlər, şəxsiyyət testləri, biznes testləri
import { Link } from "react-router-dom";
import logo from "../../shared/media/imgs/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0f172b]">
      <div className="flex flex-col gap-6">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 py-12 px-4">
          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <img className="h-[80px] md:h-[90px]" src={logo} alt="white-logo" />
          </div>

          {/* Menu */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 text-white text-lg text-center">
            <Link
              className="hover:underline hover:text-primary-blue duration-300"
              to="/blogs"
            >
              Bloqlar
            </Link>
            <Link
              className="hover:underline hover:text-primary-blue duration-300"
              to="/about-us"
            >
              Haqqımızda
            </Link>
            <Link
              className="hover:underline hover:text-primary-blue duration-300"
              to="/contact-us"
            >
              Əlaqə
            </Link>
            <Link
              className="hover:underline hover:text-primary-blue duration-300"
              to="/test"
            >
              Testlər
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 lg:gap-6 text-xl lg:text-2xl text-primary-blue">
            <div className="bg-white rounded-full p-2 hover:bg-primary-blue hover:text-white duration-300 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-white rounded-full p-2 hover:bg-primary-blue hover:text-white duration-300 cursor-pointer">
              <FaTwitter />
            </div>
            <div className="bg-white rounded-full p-2 hover:bg-primary-blue hover:text-white duration-300 cursor-pointer">
              <FaYoutube />
            </div>
            <div className="bg-white rounded-full p-2 hover:bg-primary-blue hover:text-white duration-300 cursor-pointer">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Divider */}
        <span className="w-full h-[1px] bg-white opacity-50"></span>

        {/* Copyright */}
        <div className="container px-4 mx-auto text-center text-white pb-6 text-sm md:text-base">
          <p>© Copyrights 2024. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
