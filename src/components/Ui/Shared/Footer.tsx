import logo from "@/src/assets/Logo.png";
import Image from "next/image";
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import designby from '@/src/assets/designby.png'

const Footer = () => {
  return (
    <div className="px-[60px] pt-[64px] mb-[32px] max-w-[1440px] mx-auto ">
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
            <p>
            Designed by 
            </p>

            <Image src={designby} alt="designby" height={29} width={107}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
