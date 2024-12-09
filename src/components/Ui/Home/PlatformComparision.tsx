import postiz from "@/src/assets/Logo.png";
import buffer from "@/src/assets/buffer.png";
import Image from "next/image";

const PlatformComparision = () => {
  return (
    <div className="mt-[160px]">
      <h1 className="text-[48px] font-bold text-center pb-[60px]">
        Platform Comparison
      </h1>
      {/* comparision card */}
      <div className="flex gap-3 relative">
        {/* postiz */}
        <div className="bg-gradient-to-r from-[#5608D5] to-[#24005E] py-[60px] px-[80px] rounded-[20px]">
          <Image src={postiz} alt="postiz" height={62} width={190} />
          <div className="mt-[24px]">
            <h1 className="font-semibold pb-3 text-[34px]">Postiz</h1>
            <p className="text-[22px]">
              Postiz helps you build an audience organically. We’re a
              values-driven company that provides affordable, intuitive,
              marketing tools for ambitious people and teams.
            </p>
          </div>
        </div>
        {/* buffer */}
        <div className="bg-[#1A1919] py-[60px] px-[80px] rounded-[20px]">
          <Image src={buffer} alt="buffer" height={62} width={190} />
          <div className="mt-[24px]">
            <h1 className="font-semibold pb-3 text-[34px]">Buffer</h1>
            <p className="text-[22px] text-[#D1D1D1]">
              Buffer helps you build an audience organically. We’re a
              values-driven company that provides affordable, intuitive,
              marketing tools for ambitious people and teams.
            </p>
          </div>
        </div>
        {/* comparison */}
        <h1 className="text-[22px] font-extrabold p-3 bg-[#0E0E0E] rounded-[16px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-[20]">
          VS
        </h1>
      </div>
    </div>
  );
};

export default PlatformComparision;
