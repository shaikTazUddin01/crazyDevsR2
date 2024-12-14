import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const StartButton = () => {
  return (
    <button className="text-black pl-6 pr-4 py-[10px] font-medium text-base rounded-[30px] bg-white  flex items-center justify-center gap-1 font-plus-jakarta">
      Get Started
      <span className="text-[23px] -mt-[1px]">
        <MdKeyboardDoubleArrowRight />
      </span>
    </button>
  );
};

export default StartButton;
