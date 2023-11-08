import React, { useEffect, useState } from "react";
import Card from "./Card";

const Products = () => {
  const [SearchQuery, setSearchQuery] = useState("");
  const [MainProducts, setMainProducts] = useState([]); // [All Products, Filtered Products
  const [Products, setProducts] = useState([]);
  const [ProductCategory, setProductCategory] = useState([]);
  const [SelectedCategory, setSelectedCategory] = useState("All");
  const [SearchedProducts, setSearchedProducts] = useState(null);
  const [isSearchBarModalOpen, setIsSearchBarModalOpen] = useState(false);

  // useEffect(() =>
  //   // embed iframe
  //   {
  //     embedIframe();
  //   }, [MainProducts, SearchQuery, SelectedCategory]);

  useEffect(() => {
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
    })();
  }, []);

  // search query useEffect
  useEffect(() => {
    if (SearchQuery === "") {
      setProducts(MainProducts);
      setSearchedProducts(null);
      return;
    }
    if (SearchQuery === " ") {
      setProducts(MainProducts);
      setSearchedProducts(null);
      return;
    }
    // filter products
    const filteredProducts = MainProducts?.filter((item) =>
      item?.product?.title?.toLowerCase().includes(SearchQuery.toLowerCase())
    );

    // set products
    setProducts(filteredProducts);
    setSearchedProducts(filteredProducts);
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
        {/* search bar */}
        <div className="relative">
          <input
            value={SearchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsSearchBarModalOpen(true);
            }}
            placeholder="Search any product..."
            className="bg-[#121112] duration-200 focus:border-[#00ff38] focus:placeholder:text-[#00ff38] border border-[#353535] px-4 p-2 w-full outline-none text-[12px] sm:text-[14px] sm:py-3 text-[#00ff38]"
          />
          {/* showing below items of searched */}
          <div
            className={JoinClasses(
              isSearchBarModalOpen ? "flex flex-col" : "hidden",
              "w-full absolute bg-[#121112e3] border-t border-l border-r border-[#353535] z-10"
            )}
          >
            {SearchedProducts?.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setSearchQuery(item?.product?.title);
                  setIsSearchBarModalOpen(false);
                }}
                className="px-[14px] py-2 text-sm cursor-pointer border-b-[1px] border-[#353535] hover:bg-[#00ff3781]"
              >
                {item?.product?.title}
              </div>
            ))}
          </div>
        </div>
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
      <div className="mt-5 md:px-0">
        <div className="text-2xl text-gray-200">{SelectedCategory}</div>
        {/* line */}
        <div className="w-full border-t mt-3 border-gray-600"></div>
        {/* Showing products from here */}
        <div className="mt-5 w-full grid grid-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {Products?.map((item, index) => (
            <Card key={item?.id} {...item} />
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

// const embedIframe = () => {
//   const buttons = document.querySelectorAll("[data-sellpass-product-path]");
//   const modal = document.createElement("div");
//   const backdrop = document.createElement("div");
//   const spinner = document.createElement("div");
//   // const styleNode = document.createElement("style");
//   const iframe = document.createElement("iframe");
//   const iframeWrapper = document.createElement("div");
//   // styleNode.innerText = sellpassCss;
//   modal.classList.add("sellpass-modal");
//   iframeWrapper.classList.add("sellpass-iframe-wrapper");
//   iframe.classList.add("sellpass-iframe");
//   backdrop.classList.add("sellpass-iframe-backdrop");
//   spinner.classList.add("sellpass-spinner");
//   spinner.innerHTML = "<div></div><div></div><div></div><div></div>";
//   buttons.forEach((elem) => {
//     const productId = elem.dataset.sellpassProductPath;
//     const shopHost = elem.dataset.sellpassDomain;
//     modal.appendChild(backdrop);
//     modal.appendChild(iframeWrapper);
//     // modal.appendChild(styleNode);
//     elem.addEventListener("click", () => {
//       iframe.setAttribute(
//         "src",
//         `https://${shopHost}/embed/products/${productId}`
//       );
//       iframeWrapper.appendChild(iframe);
//       modal.appendChild(spinner);
//       modal.style.display = "block";
//       document.body.appendChild(modal);
//       iframe.onload = () => {
//         setTimeout(() => {
//           modal.removeChild(spinner);
//           iframeWrapper.classList.add("show");
//         }, 1000);
//       };
//     });
//   });
//   window.addEventListener("message", (event) => {
//     if (event.data === "close-embed") {
//       // document.body.removeChild(modal);
//       modal.style.display = "none";
//       iframeWrapper.classList.remove("show");
//     }
//   });
// };
