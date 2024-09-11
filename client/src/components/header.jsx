import React, { useState } from "react";
import { Menu, X, ShoppingBag, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between min-h-[100px]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              to={"/"}
              className="text-2xl font-bold text-black uppercase tracking-widest"
            >
              EShop
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center ">
            <Link
              to={"/"}
              className="text-black text-base font-medium uppercase hover:text-yellow"
            >
              Home
            </Link>
            <Link
              to={"/shop"}
              className="text-black text-base font-medium uppercase hover:text-yellow"
            >
              Shop
            </Link>
            <Link
              to={"/cart"}
              className="text-black text-base font-medium uppercase hover:text-yellow"
            >
              Cart
            </Link>

            {/* Icons */}
            <div className="flex space-x-4 items-center">
              <ShoppingBag className="w-6 h-6 text-black text-base font-medium uppercase hover:text-yellow cursor-pointer" />
              <LogIn className="w-6 h-6 text-black text-base font-medium uppercase hover:text-yellow cursor-pointer" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-2 space-y-1 sm:px-3">
            <Link
              to={"/"}
              className="block text-black hover:text-yellow cursor-pointer"
            >
              Home
            </Link>
            <Link
              to={"/shop"}
              className="block text-black hover:text-yellow cursor-pointer"
            >
              Shop
            </Link>
            <Link
              to={"/cart"}
              className="block text-black hover:text-yellow cursor-pointer"
            >
              Cart
            </Link>

            <ShoppingBag className="w-6 h-6 text-black hover:text-yellow" />
            <LogIn className="w-6 h-6 text-black hover:text-yellow" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
