import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-500 bg-opacity-30">
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="flex justify-between items-center ">
          <h3 className="text-2xl font-bold text-white bg-black inline-block p-4 rounded-lg m-4">
            H
          </h3>
          <div className="bg-black mx-4 rounded-full">
            <ul className="flex m-4">
              <ol className="mx-2">
                <a
                  href="/"
                  className="text-white text-base font-semibold hover:text-black hover:bg-white hover:rounded-full p-2"
                >
                  Home
                </a>
              </ol>
              <ol className="mx-2">
                <a
                  href="/about"
                  className="text-white text-base font-semibold hover:text-black hover:bg-white hover:rounded-full p-2"
                >
                  About
                </a>
              </ol>
              <ol className="mx-2">
                <a
                  href="/services"
                  className="text-white text-base font-semibold hover:text-black hover:bg-white hover:rounded-full p-2"
                >
                  Services
                </a>
              </ol>
              <ol className="mx-2">
                <a
                  href="/products"
                  className="text-white text-base font-semibold hover:text-black hover:bg-white hover:rounded-full p-2"
                >
                  Products
                </a>
              </ol>
              <ol className="mx-2">
                <a
                  href="/contact"
                  className="text-white text-base font-semibold hover:text-black hover:bg-white hover:rounded-full p-2"
                >
                  Contact Us
                </a>
              </ol>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-white bg-black inline-block p-4 rounded-lg m-4">
            H
          </h3>
          <div className="text-4xl font-bold mx-4">
            {isOpen ? (
              <RxCross1 onClick={handleClick} />
            ) : (
              <HiBars3 onClick={handleClick} />
            )}
          </div>
        </div>
        {isOpen && (
          <div className="bg-black mx-4 rounded-md">
            <ul className="flex flex-col justify-center items-center m-4">
              <ol className="m-2">
                <a href="/" className="text-white text-base font-semibold">
                  Home
                </a>
              </ol>
              <ol className="m-2">
                <a href="/about" className="text-white text-base font-semibold">
                  About
                </a>
              </ol>
              <ol className="m-2">
                <a
                  href="/services"
                  className="text-white text-base font-semibold"
                >
                  Services
                </a>
              </ol>
              <ol className="m-2">
                <a
                  href="/products"
                  className="text-white text-base font-semibold"
                >
                  Products
                </a>
              </ol>
              <ol className="m-2">
                <a
                  href="/contact"
                  className="text-white text-base font-semibold"
                >
                  Contact Us
                </a>
              </ol>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
