import React from "react";

const CompareAlternatives = () => {
  return (
    <div className="text-white pt-[120px]">
      <h1 className="text-[48px] font-bold text-center mb-[60px] font-plus-jakarta">
        Compare ALternatives
      </h1>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#1A1919] rounded-[20px] p-[44px] font-plus-jakarta">
          <h1 className="text-[34px] font-bold">
            Postiz - Compare Alternatives
          </h1>
          {/* compare */}
          <div className="mt-[40px]">
            <ul className="space-y-3 text-[22px] font-bold">
              <li>Postiz vs. Later</li>
              <li>Postiz vs. Hootsuite</li>
              <li>Postiz vs. Loomly</li>
              <li>Postiz vs. Planoly</li>
              <li>Postiz vs. Senible</li>
              <li>Postiz vs. Socialpilot</li>
              <li>Postiz vs. Sprout social</li>
              <li>Postiz vs. Iconosquare</li>
              <li>Postiz vs. Hopperhq</li>
            </ul>
          </div>
          
        </div>
        {/* right side */}
        <div className="bg-[#1A1919] rounded-[20px] p-[44px] font-plus-jakarta">
          <h1 className="text-[34px] font-bold ">
            Buffer - Compare Alternatives
          </h1>
          {/* compare */}
          <div className="mt-[40px]">
            <ul className="space-y-3 text-[22px] font-bold">
              <li>Buffer vs. Later</li>
              <li>Buffer vs. Hootsuite</li>
              <li>Buffer vs. Loomly</li>
              <li>Buffer vs. Planoly</li>
              <li>Buffer vs. Senible</li>
              <li>Buffer vs. Socialpilot</li>
              <li>Buffer vs. Sprout social</li>
              <li>Buffer vs. Iconosquare</li>
              <li>Buffer vs. Hopperhq</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CompareAlternatives;
