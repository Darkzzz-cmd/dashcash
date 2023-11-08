import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full pt-20 z-[9999] relative">
      <div className="w-full bg-black">
        <div className="max-w-[1300px] w-full mx-auto  relative">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#00ff33] to-transparent"></div>
          <div className="w-full flex flex-col sm:flex-row items-center justify-between px-5 py-[20px] gap-4">
            {/* copyright text div */}
            <div>
              <p className="text-white text-sm">
                DASHNCASH © 2023 All Rights Reserved
              </p>
            </div>
            <div className="text-white flex flex-row items-center gap-2">
              <span>{`Made with 💖 by `}</span>
              <Link href="https://legions.dev">
                <span className="text-[#00ff33] font-bold">{`LegionDev`}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
