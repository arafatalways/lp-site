const ProductCode = () => {
  const products = [
    {
      image: "/images/lp-1.jpg",
      code: "কোড - ০৪",
    },
    {
      image: "/images/lp-1.jpg",
      code: "কোড - ০৫",
    },
    {
      image: "/images/lp-1.jpg",
      code: "কোড - ০৬",
    },
  ];

  return (
    <section className="w-full px-3 py-8 sm:px-5 sm:py-10 md:px-6 md:py-14">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700 shadow-sm sm:text-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
              ✦
            </span>
            আমাদের কালেকশন
          </span>

          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
            পছন্দের ডিজাইনটি বেছে নিন
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-slate-500 sm:text-sm md:text-base">
            আপনার পছন্দের প্রোডাক্ট কোড নির্বাচন করে সহজেই অর্ডার করুন
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {products.map((product, index) => (
            <div
              key={product.code}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(37,99,235,0.15)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.code}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                {/* Product Number */}
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 text-xs font-extrabold text-blue-700 shadow-lg backdrop-blur-md">
                  0{index + 1}
                </div>

                {/* Code Badge */}
                <div className="absolute bottom-4 left-4 rounded-full bg-slate-950/70 px-4 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md sm:text-sm">
                  {product.code}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
                      Product Code
                    </p>

                    <h3 className="mt-1.5 text-xl font-extrabold text-slate-900">
                      {product.code}
                    </h3>
                  </div>

                  {/* Check */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-lg font-bold text-blue-600 transition-all duration-300 group-hover:rotate-6 group-hover:bg-blue-600 group-hover:text-white">
                    ✓
                  </div>
                </div>

                <p className="mt-3 text-xs leading-5 text-slate-500 sm:text-sm">
                  প্রিমিয়াম ফেব্রিকের সুন্দর ও আরামদায়ক ডিজাইন।
                </p>

                {/* Order Button */}
                <button
                  type="button"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:scale-[0.98] sm:text-base"
                >
                  <span className="text-base">🛒</span>
                  <span>অর্ডার করুন</span>
                  <span className="ml-1 text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <div className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3 shadow-sm sm:px-6">
            <span className="text-base">💙</span>

            <p className="text-center text-[10px] font-semibold text-slate-600 sm:text-xs md:text-sm">
              পছন্দের কোডটি নির্বাচন করে অর্ডার করুন
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCode;
