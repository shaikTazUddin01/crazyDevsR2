import logo from "@/src/assets/Logo.png";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center py-4 px-[60px] max-w-[1440px] mx-auto">
      {/* Logo Section */}
      <div className="">
        <Image src={logo} alt="Company Logo" height={36} width={219} priority />
      </div>

      {/* Navigation Links */}
      <ul className=" flex gap-6 text-base font-medium">
        <li className="hover:text-blue-600 transition-colors cursor-pointer">Features</li>
        <li className="flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer">
          Products <MdKeyboardArrowDown />
        </li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">Blog</li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">Pricing</li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">FAQ</li>
      </ul>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button
          className=" border px-4 py-2 rounded-full border-gray-300 hover:bg-gray-100 "
        >
          Log In
        </button>
        <button
          className=" px-4 py-2 rounded-full bg-white text-black hover:bg-blue-700 "
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
