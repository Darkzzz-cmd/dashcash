import React from "react";
import Image from "next/image";

const Card = ({ path, product, minPriceDetails }) => {
  const productRef = React.useRef(null);

  return (
    <div
      draggable="false"
      className="h-full bg-[#121112] p-3 group border rounded-md border-[#282c34]  sm:hover:border-[#00ff33] flex flex-col gap-y-2 select-none justify-between pointer-events-auto duration-200"
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
          <div className="text-[#919090] sm:group-hover:text-[#00ff33] text-sm font-semibold duration-200">{`Starting @ $${minPriceDetails.amount}`}</div>
          <button
            ref={productRef}
            onClick={() => embedSellpass(productRef.current)}
            className="p-1.5 px-3 sm:group-hover:border-[#00ff33] sm:group-hover:from-[#4c9155] sm:group-hover:to-[#00ff33f8] bg-gradient-to-r border border-[#ffffff38] from-[#575656] to-[#2b2a2a] rounded-lg text-sm duration-200"
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

const embedSellpass = (elementRef) => {
  const modal = document.createElement("div");
  const backdrop = document.createElement("div");
  const spinner = document.createElement("div");
  const iframe = document.createElement("iframe");
  const iframeWrapper = document.createElement("div");
  modal.classList.add("sellpass-modal");
  iframeWrapper.classList.add("sellpass-iframe-wrapper");
  iframe.classList.add("sellpass-iframe");
  backdrop.classList.add("sellpass-iframe-backdrop");
  spinner.classList.add("sellpass-spinner");
  spinner.innerHTML = "<div></div><div></div><div></div><div></div>";
  // element
  const productId = elementRef.dataset.sellpassProductPath;
  const shopHost = elementRef.dataset.sellpassDomain;
  modal.appendChild(backdrop);
  modal.appendChild(iframeWrapper);
  // modal.appendChild(styleNode);

  iframe.setAttribute("src", `https://${shopHost}/embed/products/${productId}`);
  iframeWrapper.appendChild(iframe);
  modal.appendChild(spinner);
  document.body.appendChild(modal);
  iframe.onload = () => {
    setTimeout(() => {
      modal.removeChild(spinner);
      iframeWrapper.classList.add("show");
    }, 1000);
  };
  // close modal
  window.addEventListener("message", (event) => {
    if (event.data === "close-embed") {
      // find document with class .sellpass-modal and remove it from node
      if (modal && document.body.contains(modal)) {
        document?.body?.removeChild(modal);
      }
      iframeWrapper.classList.remove("show");
    }
  });
};
