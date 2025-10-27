import React from "react";
import { BsUnlockFill } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="md:min-h-[900px] w-full relative overflow-hidden main_section_bg">
      <div className="max-w-[1440px] z-50 text-center mx-auto w-full flex flex-col justify-center items-center  gap-[20px] md:gap-[50px] py-[30px]  px-[20px] md:px-[100px]">
        <div className="flex flex-col items-center md:items-end">
          <div className="flex justify-center items-center gap-3">
            <img
              src="/images/img1.png"
              width={46}
              height={30}
              alt="img icon"
              className="mt-1"
            />
            <h3 className="text-2xl md:text-3xl gradient_color main_heading_font">
              Breakouts & Setups
            </h3>
          </div>
          <p className="text-[10px] flex items-center gap-2 ">
            <span className="gradient_color">Powered By</span>
            <img src="/images/img2.png" alt="" className="w-[9px]" />
            <span className="gradient_color market_heading font-normal">
              Market Terminal
            </span>
          </p>
        </div>
        <h1 className="inter font-bold text-2xl md:text-[50px] ">
          3 Free
          <span className="text-[#008000] ml-3">
            <span className="underline">Breakouts</span> 🟢
          </span>
        </h1>
        <div className="flex justify-center md:justify-end items-center w-full ">
          <div className="w-full md:w-[585px] flex flex-col items-start gap-4 md:gap-[28px] md:mt-[50px]">
            <h2 className="text-base md:text-xl font-semibold inter text-[#000000]">
              These 3 Stocks Just Broke Out.
            </h2>
            <p className="text-base font-medium inter text-[#000000] capitalize">
              Just tell us Your email... 👇
            </p>
            <div className="flex flex-col justify-center sm:flex-row gap-3 md:gap-5 items-start  w-full">
              <p className="inter font-medium text-base text-[#000000] sm:mt-3">
                Email
              </p>
              <div className="flex flex-col gap-3 md:gap-5 w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="email@example.com"
                  className="w-full sm:w-[365px] h-[48px] rounded-[10px] pl-4 border-none outline-none"
                />
                <button className="flex justify-center items-center gap-[14px] w-full sm:w-[364px] h-[48px] rounded-[10px] text-white bg-[#008000] button_shadow">
                  <BsUnlockFill />
                  Get 3 Free Breakouts
                </button>
              </div>
            </div>
            <h2 className="text-base md:text-xl font-semibold inter text-[#000000]">
              Inside You’ll Get:
            </h2>
            <div className="flex flex-col gap-[10px] ml-[20px] text-left">
              <p className="flex items-center gap-[13px] justify-start ">
                <img src="/images/tick.png" alt="" />
                <span className="text-sm sm:text-lg text-[#343434] capitalize ">
                  3 Buyable breakouts
                </span>
              </p>
              <p className="flex items-center gap-[13px] justify-start">
                <img src="/images/tick.png" alt="" />
                <span className="text-sm sm:text-lg text-[#343434] capitalize ">
                  Save hours —
                  <span className="underline">
                    we’ve already done the research for you
                  </span>
                </span>
              </p>
              <p className="flex items-center gap-[13px] justify-start">
               <img src="/images/tick.png" alt="" />
                <span className="text-sm sm:text-lg text-[#343434] capitalize ">
                  <span className="underline">Get it FREE</span> — no catch,
                  just Actionable Stocks To Buy
                </span>
              </p>
            </div>
            <p className="text-xs text-[#000000] text-left">
              By entering your email, you are joining our free community. We
              respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
