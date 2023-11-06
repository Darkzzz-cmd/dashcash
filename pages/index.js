import Image from "next/image";
import Leaves from "../components/Leaves";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Products from "../components/Products";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#000000] text-white">
      {/* bg image */}
      <Image
        className="fixed w-full h-full object-cover opacity-[0.05] z-0 top-0 left-0"
        alt="background image"
        src={"/wallpaper.jpg"}
        draggable={false}
        width={728}
        height={409}
      />
      {/* leaves falling animation */}
      <Leaves />

      <div className="max-w-[1300px] w-full mx-auto z-[99] relative ">
        <Header />
        <Banner /> 
        <Products />
      </div>
    </div>
  );
}
