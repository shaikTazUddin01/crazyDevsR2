import { FcCheckmark } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";

export const FeatureList = ({
  title,
  features,
}: {
  title?: string;
  features: Record<string, boolean>[];
}) => (
  <div className="mt-9">
    <h3 className="text-[22px] font-bold mb-2 font-plus-jakarta">{title}</h3>
    <ul className="space-y-[10px] mt-[12px]">
      {features.map((feature:Record<string,boolean>, index) => {
        const [key, value] = Object.entries(feature)[0];
        return (
          <li key={index} className="flex items-center gap-2">
            <span
              className={`text-[18px] p-[10px] rounded-full ${
                value
                  ? "text-[#38FF9F] bg-[#262525]"
                  : "text-[#FF4E4E] bg-[#2E2E2E]"
              }`}
            >
              {value ? <FcCheckmark /> : <IoMdClose />}
            </span>
            <span className="text-[22px] text-[#D1D1D1] font-normal mt-1">{key}</span>
          </li>
        );
      })}
    </ul>
  </div>
);
// (

// )
