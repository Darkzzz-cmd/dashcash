import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="mt-[24px] px-4 w-full flex justify-center h-[200px]">
      <div className="">
        <img
          className="h-full object-contain w-full"
          alt="website banner"
          src="https://i.ibb.co/MgWMxZS/aniamted-signature.gif"
        />
      </div>
    </div>
  );
};

export default Banner;
