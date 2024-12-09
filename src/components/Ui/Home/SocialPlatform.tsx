import social from "@/src/assets/Interface.png";
import Image from "next/image";

const SocialPlatform = () => {
  return (
    <div className="">
    <div className="background-gradient  flex overflow-auto rounded-[16px]">
      {/* left side */}
      <div className="w-[60%] p-[60px]">
        <h4>One-Stop platform</h4>
        <div className="flex flex-col text-[38px] font-extrabold py-6 font-plus-jakarta">
          <span>Postiz is an open-source tool</span>{" "}
          <span>for social media scheduling</span>
        </div>
        <p>
          Provides tools to manage social media, build an audience,
          <br /> generate leads, and grow your business.
        </p>

        <button className="px-4 py-3 bg-white rounded-full text-black">
          Get Started
        </button>
      </div>
      {/* right side */}
      <div className=" h-full w-[40%] overflow-hidden relative">
        <div className="relative">

        <Image src={social} alt="social" className="socialInterface" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default SocialPlatform;
