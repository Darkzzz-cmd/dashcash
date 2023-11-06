import React from "react";
import Image from "next/image";

const Card = ({ path, product }) => {
  return (
    <div
      draggable="false"
      className="p-4 h-full rounded-lg bg-[#121112] border border-[#282c34] hover:border-[#93969e] flex flex-col gap-y-4 select-none justify-between pointer-events-auto"
    >
      {/* Product Image */}
      <div className="w-full h-[140px] ">
        <img
          className="w-full h-full object-cover"
          src={
            product?.thumbnailCfImageId
              ? `https://imagedelivery.net/${product?.thumbnailCfImageId}/productCard`
              : "/noimage.png"
          }
          draggable="false"
          alt="Product Image"
        />
      </div>
      {/* Product Title */}
      <div className="text-lg product-title">{product?.title}</div>
      {/* price and buy Button */}
      <div className="flex w-full flex-row items-center justify-between">
        <div className="text-[#919090]">{`Starting @ 0.00 $`}</div>
        <button
          className="p-1.5 px-3 bg-gradient-to-r border border-[#ffffff38] from-[#575656] to-[#2b2a2a] rounded-lg text-sm"
          data-sellpass-product-path={`${path}`}
          data-sellpass-domain="dashncash.sellpass.io"
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Card;
