"use client";
import logo from "@/src/assets/Logo.png";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import StartButton from "./StartButton";
import { LuMenu } from "react-icons/lu";
import { IoIosArrowDown, IoMdClose } from "react-icons/io"; // Close icon
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar flex justify-between items-center py-4 px-[20px] lg:px-[60px] max-w-[1440px] mx-auto relative">
      {/* Logo Section */}
      <div>
        <Image src={logo} alt="Company Logo" />
      </div>
      {/* Large screen */}
      <ul className="lg:flex gap-12 text-[16px] font-medium hidden">
        <li className=" cursor-pointer">Features</li>
        <li className="flex items-center gap-1  cursor-pointer">
          Products <MdKeyboardArrowDown />
        </li>
        <li className=" cursor-pointer">Blog</li>
        <li className=" cursor-pointer">Pricing</li>
        <li className=" cursor-pointer">FAQ</li>
      </ul>
      {/* Action Buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <button className="border px-6 py-[10px] rounded-[30px] border-gray-300 hover:bg-gray-100 text-base font-normal">
          Log In
        </button>
        <StartButton />
      </div>
      {/* Small screen */}
      <div className="flex lg:hidden">
        <span className="text-[35px] cursor-pointer" onClick={handleDrawer}>
          <LuMenu />
        </span>
      </div>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-50  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-[#090909] w-[300px] shadow-lg shadow-[#f8f8f836]`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Image src={logo} alt="Company Logo" className="w-[180px]" />
          <IoMdClose
            className="text-[30px] cursor-pointer"
            onClick={handleDrawer}
          />
        </div>
        <ul className="p-4 text-[16px] font-medium space-y-2">
          <li
            className=" cursor-pointer bg-[#25252570] hover:bg-[#252525be] w-full px-2 py-[3px] rounded-md"

            // onClick={handleDrawer}
          >
            Features
          </li>
          <li
            className="flex  gap-1  cursor-pointer bg-[#25252570] w-full px-2 py-[3px] rounded-md items-center justify-between "
            onClick={handleDrawer}
          >
            <span>Products</span>
            <span className="text-xl">
              <IoIosArrowDown />
            </span>
          </li>
          <li
            className=" cursor-pointer bg-[#25252570] w-full px-2 py-[3px] rounded-md"
            onClick={handleDrawer}
          >
            Blog
          </li>
          <li
            className=" cursor-pointer bg-[#25252570] w-full px-2 py-[3px] rounded-md"
            onClick={handleDrawer}
          >
            Pricing
          </li>
          <li
            className=" cursor-pointer bg-[#25252570] w-full px-2 py-[3px] rounded-md"
            onClick={handleDrawer}
          >
            FAQ
          </li>
          <li
            className=" cursor-pointer bg-[#25252570] w-full px-2 py-[3px]  text-center border rounded-full"
            onClick={handleDrawer}
          >
            Log In
          </li>
          <li
            className=" cursor-pointer bg-white text-center text-black w-full px-2 py-[3px] rounded-full"
            onClick={handleDrawer}
          >
            Get Started
          </li>
        </ul>
          
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleDrawer}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
