import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center md:items-end  px-[20px] md:px-[100px]">
      <img src="/images/logo.svg" alt="img icon" className="mt-1" />
      <p className="text-[10px] flex items-center gap-2 ">
        <span className="gradient_color">Powered By</span>
        <img src="/images/img2.png" alt="" className="w-[9px]" />
        <span className="gradient_color market_heading font-normal">
          Market Terminal
        </span>
      </p>
    </div>
  );
};

export default Header;
