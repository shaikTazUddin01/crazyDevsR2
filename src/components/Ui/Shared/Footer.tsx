import logo from "@/src/assets/Logo2.png";
import Image from "next/image";
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import designby from "@/src/assets/designby.png";
import postiz from "@/src/assets/postiz.png";
import StartButton from "./StartButton";

const Footer = () => {
  return (
    <div>
      {/* ------- */}
      <div className="bg-[#1A1919] w-full relative  z-0">
        <div className="pt-[80px] lg:pt-[140px] relative max-w-[1440px] mx-auto">
          <div className="flex flex-col justify-center lg:max-w-[632px] items-center text-center mx-auto">
            <h1 className="text-[40px] leading-[44px] lg:text-[60px] font-plus-jakarta font-bold">
              Ready to get started?
            </h1>
            <p className="text-[18px] lg:text-[22px] font-normal text-[#D1D1D1] px-[20px] lg:px-[47px] leading-[24px] mt-[16px] mb-[32px]">
              Elevate your social media planning and achieve new heights of
              efficiency and effectiveness with Postiz.
            </p>
            <StartButton />
          </div>

          {/* Overlapping Image */}
          <div className="h-[100px] lg:h-[335px] overflow-hidden px-[20px] mt-[77px]">
            <Image
              src={postiz}
              alt="postiz"
              className="lg:max-w-[1187px]  mx-auto z-10 "
            />
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="px-[20px] lg:px-[60px] pt-[64px] mb-[32px] max-w-[1440px]  mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 w-full">
          {/* socal Section */}
          <div className="col-span-3 lg:col-span-2  ">
            <Image
              src={logo}
              alt="Company Logo"
              className="mx-auto lg:mx-0 "
              width={110}
              height={110}
            />
            <p className="mt-4 text-[18px] text-[#D1D1D1] lg:text-left text-center px-5 lg:px-0">
              Open-source social media scheduling tool
            </p>
            {/* icons */}
            <div className="hidden lg:flex gap-3 mt-8">
              <span className="p-[10px] rounded-full bg-[#3E3E3E] text-[24px]">
                <FaGithub />
              </span>
              <span className="p-[10px] rounded-full bg-[#3E3E3E] text-[24px]">
                <FaDiscord />
              </span>
              <span className="p-[10px] rounded-full bg-[#3E3E3E] text-[24px]">
                <FaLinkedinIn />
              </span>
              <span className="p-[10px] rounded-full bg-[#3E3E3E] text-[24px]">
                <FaXTwitter />
              </span>
            </div>
          </div>
          <div className="col-span-3 flex flex-col lg:flex-row justify-center lg:justify-between mt-[60px] lg:mt-0 gap-[60px] lg:gap-0">
            {/* free tools */}
            <div className="text-center lg:text-left">
              <h1 className="text-[18px] font-bold mb-5">Free Tools</h1>
              <ul className="text-[18px] space-y-3 text-[#D1D1D1]">
                <li>Free Marketing Tools</li>
                <li>List Your agency</li>
              </ul>
            </div>
            {/* Resources */}
            <div className="text-center lg:text-left">
              <h1 className="text-[18px] font-bold mb-3 lg:mb-5">Resources</h1>
              <ul className="text-[18px] space-y-2 lg:space-y-3 text-[#D1D1D1]">
                <li>Blog</li>
                <li>Docs</li>
                <li>Channels</li>
                <li>Roadmap</li>
                <li>Discord</li>
                <li>Alternetives</li>
                <li>Comparisons</li>
              </ul>
            </div>
            {/* company */}
            <div className="text-center lg:text-left">
              <h1 className="text-[18px] font-bold mb-5">Company</h1>
              <ul className="text-[18px] space-y-3 text-[#D1D1D1]">
                <li>Pricing</li>
                <li>Terms of service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className="border-t border-[#424242] mt-10 pt-8 flex flex-col-reverse md:flex-row gap-2 lg:gap-5 items-center text-[#D1D1D1]">
         

          <p>&copy; Postiz, 2024, All rights reserved.</p>

          <div className="flex items-center gap-[6px]">
            <p>Designed by</p>

            <Image src={designby} alt="designby" height={29} width={107} />
          </div>
           {/* icons */}
           <div className="flex md:hidden justify-center gap-[10px] mb-8">
            <span className="p-[10px] rounded-full bg-[#3E3E3E] text-[22px]">
              <FaGithub />
            </span>
            <span className="p-[10px] rounded-full bg-[#3E3E3E] text-[22px]">
              <FaDiscord />
            </span>
            <span className="p-[10px] rounded-full bg-[#3E3E3E] text-[22px]">
              <FaLinkedinIn />
            </span>
            <span className="p-[10px] rounded-full bg-[#3E3E3E] text-[22px]">
              <FaXTwitter />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
