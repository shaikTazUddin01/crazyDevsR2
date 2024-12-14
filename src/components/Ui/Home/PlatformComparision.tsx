import postiz from "@/src/assets/Logo3.png";
import buffer from "@/src/assets/buffer.png";
import Image from "next/image";

const PlatformComparision = () => {
  return (
    <div className="mt-[100px] lg:mt-[140px]">
      <h1 className="text-[30px] lg:text-[48px] font-bold text-center pb-[32px] lg:pb-[60px]">
        Platform Comparison
      </h1>
      {/* comparision card */}
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 relative">
        {/* postiz */}
        <div className="bg-gradient-to-r from-[#5608D5] to-[#24005E] py-[33px] lg:py-[60px] px-[21px] lg:px-[70px] rounded-[20px]">
          <Image src={postiz} alt="postiz" className="w-[123px] lg:w-[190px]" />
          <div className="mt-[12px] lg:mt-[24px]">
            <h1 className="font-semibold pb-3 text-[22px] lg:text-[34px]">Postiz</h1>
            <p className="text-[18px] lg:text-[22px] tracking-wide font-normal">
              Postiz helps you build an audience organically. We’re a
              values-driven company that provides affordable, intuitive,
              marketing tools for ambitious people and teams.
            </p>
          </div>
        </div>
        {/* buffer */}
        <div className="bg-[#1A1919] py-[33px] lg:py-[60px] px-[21px] lg:px-[70px] rounded-[20px]">
          <Image src={buffer} alt="buffer" className="w-[143px] lg:w-[210px]"/>
          <div className="mt-[12px] lg:mt-[24px]">
            <h1 className="font-semibold pb-3 text-[22px] lg:text-[34px]">Buffer</h1>
            <p className="text-[18px] lg:text-[22px] text-[#D1D1D1] tracking-wide font-normal">
              Buffer helps you build an audience organically. We’re a
              values-driven company that provides affordable, intuitive,
              marketing tools for ambitious people and teams.
            </p>
          </div>
        </div>
        {/* comparison */}
        <h1 className="text-[12px] lg:text-[22px] font-extrabold p-2 lg:p-3 bg-[#0E0E0E] rounded-[5px] lg:rounded-[16px] absolute top-[50%] lg:top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-[20] ">
          VS
        </h1>
      </div>
    </div>
  );
};

export default PlatformComparision;
