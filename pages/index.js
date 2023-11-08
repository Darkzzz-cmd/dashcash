import Header from "../components/Header";
import Banner from "../components/Banner";
import Products from "../components/Products";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#000000] text-white">
      <div className="stars-background small-stars"></div>
      <div className="stars-background medium-stars"></div>
      <div className="stars-background big-stars"></div>
      <div className="max-w-[1300px] w-full mx-auto z-[99] relative ">
        <Header />
        <Banner />
        <Products />
      </div>
      <Footer />
    </div>
  );
}
