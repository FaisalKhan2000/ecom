import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { BtnPrimary } from "./btn";

const Footer = () => {
  return (
    <>
      {/* get the latest updates */}

      <div className="bg-light font-montserrat">
        <div className="flex flex-col md:flex-row justify-center items-center align-middle gap-4 max-w-7xl mx-auto min-h-[152px]">
          <h2 className="text-xl font-medium text-black uppercase">
            get the latest updates
          </h2>
          <input
            className="max-h-10 w-[280px] border py-2 px-2"
            type="text"
            name=""
            id=""
          />
          {/* <button className="px-4 py-2 text-white uppercase bg-black max-h-10">
            subscribe
          </button> */}
          {/* <BtnSecondary>subscribe</BtnSecondary> */}
          <BtnPrimary>subscribe</BtnPrimary>
          {/* <BtnWhite>subscribe</BtnWhite> */}
        </div>
      </div>

      <footer className="bg-white shadow-md font-montserrat">
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* ZENNA Section */}
          <div className="mb-8 text-center">
            <div className="flex flex-col items-start">
              <h2 className="mb-4 text-2xl font-bold tracking-widest text-black">
                ZENNA
              </h2>
              <p className="mb-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus, harum?
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-800 transition duration-300 ease-in-out hover:text-yellow"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-800 transition duration-300 ease-in-out hover:text-yellow"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-800 transition duration-300 ease-in-out hover:text-yellow"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Information */}
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold tracking-wider text-black">
                Information
              </h2>
              <div className="mb-4 border-b-2"></div>
              <div className="flex flex-col gap-3 text-sm text-gray-700">
                <Link
                  to="/"
                  className="transition duration-300 ease-in-out hover:text-yellow"
                >
                  Our Stores
                </Link>
                <Link
                  to="/"
                  className="transition duration-300 ease-in-out hover:text-yellow"
                >
                  About Us
                </Link>
                <Link
                  to="/"
                  className="transition duration-300 ease-in-out hover:text-yellow"
                >
                  Business with Us
                </Link>
                <Link
                  to="/"
                  className="transition duration-300 ease-in-out hover:text-yellow"
                >
                  Delivery Information
                </Link>
              </div>
            </div>

            {/* Account */}
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold tracking-wider text-black">
                Account
              </h2>
              <div className="mb-4 border-b-2"></div>
              <div className="flex flex-col gap-3 text-sm text-gray-700">
                <Link
                  to="/"
                  className="transition duration-300 ease-in-out hover:text-yellow"
                >
                  Login
                </Link>
                <Link
                  to="/"
                  className="transition duration-300 ease-in-out hover:text-yellow"
                >
                  Register
                </Link>
                <Link
                  to="/"
                  className="transition duration-300 ease-in-out hover:text-yellow"
                >
                  Profile
                </Link>
                <Link
                  to="/"
                  className="transition duration-300 ease-in-out hover:text-yellow"
                >
                  Orders
                </Link>
              </div>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold tracking-wider text-black">
                Useful Links
              </h2>
              <div className="mb-4 border-b-2"></div>
              <div className="flex flex-col gap-3 text-sm text-gray-700">
                <Link
                  to="/"
                  className="transition duration-300 ease-in-out hover:text-yellow"
                >
                  FAQs
                </Link>
                <Link
                  to="/"
                  className="transition duration-300 ease-in-out hover:text-yellow"
                >
                  Contact Us
                </Link>
                <Link
                  to="/"
                  className="transition duration-300 ease-in-out hover:text-yellow"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/"
                  className="transition duration-300 ease-in-out hover:text-yellow"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Additional Section */}
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold tracking-wider text-black">
                Additional
              </h2>
              <div className="mb-4 border-b-2"></div>
              <div className="flex flex-col gap-3 text-sm text-gray-700">
                <Link
                  to="/"
                  className="transition duration-300 ease-in-out hover:text-yellow"
                >
                  Link 1
                </Link>
                <Link
                  to="/"
                  className="transition duration-300 ease-in-out hover:text-yellow"
                >
                  Link 2
                </Link>
                <Link
                  to="/"
                  className="transition duration-300 ease-in-out hover:text-yellow"
                >
                  Link 3
                </Link>
                <Link
                  to="/"
                  className="transition duration-300 ease-in-out hover:text-yellow"
                >
                  Link 4
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="py-4 text-center text-gray-600 bg-gray-100">
          &copy; {new Date().getFullYear()} ZENNA. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
