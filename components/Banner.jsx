import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="mt-[24px] px-4 w-full flex justify-center sm:h-[200px]">
      <div className="border-4 border-[#00ff33]">
        <img
          className="h-full object-contain w-full"
          alt="website banner"
          src="/banner.gif"
        />
      </div>
    </div>
  );
};

export default Banner;
