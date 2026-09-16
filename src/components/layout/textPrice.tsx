import { useState } from "react";

const offers = [
  {
    text: "মায়াবতী ফ্লোরাল টপ + প্লাজু",
    subText: "১ সেটের কম্বো",
    price: "১০৫০",
  },
  {
    text: "মায়াবতী ফ্লোরাল টপ + প্লাজু",
    subText: "২ সেটের কম্বো",
    price: "১৯৫০",
  },
  {
    text: "মায়াবতী ফ্লোরাল টপ + প্লাজু",
    subText: "৩ সেটের কম্বো",
    price: "২৯৫০",
  },
];

export default function TextPrice() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full">
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 shadow-[0_20px_60px_rgba(37,99,235,0.10)] sm:rounded-[32px] sm:p-6 md:p-8">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-blue-400/15 blur-3xl sm:h-64 sm:w-64" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-indigo-400/15 blur-3xl sm:h-72 sm:w-72" />

        <div className="relative">
          {/* Header */}
          <div className="mb-6 text-center sm:mb-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                🎁
              </span>

              <span className="text-xs font-bold tracking-wide text-blue-700 sm:text-sm">
                বিশেষ অফার
              </span>
            </div>

            <h2 className="text-xl font-extrabold leading-8 text-slate-900 sm:text-2xl md:text-3xl">
              আপনার পছন্দের কম্বো বেছে নিন
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-xs leading-6 text-slate-500 sm:text-sm">
              বেশি সেট নিলে আরও বেশি সাশ্রয় করুন
            </p>
          </div>

          {/* Offer Cards */}
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
            {offers.map((offer, index) => {
              const isActive = active === index;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 sm:rounded-3xl sm:p-5 ${
                    isActive
                      ? "border-blue-400 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 shadow-[0_15px_40px_rgba(37,99,235,0.25)] sm:-translate-y-1"
                      : "border-slate-200 bg-white/90 shadow-sm hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                  }`}
                >
                  {isActive && (
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
                  )}

                  <div className="relative">
                    {/* Badge */}
                    <div
                      className={`mb-4 inline-flex rounded-full px-3 py-1 text-[10px] font-bold sm:text-xs ${
                        isActive
                          ? "bg-white/15 text-blue-50"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {index + 1} সেট কম্বো
                    </div>

                    {/* Product Name */}
                    <h3
                      className={`text-sm font-bold leading-6 sm:text-base ${
                        isActive ? "text-white" : "text-slate-800"
                      }`}
                    >
                      {offer.text}
                    </h3>

                    {/* Combo */}
                    <p
                      className={`mt-1 text-xs font-medium ${
                        isActive ? "text-blue-100" : "text-slate-500"
                      }`}
                    >
                      {offer.subText}
                    </p>

                    {/* Divider */}
                    <div
                      className={`my-4 h-px ${
                        isActive ? "bg-white/20" : "bg-slate-200"
                      }`}
                    />

                    {/* Price */}
                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <p
                          className={`text-[10px] font-medium sm:text-xs ${
                            isActive ? "text-blue-100" : "text-slate-500"
                          }`}
                        >
                          মাত্র
                        </p>

                        <div className="mt-0.5 flex items-baseline gap-1">
                          <span
                            className={`text-2xl font-black tracking-tight sm:text-3xl ${
                              isActive ? "text-white" : "text-blue-700"
                            }`}
                          >
                            {offer.price}
                          </span>

                          <span
                            className={`text-xs font-bold sm:text-sm ${
                              isActive ? "text-blue-100" : "text-slate-600"
                            }`}
                          >
                            টাকা
                          </span>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-white/15 text-white"
                            : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                        }`}
                      >
                        →
                      </div>
                    </div>

                    {/* Active Line */}
                    <div
                      className={`absolute bottom-0 left-0 h-1 rounded-r-full ${
                        isActive ? "w-full bg-cyan-300" : "w-0"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Message */}
          <div className="mt-5 flex justify-center sm:mt-7">
            <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md sm:px-5 sm:py-2.5">
              <span className="text-sm sm:text-base">💙</span>

              <span className="text-center text-[10px] font-semibold text-slate-600 sm:text-xs md:text-sm">
                প্রিমিয়াম কোয়ালিটি • আরামদায়ক ফেব্রিক • সাশ্রয়ী কম্বো
              </span>
            </div>
          </div>

          {/* Manual Dots */}
          <div className="mt-4 flex justify-center gap-1.5">
            {offers.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Offer ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-7 bg-blue-600"
                    : "w-1.5 bg-slate-300 hover:bg-blue-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
