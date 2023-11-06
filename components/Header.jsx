import Image from "next/image";
import React from "react";
import { TELEGRAM_ICON } from "./SVG";

const Header = () => {
  return (
    <div className="py-3 px-4 flex w-full justify-between items-center">
      {/* Image Logo */}
      <div className="flex flex-row items-center gap-2">
        <img
          alt="Website Logo Cash & Dash"
          src="https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/912c2582-72cf-4c43-b02e-d042be332900/1600X1200"
          className="w-[55px] h-[55px]"
          draggable="false"
        ></img>
        <div>
          <div className="text-xl font-semibold">CASH</div>
          <div className="text-xl font-semibold"> & DASH</div>
        </div>
      </div>
      {/* Join Telegram  */}
      <div className="py-[8px] px-4 bg-black border flex items-center justify-center rounded-md h-fit gap-2 cursor-pointer hover:border-[#27ff29] hover:text-[#27ff29] duration-200">
        <div className="w-[24px] h-[24px]">{TELEGRAM_ICON()}</div>
        <div className="text-sm">Telegram</div>
      </div>
    </div>
  );
};

export default Header;
