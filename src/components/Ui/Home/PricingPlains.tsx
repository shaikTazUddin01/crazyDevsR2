import { MdCheck } from "react-icons/md";


const PricingPlains = () => {
  return (
    <div className="mt-[60px] lg:mt-[120px]">
      <h1 className="text-[30px] lg:text-[48px] font-bold font-plus-jakarta pb-[30px] lg:pb-[60px] text-center">
        Pricing & Plans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* postiz Pricing */}
        <div className="bg-[#1A1919] rounded-[20px] px-[22px] py-[32px] lg:p-[44px]">
          <h2 className="text-[22px] lg:text-[34px] font-bold font-plus-jakarta">
            Postiz Pricing
          </h2>
          <section className="pt-[24px] pb-[32px] lg:py-[25px] space-y-3">
            <li className="text-[20px] lg:text-[22px] font-normal flex items-start md:items-center gap-2 text-[#D1D1D1]">
              <span className="text-[18px] lg:text-[22px] text-[#38FF9F] p-2 bg-[#262525] rounded-full font-bold">
                <MdCheck />
              </span>{" "} 
              14 day free trial, credit card required
            </li>
            <li className="text-[20px] lg:text-[22px] font-normal flex items-center gap-2 text-[#D1D1D1]">
              <span className="text-[18px] lg:text-[22px] text-[#38FF9F] p-2 bg-[#262525] rounded-full font-bold">
                <MdCheck />
              </span>{" "}
              10% annual discount
            </li>
          </section>
          {/* packages */}
          <section className="flex flex-col gap-2">
            {/* package 1 */}
            <div className="flex flex-col md:flex-row justify-between p-[24px] lg:p-[30px] items-start bg-[#242323] rounded-[16px] min-h-[142px]">
              {/* right side */}
              <div className="flex flex-col">
                <span className="text-[18px] lg:text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                  Standart
                </span>
                <span className="text-[32px] lg:text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                  $29 <span className="text-[18px] lg:text-[22px] tracking-wider font-normal">/mo</span>
                </span>
              </div>
              {/* left side */}
              <div className="text-[18px] lg:text-[20px] font-dm-sans mt-[28px] md:mt-0 ">
                <p>Social sets: 1</p>
                <p className="-mt-1">Users: 1</p>
              </div>
            </div>
            {/* package 2 */}
            <div className="flex flex-col md:flex-row  justify-between p-[24px] lg:p-[30px]  items-start bg-[#242323] rounded-[16px] min-h-[142px]">
              {/* right side */}
              <div className="flex flex-col">
                <span className="text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                  Team
                </span>
                <span className="text-[32px] lg:text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                  $39 <span className="text-[18px] lg:text-[22px] tracking-wider font-normal">/mo</span>
                </span>
              </div>
              {/* left side */}
              <div className="text-[18px] lg:text-[20px] font-dm-sans mt-[24px] md:mt-0 ">
                <p>Social sets: 1</p>
                <p className="-mt-1">Users: unlimited</p>
              </div>
            </div>
            {/* package 3 */}
            <div className="flex flex-col md:flex-row justify-between p-[24px] lg:p-[30px] items-start bg-[#242323] rounded-[16px] min-h-[142px]">
              {/* right side */}
              <div className="flex flex-col">
                <span className="text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                  Pro
                </span>
                <span className="text-[32px] lg:text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                  $49 <span className="text-[18px] lg:text-[22px] tracking-wider font-normal">/mo</span>
                </span>
              </div>
              {/* left side */}
              <div className="text-[18px] lg:text-[20px] font-dm-sans mt-[24px] md:mt-0 ">
                <p>Social sets: 1</p>
                <p className="-mt-1">Users: unlimited</p>
              </div>
            </div>
            {/* package 4 */}
            <div className="flex flex-col md:flex-row  p-[24px] lg:p-[30px] justify-between items-start bg-[#242323] rounded-[16px] min-h-[142px]">
              {/* right side */}
              <div className="flex flex-col">
                <span className="text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                  Ultimate
                </span>
                <span className="text-[32px] lg:text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                  $99 <span className="text-[18px] lg:text-[22px] tracking-wider font-normal">/mo</span>
                </span>
              </div>
              {/* left side */}
              <div className="text-[18px] lg:text-[20px] font-dm-sans mt-[24px] md:mt-0 ">
                <p>Social sets: 1</p>
                <p className="-mt-1">Users: unlimited</p>
              </div>
            </div>
          </section>
          {/* packages section end */}
          {/*  ---on premise services----  */}
          <section className="mt-[44px]">
            <h1 className="font-plus-jakarta text-[22px] lg:text-[22px] font-bold leading-[25px]">
              On-premise service & Enterprise
            </h1>
            <div className="mt-6 flex flex-col gap-2">
              {/* package 1 */}
              <div className="flex flex-col lg:flex-row justify-between p-[24px] lg:p-[30px] items-start bg-gradient-to-r from-[#45007C] to-[#1C0033] rounded-[16px]">
                {/* right side */}
                <div className="flex flex-col">
                  <span className="text-[18px] lg:text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                    Self service installation
                  </span>
                  <span className="text-[32px] lg:text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                    $2000{" "}
                    <span className=" text-[18px] lg:text-[22px] font-normal">/ One time</span>
                  </span>
                </div>
                {/* left side */}
                <div className="text-[18px] lg:text-[20px] font-dm-sans mt-[24px] lg:mt-0  ">
                  <p>Social sets: 1</p>
                  <p className="-mt-1">Users: 1</p>
                </div>
              </div>
              {/* package 2 */}
              <div className="flex flex-col lg:flex-row justify-between p-[24px] lg:p-[30px] items-start bg-gradient-to-r from-[#6B007C] to-[#280033] rounded-[16px]">
                {/* right side */}
                <div className="flex flex-col">
                  <span className="text-[18px] lg:text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                    Enterprise
                  </span>
                  <span className="text-[32px] lg:text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                    Custom
                  </span>
                </div>
                {/* left side */}
                <div className="text-[18px] lg:text-[20px] font-dm-sans mt-[24px] lg:mt-0 ">
                  <p>Social sets: 1</p>
                  <p className="-mt-1">Users: 1</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Buffer pricing */}
        
          <div className="bg-[#1A1919] rounded-[20px] px-[22px] py-[32px] lg:p-[44px]">
          <h2 className="text-[22px] lg:text-[34px] font-bold font-plus-jakarta">
          Buffer Pricing
          </h2>
          <section className="pt-[24px] pb-[32px] lg:py-[25px] space-y-3">
            <li className="text-[20px] lg:text-[22px] font-normal flex items-start md:items-center gap-2 text-[#D1D1D1]">
              <span className="text-[18px] lg:text-[22px] text-[#38FF9F] p-2 bg-[#262525] rounded-full font-bold">
                <MdCheck />
              </span>{" "}
              14 day free trial, credit card required
            </li>
            <li className="text-[20px] lg:text-[22px] font-normal flex items-center gap-2 text-[#D1D1D1]">
              <span className="text-[18px] lg:text-[22px] text-[#38FF9F] p-2 bg-[#262525] rounded-full font-bold">
                <MdCheck />
              </span>{" "}
              10% annual discount
            </li>
          </section>
          {/* packages */}
          <section className="flex flex-col gap-2">
            {/* package 1 */}
            <div className="flex flex-col md:flex-row justify-between p-[25px] items-start bg-[#242323] rounded-[16px] min-h-[142px]">
              {/* right side */}
              <div className="flex flex-col">
                <span className="text-[18px] lg:text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                  Free
                </span>
                <span className="text-[32px] lg:text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                  $0 <span className="text-[18px] lg:text-[22px] font-normal tracking-wider">/mo</span>
                </span>
              </div>
              {/* left side */}
              <div className="text-[18px] lg:text-[20px] font-dm-sans mt-6 md:mt-0 xl:min-w-[142px]">
                <p>Social sets: 1</p>
                <p className="-mt-1">Users: 1</p>
              </div>
            </div>
            {/* package 2 */}
            <div className="flex flex-col md:flex-row justify-between p-[24px] lg:p-[30px] items-start bg-[#242323] rounded-[16px] min-h-[142px]">
              {/* right side */}
              <div className="flex flex-col">
                <span className="text-[18px] lg:text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                  Essentials
                </span>
                <span className="text-[32px] lg:text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                  $6 <span className="tracking-wider text-[18px] lg:text-[22px] font-normal">/mo</span>
                </span>
              </div>
              {/* left side */}
              <div className="text-[18px] lg:text-[20px] font-dm-sans mt-6 md:mt-0 xl:min-w-[142px] ">
                <div className="flex flex-row md:flex-col items-center gap-1 md:gap-0">
                <p className="">Social sets: 1</p>
                <p className="font-normal text-[18px] md:-mt-1">
                  (additional: $6)
                </p>
                </div>
                <p className="-mt-1">Users: 1</p>
              </div>
            </div>
            {/* package 3 */}
            <div className="flex flex-col md:flex-row justify-between p-[24px] lg:p-[30px] items-start bg-[#242323] rounded-[16px] min-h-[142px]">
              {/* right side */}
              <div className="flex flex-col">
                <span className="text-[18px] lg:text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                  Team
                </span>
                <span className="text-[32px] lg:text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                  $12 <span className="tracking-wider text-[18px] lg:text-[22px] font-normal">/mo</span>
                </span>
              </div>
              {/* left side */}
              <div className="text-[18px] lg:text-[20px] font-dm-sans mt-6 md:mt-0">
              <div className="flex flex-row md:flex-col items-center gap-1 md:gap-0">
                <p className=" ">Social sets: 1</p>
                <p className="font-normal text-[18px] md:-mt-1 ">
                  (additional: $12)
                </p>
                </div>
                <p className="-mt-1">Users: unlimited</p>
              </div>
            </div>
            {/* package 4 */}
            <div className="flex flex-col md:flex-row justify-between p-[24px] lg:p-[30px] items-start bg-[#242323] rounded-[16px] min-h-[142px]">
              {/* right side */}
              <div className="flex flex-col">
                <span className="text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                  Agency
                </span>
                <span className="text-[32px] lg:text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                  $120 <span className="tracking-wider text-[18px] lg:text-[22px] font-normal">/mo</span>
                </span>
              </div>
              {/* left side */}
              <div className="text-[18px] lg:text-[20px] font-dm-sans mt-6 md:mt-0">
              <div className="flex flex-row md:flex-col items-center gap-1 md:gap-0">
                <p className="">Social sets: 1</p>
                <p className="font-normal text-[18px] md:-mt-1">
                  (additional: $6)
                </p>
                </div>
                <p className="-mt-1">Users: unlimited</p>
              </div>
            </div>
          </section>
          {/* packages section end */}
        </div>
      </div>
    </div>
  );
};

export default PricingPlains;
