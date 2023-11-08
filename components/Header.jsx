import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-3 px-4 flex w-full justify-between items-center">
      {/* Image Logo */}
      <div className="flex flex-row items-center gap-2">
        <img
          alt="Website Logo Cash & Dash"
          src="https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/912c2582-72cf-4c43-b02e-d042be332900/1600X1200"
          className="w-[55px] h-[55px] rotate_logo"
          draggable="false"
        ></img>
        <div>
          <div className="text-xl font-semibold">DASH</div>
          <div className="text-xl font-semibold"> & CASH</div>
        </div>
      </div>
      {/* Join Telegram  */}
      <div className="flex flex-row items-center">
        <div className="hidden sm:flex py-[8px] px-4 border border-transparent flex items-center justify-center rounded-md h-fit gap-2 cursor-pointer hover:border-[#27ff29] hover:text-[#27ff29] duration-200">
          <div className="text-sm">Home</div>
        </div>
        <Link href="https://t.me/dcashsupport">
          <div className="py-[8px] px-4 border border-transparent flex items-center justify-center rounded-md h-fit gap-2 cursor-pointer hover:border-[#27ff29] hover:text-[#27ff29] duration-200">
            <div className="text-sm">Support</div>
          </div>
        </Link>
        <Link href="https://dashncash.sellpass.io/customer/login">
          <div className="py-[8px] px-4 border border-transparent flex items-center justify-center rounded-md h-fit gap-2 cursor-pointer hover:border-[#27ff29] hover:text-[#27ff29] duration-200">
            <span className="text-sm hidden sm:flex">Customer</span>
            <span className="text-sm ">Login</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
