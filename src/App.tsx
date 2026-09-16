import { useState } from "react";

import ProductCode from "@/components/layout/productCode";
import WhyChooseUs from "@/components/layout/whyChooseUs";
import TextPrice from "@/components/layout/textPrice";
import Timer from "@/components/layout/timer";
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
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-slate-900">
      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div className="mx-auto w-full max-w-[1440px] overflow-hidden bg-white">
        {/* =========================================================
            HERO SECTION
        ========================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#172554] to-[#1d4ed8]">
          {/* Decorative Elements */}
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl sm:h-80 sm:w-80" />

          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl sm:h-96 sm:w-96" />

          <div className="relative px-4 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-20 lg:py-16">
            {/* Badge */}
            <div className="mb-5 flex justify-center">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-100 backdrop-blur-md sm:px-5 sm:py-2 sm:text-sm">
                ✨ PREMIUM COLLECTION
              </span>
            </div>

            {/* Heading */}
            <h1 className="mx-auto max-w-5xl text-center text-2xl font-bold leading-[1.5] text-white sm:text-3xl md:text-4xl lg:text-5xl">
              আপনার ছোট্ট সোনামণির জন্য
              <span className="text-cyan-300"> প্রিমিয়াম ১০০% জাফরান </span>
              কটন ফেব্রিক্সের তৈরি সুন্দর সেট
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-200 sm:text-base sm:leading-8 md:text-lg">
              টপ এবং প্লাজু — আরামদায়ক, স্টাইলিশ ও মানসম্মত পোশাক। বিশেষ
              ডিসকাউন্ট অফারে এখনই অর্ডার করুন।
            </p>

            {/* Offer */}
            <div className="mt-7 flex justify-center">
              <div className="rounded-xl border border-blue-200/20 bg-white px-5 py-2.5 text-center shadow-lg sm:px-7">
                <p className="text-sm font-bold text-blue-700 sm:text-base">
                  🎁 বিশেষ অফার — ২৫% ডিসকাউন্ট
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PRODUCT CAROUSEL
        ========================================================= */}
        <section className="bg-slate-300 px-3 py-3 sm:px-5 sm:py-5 md:px-7">
          <div className="relative overflow-hidden rounded-2xl bg-gray-400 shadow-xl sm:rounded-3xl">
            {/* Product Image */}
            <img
              src={images[current]}
              alt={`Product ${current + 1}`}
              className="h-[320px] w-full object-cover transition-all duration-500 sm:h-[480px] md:h-[620px] lg:h-[780px] xl:h-[850px]"
            />

            {/* Image Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-blue-950/5" />

            {/* Previous Button */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="
        absolute
        left-3
        top-1/2
        flex
        h-9
        w-9
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        border
        border-white/30
        bg-slate-950/60
        text-xl
        text-white
        shadow-lg
        backdrop-blur-sm
        transition
        hover:bg-blue-600
        sm:left-5
        sm:h-11
        sm:w-11
        sm:text-2xl
        md:left-7
      "
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="
        absolute
        right-3
        top-1/2
        flex
        h-9
        w-9
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        border
        border-white/30
        bg-slate-950/60
        text-xl
        text-white
        shadow-lg
        backdrop-blur-sm
        transition
        hover:bg-blue-600
        sm:right-5
        sm:h-11
        sm:w-11
        sm:text-2xl
        md:right-7
      "
            >
              ›
            </button>

            {/* Slide Counter */}
            <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:bottom-5 sm:left-5 sm:text-sm">
              {current + 1} / {images.length}
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-5">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`
            h-2
            rounded-full
            transition-all
            duration-300
            sm:h-2.5
            ${
              current === index
                ? "w-7 bg-blue-500"
                : "w-2 bg-white/60 hover:bg-white"
            }
          `}
                />
              ))}
            </div>
          </div>
        </section>
        {/* =========================================================
            OFFER SECTION
        ========================================================= */}
        <section className="border-b border-slate-200 bg-white px-4 py-9 sm:px-6 sm:py-12 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-700 sm:text-sm">
              Limited Time Offer
            </span>

            <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
              বর্তমানে পাচ্ছেন
              <span className="mx-2 text-blue-600">২৫% ডিসকাউন্ট</span>
              প্রাইজে
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              অফারটি সীমিত সময়ের জন্য। আপনার পছন্দের সেটটি এখনই অর্ডার করুন।
            </p>
          </div>
        </section>

        {/* =========================================================
            TIMER
        ========================================================= */}
        <section className="bg-slate-50 px-3 py-8 sm:px-6 sm:py-10">
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-7">
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="text-lg">⏳</span>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 sm:text-sm">
                অফার শেষ হতে বাকি
              </p>
            </div>

            <Timer />
          </div>
        </section>

        {/* =========================================================
            ORDER BUTTON
        ========================================================= */}
        <section className="bg-slate-50 px-4 pb-10 sm:px-6 sm:pb-12">
          <div className="flex justify-center">
            <button
              type="button"
              className="
                w-full
                max-w-sm
                rounded-xl
                bg-blue-500
                px-8
                py-3.5
                text-base
                font-bold
                text-white
                shadow-lg
                shadow-blue-600/20
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-blue-700
                hover:shadow-xl
                sm:py-4
                sm:text-lg
              "
            >
              🛒 এখনই অর্ডার করুন
            </button>
          </div>
        </section>

        {/* =========================================================
            PRICE SECTION
        ========================================================= */}
        <section className="border-t border-slate-200 bg-white px-4 py-9 sm:px-6 sm:py-12 md:px-10">
          <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:rounded-3xl sm:p-6 md:p-8">
            <TextPrice />
          </div>
        </section>

        {/* =========================================================
            PRODUCT DESCRIPTION
        ========================================================= */}
        <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700 sm:text-sm">
                Premium Quality
              </span>

              <h3 className="mt-4 text-xl font-bold leading-8 text-slate-900 sm:text-2xl md:text-3xl md:leading-10">
                আপনার সোনামণির আরাম ও সৌন্দর্যের কথা মাথায় রেখেই তৈরি ❤️
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
                ১০০% সুতি এবং সুদক্ষ কারিগর দ্বারা তৈরি। গরমের জন্য একদম
                পারফেক্ট এবং খুবই আরামদায়ক। তাই আপনার ছোট্ট সোনামণির জন্য
                নিশ্চিন্তে অর্ডার করতে পারেন। ☀️
              </p>
            </div>

            {/* Product Code Card */}
            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:mt-12 sm:rounded-3xl sm:p-6 md:p-8">
              <ProductCode />
            </div>
          </div>
        </section>

        {/* =========================================================
            WHY CHOOSE US
        ========================================================= */}
        <section className="border-y border-slate-200 bg-slate-50 py-2 sm:py-4">
          <WhyChooseUs />
        </section>

        {/* =========================================================
            PRODUCT DETAILS
        ========================================================= */}
        <section className="bg-white py-2 sm:py-4">
          <ProductDetails />
        </section>

        {/* =========================================================
            CUSTOMER REVIEWS
        ========================================================= */}
        <section className="border-y border-slate-200 bg-slate-50 py-2 sm:py-4">
          <CustomerReview />
        </section>

        {/* =========================================================
            SIZE GUIDE
        ========================================================= */}
        <section className="bg-white py-2 sm:py-4">
          <SizeGuide />
        </section>

        {/* =========================================================
            CHECKOUT
        ========================================================= */}
        <section className="border-y border-slate-200 bg-slate-50 py-2 sm:py-4">
          <Checkout />
        </section>

        {/* =========================================================
            ORDER SUMMARY
        ========================================================= */}
        <section className="bg-white py-2 sm:py-4">
          <OrderSummary />
        </section>

        {/* =========================================================
            FOOTER
        ========================================================= */}
        <footer className="bg-slate-950">
          <Footer />
        </footer>
      </div>

      {/* =========================================================
          MOBILE STICKY ORDER BUTTON
      ========================================================= */}
      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-slate-200 bg-white/95 p-2.5 shadow-[0_-5px_25px_rgba(15,23,42,0.12)] backdrop-blur-md sm:hidden">
        <button
          type="button"
          className="
            w-full
            rounded-lg
            bg-blue-600
            py-3
            text-base
            font-bold
            text-white
            shadow-md
            transition
            active:scale-[0.98]
            hover:bg-blue-700
          "
        >
          🛒 এখনই অর্ডার করুন
        </button>
      </div>
    </main>
  );
}
