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
import CustomerReview from "@/components/layout/customerReview";

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
    <div className="w-full max-w-6xl mx-auto overflow-hidden">
      <div className="w-full">
        {/* Hero Heading */}
        <div className="bg-[#334E52] px-4 py-4 sm:px-6 sm:py-5 md:px-8 lg:px-10">
          <h1 className="text-center text-lg leading-7 font-semibold text-white sm:text-2xl sm:leading-9 md:text-3xl md:leading-10 lg:text-3xl lg:leading-[1.5]">
            আপনার ছোট্ট সোনামণির জন্যে প্রিমিয়াম ১০০% স্যাফরান কটন ফেব্রিক্স এর
            তৈরি সেট (টপ এবং প্লাজু) বিশেষ ডিসকাউন্ট অফার এ!
          </h1>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full bg-blue-100 p-2 sm:p-3 md:p-4">
          <img
            src={images[current]}
            alt={`Product ${current + 1}`}
            className="h-[300px] w-full rounded-lg object-cover sm:h-[450px] sm:rounded-xl md:h-[600px] lg:h-[850px]"
          />

          {/* Previous Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-xl text-white transition hover:bg-black/70 sm:left-6 sm:h-10 sm:w-10 sm:text-2xl md:left-8"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-xl text-white transition hover:bg-black/70 sm:right-6 sm:h-10 sm:w-10 sm:text-2xl md:right-8"
          >
            ›
          </button>

          {/* Dots */}
          <div className="mt-3 flex justify-center gap-2 sm:mt-4">
            {images.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all sm:h-3 sm:w-3 ${
                  current === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Discount Heading */}
        <div className="bg-[#334E52] px-4 py-4 sm:px-6 sm:py-5 md:px-8 lg:px-10">
          <h2 className="text-center text-lg leading-7 font-semibold text-white sm:text-2xl sm:leading-9 md:text-3xl md:leading-10">
            আমাদের সকল প্রোডাক্ট গুলো এখন পেয়ে যাচ্ছেন বর্তমানে ২৫% ডিসকাউন্ট
            প্রাইজ এ ।
          </h2>
        </div>

        {/* Timer */}
        <div className="w-full">
          <Timer />
        </div>

        {/* Order Button */}
        <div className="my-5 flex justify-center px-4 sm:my-6">
          <button
            type="button"
            className="w-full max-w-xs rounded-md bg-[#a86b20] px-6 py-2.5 text-lg font-semibold text-white transition hover:bg-[#8b5819] sm:w-auto sm:px-8 sm:text-[22px]"
          >
            অর্ডার করুন
          </button>
        </div>

        {/* Price */}
        <div className="my-5 px-4 sm:my-6 sm:px-6 md:px-8">
          <TextPrice />
        </div>

        {/* Description */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
          <h4 className="mx-auto mt-8 max-w-5xl text-center text-[15px] font-semibold leading-7 sm:mt-10 sm:text-[18px] sm:leading-8 md:mt-12 md:text-[20px] md:leading-9 lg:mt-16 lg:text-[22px]">
            ১০০% সুতি এবং সুদক্ষ কারিগর দ্বারা তৈরি তাই আপনার ছোট্ট সোনামণির
            জন্য নিশ্চিন্তে অর্ডার করতে পারেন। 💖 গরমের জন্য একদম পারফেক্ট এবং
            খুবই আরামদায়ক ☀️
          </h4>

          {/* Product Code */}
          <ProductCode />
        </div>

        {/* Why Choose Us */}
        <div className="w-full">
          <WhyChooseUs />
        </div>

        {/* Product Details */}
        <div className="w-full">
          <ProductDetails />
        </div>

        <div className="w-full">
          <CustomerReview />
        </div>

        {/* Size Guide */}
        <div className="w-full">
          <SizeGuide />
        </div>

        {/* Checkout */}
        <div className="w-full">
          <Checkout />
        </div>

        {/* Order Summary */}
        <div className="w-full">
          <OrderSummary />
        </div>

        {/* Footer */}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
