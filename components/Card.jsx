import React from "react";
import Image from "next/image";

const Card = ({ path, product, minPriceDetails }) => {
  return (
    <div
      draggable="false"
      className="h-full bg-[#121112] p-3 group border rounded-md border-[#282c34] hover:border-[#00ff33] flex flex-col gap-y-2 select-none justify-between pointer-events-auto duration-200"
    >
      {/* Product Image */}
      <div className="w-full h-[160px] border-4 border-[#00ff33] overflow-hidden">
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
      <div className="flex flex-col gap-y-4 items-center">
        {/* Product Title */}
        <div className="text-lg w-full product-title text-center font-semibold">
          {product?.title}
        </div>
        {/* price and buy Button */}
        <div className="flex w-full flex-row items-center justify-between">
          <div className="text-[#919090] text-sm ">{`Starting @ ${minPriceDetails.amount} $`}</div>
          <button
            // className="p-1.5 px-3 bg-gradient-to-r from-[#575656] to-[#2b2a2a] text-sm group-hover:from-[#00ff33] group-hover:to-[#357c3a] duration-100"
            className="p-1.5 px-3 group-hover:bg-[#00ff33] bg-[#575656] group-hover:text-[#121112] text-white font-medium text-sm rounded-sm duration-200"
            data-sellpass-product-path={`${path}`}
            data-sellpass-domain="dashncash.sellpass.io"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
