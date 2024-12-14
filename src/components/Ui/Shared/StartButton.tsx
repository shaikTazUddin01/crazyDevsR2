import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const StartButton = () => {
  return (
    <button className="text-black pl-6 lg:pl-8 pr-3 lg:pr-4 py-3 lg:py-4 font-medium text-[16px] lg:text-[18px] rounded-[30px] bg-white  flex items-center justify-center gap-[2px] font-dm-sans hover:bg-[#dddddd] tracking-wider">
      Get Started
      <span className="text-[23px] lg:text-[26px] -mt-[1px]">
        <MdKeyboardDoubleArrowRight />
      </span>
    </button>
  );
};

export default StartButton;
