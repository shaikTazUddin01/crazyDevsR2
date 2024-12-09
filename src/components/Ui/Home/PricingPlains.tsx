import { FcCheckmark } from "react-icons/fc";

const PricingPlains = () => {
  return (
    <div className="mt-[120px]">
      <h1 className="text-[48px] font-bold font-plus-jakarta pb-[60px] text-center">
        Pricing & Plans
      </h1>
      <div className="grid grid-cols-2 gap-3">
      {/* postiz Pricing */}
        <div className="bg-[#1A1919] rounded-[20px] p-[44px]">
          <h2 className="text-[34px] font-bold font-plus-jakarta">
            Postiz Pricing
          </h2>
          <section className="py-[40px] space-y-3">
            <li className="text-[22px] font-normal flex items-center gap-2">
              <span className="text-[16px] text-[#38FF9F] p-3 bg-[#262525] rounded-full font-bold">
                <FcCheckmark />
              </span>{" "}
              14 day free trial, credit card required
            </li>
            <li className="text-[22px] font-normal flex items-center gap-2">
              <span className="text-[16px] text-[#38FF9F] p-3 bg-[#262525] rounded-full font-bold">
                <FcCheckmark />
              </span>{" "}
              10% annual discount
            </li>
          </section>
          {/* packages */}
          <section className="flex flex-col gap-2">
            {/* package 1 */}
            <div className="flex justify-between p-[30px] items-start bg-[#242323] rounded-[16px] min-h-[135px]">
              {/* right side */}
              <div className="flex flex-col">
                <span className="text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                  Standart
                </span>
                <span className="text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                  $29 <span className="text-[22px] font-normal">/mo</span>
                </span>
              </div>
              {/* left side */}
              <div className="text-[20px] font-dm-sans">
                <p>Social sets: 1</p>
                <p className="-mt-1">Users: 1</p>
              </div>
            </div>
            {/* package 2 */}
            <div className="flex justify-between p-[30px] items-start bg-[#242323] rounded-[16px] min-h-[135px]">
              {/* right side */}
              <div className="flex flex-col">
                <span className="text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                  Team
                </span>
                <span className="text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                  $39 <span className="text-[22px] font-normal">/mo</span>
                </span>
              </div>
              {/* left side */}
              <div className="text-[20px] font-dm-sans">
                <p>Social sets: 1</p>
                <p className="-mt-1">Users: unlimited</p>
              </div>
            </div>
            {/* package 3 */}
            <div className="flex justify-between p-[30px] items-start bg-[#242323] rounded-[16px] min-h-[135px]">
              {/* right side */}
              <div className="flex flex-col">
                <span className="text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                  Pro
                </span>
                <span className="text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                  $49 <span className="text-[22px] font-normal">/mo</span>
                </span>
              </div>
              {/* left side */}
              <div className="text-[20px] font-dm-sans">
                <p>Social sets: 1</p>
                <p className="-mt-1">Users: unlimited</p>
              </div>
            </div>
            {/* package 4 */}
            <div className="flex justify-between p-[30px] items-start bg-[#242323] rounded-[16px] min-h-[135px]">
              {/* right side */}
              <div className="flex flex-col">
                <span className="text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                  Ultimate
                </span>
                <span className="text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                  $99 <span className="text-[22px] font-normal">/mo</span>
                </span>
              </div>
              {/* left side */}
              <div className="text-[20px] font-dm-sans">
                <p>Social sets: 1</p>
                <p className="-mt-1">Users: unlimited</p>
              </div>
            </div>
          </section>
          {/* packages section end */}
          {/*  ---on premise services----  */}
          <section className="mt-[44px]">
            <h1 className="font-plus-jakarta text-[22px] font-bold">
              On-premise service & Enterprise
            </h1>
            <div className="mt-6 flex flex-col gap-2">
              {/* package 1 */}
              <div className="flex justify-between p-[30px] items-start bg-gradient-to-r from-[#45007C] to-[#1C0033] rounded-[16px]">
                {/* right side */}
                <div className="flex flex-col">
                  <span className="text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                    Self service installation
                  </span>
                  <span className="text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                    $2000 <span className="text-[22px] font-normal">/one time</span>
                  </span>
                </div>
                {/* left side */}
                <div className="text-[20px] font-dm-sans">
                  <p>Social sets: 1</p>
                  <p className="-mt-1">Users: 1</p>
                </div>
              </div>
              {/* package 2 */}
              <div className="flex justify-between p-[30px] items-start bg-gradient-to-r from-[#6B007C] to-[#280033] rounded-[16px]">
                {/* right side */}
                <div className="flex flex-col">
                  <span className="text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                    Enterprise
                  </span>
                  <span className="text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                    Custom
                  </span>
                </div>
                {/* left side */}
                <div className="text-[20px] font-dm-sans">
                  <p>Social sets: 1</p>
                  <p className="-mt-1">Users: 1</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      {/* Buffer pricing */}
        <div className="bg-[#1A1919] rounded-[20px] p-[44px]">
          <h2 className="text-[34px] font-bold font-plus-jakarta">
            Buffer Pricing
          </h2>
          <section className="py-[40px] space-y-3">
            <li className="text-[22px] font-normal flex items-center gap-2">
              <span className="text-[16px] text-[#38FF9F] p-3 bg-[#262525] rounded-full font-bold">
                <FcCheckmark />
              </span>{" "}
              14 day free trial, credit card required
            </li>
            <li className="text-[22px] font-normal flex items-center gap-2">
              <span className="text-[16px] text-[#38FF9F] p-3 bg-[#262525] rounded-full font-bold">
                <FcCheckmark />
              </span>{" "}
              10% annual discount
            </li>
          </section>
          {/* packages */}
          <section className="flex flex-col gap-2">
            {/* package 1 */}
            <div className="flex justify-between p-[30px] items-start bg-[#242323] rounded-[16px] min-h-[135px]">
              {/* right side */}
              <div className="flex flex-col">
                <span className="text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                  Free
                </span>
                <span className="text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                  $0 <span className="text-[22px] font-normal">/mo</span>
                </span>
              </div>
              {/* left side */}
              <div className="text-[20px] font-dm-sans">
                <p>Social sets: 1</p>
                <p className="-mt-1">Users: 1</p>
              </div>
            </div>
            {/* package 2 */}
            <div className="flex justify-between p-[30px] items-start bg-[#242323] rounded-[16px] min-h-[135px]">
              {/* right side */}
              <div className="flex flex-col">
                <span className="text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                  Essentials
                </span>
                <span className="text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                  $6 <span className="text-[22px] font-normal">/mo</span>
                </span>
              </div>
              {/* left side */}
              <div className="text-[20px] font-dm-sans">
                <p className="">Social sets: 1</p>
                <p className="font-normal text-[18px] -mt-2">(additional: $6)</p>
                <p className="-mt-1">Users: 1</p>
              </div>
            </div>
            {/* package 3 */}
            <div className="flex justify-between p-[30px] items-start bg-[#242323] rounded-[16px] min-h-[135px]">
              {/* right side */}
              <div className="flex flex-col">
                <span className="text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                  Team
                </span>
                <span className="text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                  $12 <span className="text-[22px] font-normal">/mo</span>
                </span>
              </div>
              {/* left side */}
              <div className="text-[20px] font-dm-sans">
              <p className="">Social sets: 1</p>
                <p className="font-normal text-[18px] -mt-2">(additional: $12)</p>
                <p className="-mt-1">Users: unlimited</p>
              </div>
            </div>
            {/* package 4 */}
            <div className="flex justify-between p-[30px] items-start bg-[#242323] rounded-[16px] min-h-[135px]">
              {/* right side */}
              <div className="flex flex-col">
                <span className="text-[22px] font-medium font-plus-jakarta -mt-[8px] ">
                  Agency
                </span>
                <span className="text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
                  $120 <span className="text-[22px] font-normal">/mo</span>
                </span>
              </div>
              {/* left side */}
              <div className="text-[20px] font-dm-sans">
              <p className="">Social sets: 1</p>
                <p className="font-normal text-[18px] -mt-2">(additional: $6)</p>
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
