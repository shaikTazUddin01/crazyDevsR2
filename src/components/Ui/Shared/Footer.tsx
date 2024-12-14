import logo from "@/src/assets/Logo.png";
import Image from "next/image";
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import designby from "@/src/assets/designby.png";
import postiz from "@/src/assets/postiz.png";

const Footer = () => {
  return (
    <div>
      {/* ------- */}
      <div className="bg-[#1A1919] w-full relative  z-0">
        <div className="pt-[140px] relative max-w-[1440px] mx-auto">
          <div className="flex flex-col justify-center max-w-[632px] items-center text-center mx-auto">
            <h1 className="text-[60px] font-plus-jakarta font-bold">
              Ready to get started?
            </h1>
            <p className="text-[22px] font-normal text-[#D1D1D1] px-[47px]">
              Elevate your social media planning and achieve new heights of
              efficiency and effectiveness with Postiz.
            </p>
            <button className="mt-8 rounded-full px-4 pt-2 bg-white text-black">
              get start
            </button>
          </div>

          {/* Overlapping Image */}
<div className="h-[335px] overflow-hidden">
          <Image
            src={postiz}
            alt="postiz"
            className="max-w-[1187px]  mx-auto z-10 "
          />
</div>
        </div>
      </div>

      {/* footer */}
      <div className="px-[60px] pt-[64px] mb-[32px] max-w-[1440px]  mx-auto ">
        <div className="grid  grid-cols-1 lg:grid-cols-5 gap-20">
          {/* socal Section */}
          <div className="col-span-2">
            <Image
              src={logo}
              alt="Company Logo"
              height={36}
              width={219}
              priority
            />
            <p className="mt-4 text-[18px]">
              Open-source social media scheduling tool
            </p>
            {/* icons */}
            <div className="flex items-center gap-3 mt-8">
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
          <div className="col-span-3 flex justify-between">
            {/* free tools */}
            <div>
              <h1 className="text-[18px] font-bold mb-5">Free Tools</h1>
              <ul className="text-[18px] space-y-3 text-[#dadada]">
                <li>Free Marketing Tools</li>
                <li>List Your agency</li>
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h1 className="text-[18px] font-bold mb-5">Resources</h1>
              <ul className="text-[18px] space-y-3 text-[#dadada]">
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
            <div className=" ">
              <h1 className="text-[18px] font-bold mb-5">Company</h1>
              <ul className="text-[18px] space-y-3 text-[#dadada]">
                <li>Pricing</li>
                <li>Terms of service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className="border-t border-[#424242] mt-8 pt-8 flex gap-5 items-center text-[#D1D1D1]">
          <p>&copy; Postiz,2024, All rights reserved.</p>

          <div className="flex items-center gap-[6px]">
            <p>Designed by</p>

            <Image src={designby} alt="designby" height={29} width={107} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
