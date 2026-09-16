import {
  Check,
  ShoppingCart,
  Truck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const ProductDetails = () => {
  const products = [
    {
      name: "মায়াবতী ফ্লোরাল টপ + প্লাজু",
      quantity: "১ সেটের কম্বো",
      price: "৳ ১০৫০",
    },
    {
      name: "মায়াবতী ফ্লোরাল টপ + প্লাজু",
      quantity: "২ সেটের কম্বো",
      price: "৳ ১৯৫০",
    },
    {
      name: "মায়াবতী ফ্লোরাল টপ + প্লাজু",
      quantity: "৩ সেটের কম্বো",
      price: "৳ ২৯৫০",
    },
  ];

  const benefits = [
    "১০০% প্রিমিয়াম জাপান কটন ফেব্রিক্স এবং সুদক্ষ কারিগর দ্বারা তৈরি",
    "কোয়ালিটির শতভাগ নিশ্চয়তা",
    "ধোয়ার পর ছোট হওয়া বা রং ফ্যাকাশে হওয়ার সম্ভাবনা নেই",
    "১০০% কালার গ্যারান্টি",
    "প্রোডাক্ট চেক করে পেমেন্ট করার সুযোগ",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </span>

            <span className="text-xs font-bold tracking-wide text-blue-700 sm:text-sm">
              PRODUCT DETAILS
            </span>
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl md:text-4xl">
            প্রোডাক্ট ডিটেইলস
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm md:text-base">
            আপনার সোনামণির জন্য প্রিমিয়াম ফেব্রিক, সুন্দর ডিজাইন এবং আরামদায়ক
            কম্বো।
          </p>
        </div>

        {/* Price Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(37,99,235,0.14)] sm:p-6"
            >
              {/* Number */}
              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-xs font-black text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 shadow-sm ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                <ShoppingCart className="h-6 w-6" />
              </div>

              {/* Product */}
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Combo Offer
              </p>

              <h3 className="mt-2 pr-10 text-base font-extrabold leading-6 text-slate-900 sm:text-lg">
                {product.name}
              </h3>

              <div className="mt-1 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                {product.quantity}
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-slate-100" />

              {/* Price */}
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-[10px] font-medium text-slate-400 sm:text-xs">
                    অফার মূল্য
                  </p>

                  <p className="mt-1 text-2xl font-black tracking-tight text-blue-700 sm:text-3xl">
                    {product.price}
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check className="h-5 w-5" strokeWidth={3} />
                </div>
              </div>

              {/* Delivery */}
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5">
                <Truck className="h-4 w-4 shrink-0 text-blue-600" />

                <span className="text-[10px] font-semibold text-slate-500 sm:text-xs">
                  ডেলিভারি চার্জ প্রযোজ্য
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.06)] sm:mt-10 md:mt-12">
          {/* Benefits Header */}
          <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-5 sm:px-7 sm:py-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                  কেন এই প্রোডাক্টটি নেবেন?
                </h3>

                <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                  আপনার সন্তুষ্টিই আমাদের অগ্রাধিকার
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 gap-x-8 px-5 py-5 sm:px-7 sm:py-7 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 border-b border-slate-100 py-3.5 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>

                <p className="text-sm font-semibold leading-6 text-slate-700 sm:text-base sm:leading-7">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center sm:mt-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />

            <span className="text-[10px] font-bold text-slate-500 sm:text-xs">
              LIMITED TIME OFFER
            </span>
          </div>

          <div>
            <button
              type="button"
              className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-base font-extrabold text-white shadow-[0_10px_25px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-indigo-700 hover:shadow-[0_15px_35px_rgba(37,99,235,0.30)] active:scale-[0.98] sm:py-4 sm:text-lg"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>এখনই অর্ডার করুন</span>
              <span className="text-xl">→</span>
            </button>
          </div>

          <p className="mt-3 text-[10px] font-medium text-slate-400 sm:text-xs">
            প্রোডাক্ট চেক করে পেমেন্ট করার সুযোগ রয়েছে
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
