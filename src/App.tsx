import ProductCode from "@/components/layout/productCode";
import WhyChooseUs from "@/components/layout/whyChooseUs";
import TextPrice from "@/components/layout/textPrice";
import Timer from "@/components/layout/timer";
import { useState } from "react";
import ProductDetails from "@/components/layout/productDetails";
import SizeGuide from "@/components/layout/sizeGuide";
import Checkout from "@/components/layout/checkout";
import OrderSummary from "@/components/layout/orderSummary";
import Footer from "@/components/layout/footer";

const images = ["/images/lp-1.jpg", "/images/lp-2.jpg", "/images/lp-3.jpg"];

export default function App() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="">
        <div className="bg-[#334E52]">
          <h1 className="p-4 text-white text-3xl font-semibold text-center">
            আপনার ছোট্ট সোনামণির জন্যে প্রিমিয়াম ১০০% স্যাফরান কটন ফেব্রিক্স এর
            তৈরি সেট (টপ এবং প্লাজ্জু) বিশেষ ডিসকাউন্ট অফার এ!
          </h1>
        </div>

        {/* Image Carousel */}
        <div className="relative p-4 bg-blue-100">
          <img
            src={images[current]}
            alt={`Product ${current + 1}`}
            className="w-full h-[850px] object-cover rounded-xl"
          />

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full text-2xl"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full text-2xl"
          >
            ›
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-[#334E52]">
          <h2 className="p-4 text-white text-3xl font-semibold text-center">
            আমাদের সকল প্রোডাক্ট গুলো এখন পেয়ে যাচ্ছেন বর্তমানে ২৫% ডিসকাউন্ট
            প্রাইজ এ ।
          </h2>
        </div>
        <div>
          <Timer />
        </div>
        <div className="flex justify-center my-5 ">
          <button className="py-2 px-8 text-white font-semibold text-[22px] bg-blue-300 rounded-[4px]">
            অর্ডার করুন
          </button>
        </div>

        <div className="my-6">
          <TextPrice />
        </div>

        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
          {/* Description */}
          <h4 className=" text-center font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-7 sm:leading-8 md:leading-9 mt-10 sm:mt-12 mx-auto md:mt-16 max-w-5xl">
            ১০০% সুতি এবং সুদক্ষ কারিগর দ্বারা তৈরি তাই আপনার ছোট্ট সোনামণির
            জন্য নিশ্চিন্তে অর্ডার করতে পারেন। 💖 গরমের জন্য একদম পারফেক্ট এবং
            খুবই আরামদায়ক ☀️
          </h4>
          <ProductCode />
        </div>

        <div>
          <WhyChooseUs />
        </div>
        <div>
          <ProductDetails />
        </div>
        <div>
          <SizeGuide />
        </div>

        <div>
          <Checkout />
        </div>
        <div>
          <OrderSummary />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
