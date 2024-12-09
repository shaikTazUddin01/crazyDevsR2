import logo from "@/src/assets/Logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="px-[60px] pt-[64px] mb-[32px] max-w-[1440px] mx-auto">
      <div className="">
        <Image src={logo} alt="Company Logo" height={36} width={219} priority />
      </div>

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Footer;
