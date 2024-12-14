'use client';
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
  const [openitem, setOpenItem] = useState<number | null>(1);

  const handleFaq = (number: number) => {
    setOpenItem((prev) => (prev === number ? null : number));
  };

  return (
    <div>
      <div className="text-white mx-auto rounded-lg flex items-start justify-between my-[180px] gap-[60px]">
        <div className="max-w-[25%]">
          <h2 className="text-[48px] font-bold leading-[52px]">
            Frequently asked questions
          </h2>
        </div>
        <div className="space-y-3">
          {/* First FAQ */}
          <div className="border border-[#696969] rounded-[20px] p-[30px] bg-[#1A1919]">
            <div
              className="w-full text-[24px] flex justify-between items-center font-bold cursor-pointer"
              onClick={() => handleFaq(1)}
            >
              <p className="text-[24px] font-bold w-[75%] leading-6 font-plus-jakarta">
                How easy is it to switch from Buffer to Postiz?
              </p>
              <span className={`transition-transform duration-300  ${openitem === 1 ? 'rotate-180' : ''}`}>
                <IoIosArrowDown/> 
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openitem === 1 ? "max-h-[300px]" : "max-h-0"
              }`}
            >
              <div className="mt-[20px] text-[#D1D1D1] text-[22px] font-normal leading-7">
                Yes, you can safely use both Postiz and Buffer at the same time
                without any issues.
              </div>
            </div>
          </div>

          {/* Second FAQ */}
          <div className="border border-[#696969] rounded-[20px] p-[30px] bg-[#1A1919]">
            <div
              className="w-full text-[24px] flex justify-between items-center font-bold cursor-pointer"
              onClick={() => handleFaq(2)}
            >
              <p className="text-[24px] font-bold w-[75%] leading-6 font-plus-jakarta">
                Can I use Postiz & Buffer at the same time safely?
              </p>
              <span className={`transition-transform duration-300  ${openitem === 2 ? 'rotate-180' : ''}`}>
                <IoIosArrowDown/> 
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openitem === 2 ? "max-h-[300px]" : "max-h-0"
              }`}
            >
              <div className="mt-[20px] text-[#D1D1D1] text-[22px] font-normal leading-7">
                Yes, you can safely use both Postiz and Buffer at the same time
                without any issues.
              </div>
            </div>
          </div>

          {/* Third FAQ */}
          <div className="border border-[#696969] rounded-[20px] p-[30px] bg-[#1A1919]">
            <div
              className="w-full text-[24px] flex justify-between items-center font-bold cursor-pointer"
              onClick={() => handleFaq(3)}
            >
              <p className="text-[24px] font-bold w-[75%] leading-7 font-plus-jakarta">
                I’m paying for Buffer, but don’t want to pay double while I get
                setup – can I get an extended trial?
              </p>
              <span className={` transition-transform duration-300 ${openitem === 3 ? 'rotate-180' : ''}`}>
                <IoIosArrowDown/> 
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openitem === 3 ? "max-h-[300px]" : "max-h-0"
              }`}
            >
              <div className="mt-[20px] text-[#D1D1D1] text-[22px] font-normal leading-7">
                Yes, you can safely use both Postiz and Buffer at the same time
                without any issues.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
