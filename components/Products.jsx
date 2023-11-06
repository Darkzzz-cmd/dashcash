import React, { useEffect, useState } from "react";
import Card from "./Card";

const Products = () => {
  const [SearchQuery, setSearchQuery] = useState("");
  const [Products, setProducts] = useState([]);
  const [ProductCategory, setProductCategory] = useState([]);
  const [SelectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    (async () => {
      // fetch data from api
      const productResponse = await fetch(
        "https://api.sellpass.io/v2/public/shops/dashncash.sellpass.io/listings",
        {
          method: "GET",
        }
      );

      // convert response to json
      const productData = await productResponse.json();

      // set products
      setProducts(productData.data.listings);
      setProductCategory(productData.data.categories);
    })();
  }, []);

  console.log(Products);

  return (
    <div className="mt-[24px] h-full w-full px-4">
      {/* search bar with categories */}
      <div>
        <input
          placeholder="Search any product..."
          className="bg-[#121112] duration-200 focus:border-[#00ff38] focus:placeholder:text-[#00ff38] border border-[#353535] rounded-md p-2 w-full outline-none text-[12px] sm:text-[14px] sm:py-3 text-[#00ff38]"
        />
        {/* caregoreies */}
        {/* Category */}
        <div className="mt-4 flex items-row gap-3 w-full justify-center select-none flex-wrap">
          {ProductCategory?.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedCategory(item?.name)}
              className={JoinClasses(
                item?.name === SelectedCategory
                  ? " text-[#00ff36]  border-[#00ff36]"
                  : "hover:text-[#00ff36] hover:border-[#00ff36]",
                "cursor-pointer text-[12px] text-gray-400 bg-[#121112] w-fit rounded-[4px] border border-[#646464] p-1 px-3 duration-200 "
              )}
            >
              {item?.name}
            </div>
          ))}
        </div>
      </div>
      {/* Products */}
      <div className="mt-5 px-4 md:px-0">
        <button
          className="p-1.5 px-3 bg-gradient-to-r border border-[#ffffff38] from-[#575656] to-[#2b2a2a] rounded-lg text-sm"
          data-sellpass-product-path="Safeway-Rewards"
          data-sellpass-domain="dashncash.sellpass.io"
        >
          Purchase
        </button>
        <div className="text-2xl text-gray-200">{SelectedCategory}</div>
        {/* line */}
        <div className="w-full border-t mt-3 border-gray-600"></div>
        {/* Showing products from here */}
        <div className="mt-5 w-full grid grid-row grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          {Products?.map((item, index) => (
            <button
              key={index}
              className="p-1.5 px-3 bg-gradient-to-r border border-[#ffffff38] from-[#575656] to-[#2b2a2a] rounded-lg text-sm"
              data-sellpass-product-path={item?.path}
              data-sellpass-domain="dashncash.sellpass.io"
            >
              Purchase
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

// join classes
const JoinClasses = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
