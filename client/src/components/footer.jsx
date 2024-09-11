import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* get the latest updates */}

      <div className="bg-light  ">
        <div className="flex flex-col md:flex-row justify-center items-center align-middle gap-4 max-w-7xl mx-auto min-h-[152px]">
          <h2 className="text-black uppercase text-xl font-medium">
            get the latest updates
          </h2>
          <input
            className="max-h-10 w-[280px] border py-2 px-2"
            type="text"
            name=""
            id=""
          />
          <button className="max-h-10 bg-black py-2 px-4 uppercase text-white">
            subscribe
          </button>
        </div>
      </div>

      <footer className="bg-white shadow-md font-montserrat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* ZENNA Section */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-bold text-black tracking-widest mb-4">
                ZENNA
              </h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus, harum?
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-800 hover:text-yellow transition duration-300 ease-in-out"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-yellow transition duration-300 ease-in-out"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-yellow transition duration-300 ease-in-out"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Information */}
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold text-black tracking-wider">
                Information
              </h2>
              <div className="border-b-2 mb-4"></div>
              <div className="flex flex-col gap-3 text-sm text-gray-700">
                <Link
                  to="/"
                  className="hover:text-yellow transition duration-300 ease-in-out"
                >
                  Our Stores
                </Link>
                <Link
                  to="/"
                  className="hover:text-yellow transition duration-300 ease-in-out"
                >
                  About Us
                </Link>
                <Link
                  to="/"
                  className="hover:text-yellow transition duration-300 ease-in-out"
                >
                  Business with Us
                </Link>
                <Link
                  to="/"
                  className="hover:text-yellow transition duration-300 ease-in-out"
                >
                  Delivery Information
                </Link>
              </div>
            </div>

            {/* Account */}
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold text-black tracking-wider">
                Account
              </h2>
              <div className="border-b-2 mb-4"></div>
              <div className="flex flex-col gap-3 text-sm text-gray-700">
                <Link
                  to="/"
                  className="hover:text-yellow transition duration-300 ease-in-out"
                >
                  Login
                </Link>
                <Link
                  to="/"
                  className="hover:text-yellow transition duration-300 ease-in-out"
                >
                  Register
                </Link>
                <Link
                  to="/"
                  className="hover:text-yellow transition duration-300 ease-in-out"
                >
                  Profile
                </Link>
                <Link
                  to="/"
                  className="hover:text-yellow transition duration-300 ease-in-out"
                >
                  Orders
                </Link>
              </div>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold text-black tracking-wider">
                Useful Links
              </h2>
              <div className="border-b-2 mb-4"></div>
              <div className="flex flex-col gap-3 text-sm text-gray-700">
                <Link
                  to="/"
                  className="hover:text-yellow transition duration-300 ease-in-out"
                >
                  FAQs
                </Link>
                <Link
                  to="/"
                  className="hover:text-yellow transition duration-300 ease-in-out"
                >
                  Contact Us
                </Link>
                <Link
                  to="/"
                  className="hover:text-yellow transition duration-300 ease-in-out"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/"
                  className="hover:text-yellow transition duration-300 ease-in-out"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Additional Section */}
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold text-black tracking-wider">
                Additional
              </h2>
              <div className="border-b-2 mb-4"></div>
              <div className="flex flex-col gap-3 text-sm text-gray-700">
                <Link
                  to="/"
                  className="hover:text-yellow transition duration-300 ease-in-out"
                >
                  Link 1
                </Link>
                <Link
                  to="/"
                  className="hover:text-yellow transition duration-300 ease-in-out"
                >
                  Link 2
                </Link>
                <Link
                  to="/"
                  className="hover:text-yellow transition duration-300 ease-in-out"
                >
                  Link 3
                </Link>
                <Link
                  to="/"
                  className="hover:text-yellow transition duration-300 ease-in-out"
                >
                  Link 4
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="bg-gray-100 py-4 text-center text-gray-600">
          &copy; {new Date().getFullYear()} ZENNA. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
