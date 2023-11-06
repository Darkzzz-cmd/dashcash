import React, { useEffect, useState } from "react";
import Card from "./Card";

const Products = () => {
  const [SearchQuery, setSearchQuery] = useState("");
  const [MainProducts, setMainProducts] = useState([]); // [All Products, Filtered Products
  const [Products, setProducts] = useState([]);
  const [ProductCategory, setProductCategory] = useState([]);
  const [SelectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // embed iframe
    // fetch data from api
    (async () => {
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
      setMainProducts(productData.data.listings);
      setProductCategory(productData.data.categories);

      // embed iframe
      embedIframe();
    })();
  }, []);

  // search query useEffect
  useEffect(() => {
    if (SearchQuery === "") {
      setProducts(MainProducts);
      return;
    }
    // filter products
    const filteredProducts = MainProducts?.filter((item) =>
      item?.product?.title?.toLowerCase().includes(SearchQuery.toLowerCase())
    );

    // set products
    setProducts(filteredProducts);
  }, [SearchQuery]);

  // handle caterggory
  const handleCategory = (category) => {
    const { listingIds } = category;

    // lisiting ids have ids of all products so we need to filter products
    // based on listing ids
    const filteredProducts = MainProducts?.filter((item) =>
      listingIds.includes(item?.id)
    );

    // set products
    setProducts(filteredProducts);
  };

  return (
    <div className="mt-[24px] h-full w-full px-4">
      {/* search bar with categories */}
      <div>
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search any product..."
          className="bg-[#121112] duration-200 focus:border-[#00ff38] focus:placeholder:text-[#00ff38] border border-[#353535] rounded px-4 p-2 w-full outline-none text-[12px] sm:text-[14px] sm:py-3 text-[#00ff38]"
        />
        {/* caregoreies */}
        {/* Category */}
        <div className="mt-4 flex items-row gap-3 w-full justify-center select-none flex-wrap">
          {ProductCategory?.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedCategory(item?.name);
                handleCategory(item);
              }}
              className={JoinClasses(
                SelectedCategory === item?.name
                  ? "text-[#00ff36] border-[#00ff36]"
                  : "hover:text-[#00ff36] hover:border-[#00ff36] text-gray-400 border-[#646464]",
                "cursor-pointer text-[12px]  bg-[#121112] w-fit rounded-[4px] border  p-1 px-3 duration-200 "
              )}
            >
              {item?.name}
            </div>
          ))}
        </div>
      </div>
      {/* Products */}
      <div className="mt-5 px-4 md:px-0">
        <div className="text-2xl text-gray-200">{SelectedCategory}</div>
        {/* line */}
        <div className="w-full border-t mt-3 border-gray-600"></div>
        {/* Showing products from here */}
        <div className="mt-5 w-full grid grid-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {Products?.map((item, index) => (
            <div key={index}>
              <Card {...item} />
            </div>
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
