import React, { useState } from "react";
import { Menu, X, ShoppingBag, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md font-montserrat">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between min-h-[100px]">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link
              to={"/"}
              className="text-2xl font-bold tracking-widest text-black uppercase"
            >
              EShop
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="items-center hidden space-x-8 md:flex ">
            <Link
              to={"/"}
              className="text-base font-medium text-black uppercase hover:text-yellow"
            >
              Home
            </Link>
            <Link
              to={"/shop"}
              className="text-base font-medium text-black uppercase hover:text-yellow"
            >
              Shop
            </Link>
            <Link
              to={"/cart"}
              className="text-base font-medium text-black uppercase hover:text-yellow"
            >
              Cart
            </Link>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <ShoppingBag className="w-6 h-6 text-base font-medium text-black uppercase cursor-pointer hover:text-yellow" />
              <LogIn className="w-6 h-6 text-base font-medium text-black uppercase cursor-pointer hover:text-yellow" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
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
              className="block text-black cursor-pointer hover:text-yellow"
            >
              Home
            </Link>
            <Link
              to={"/shop"}
              className="block text-black cursor-pointer hover:text-yellow"
            >
              Shop
            </Link>
            <Link
              to={"/cart"}
              className="block text-black cursor-pointer hover:text-yellow"
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
