import { Check } from "lucide-react";

const ProductDetails = () => {
  const products = [
    {
      name: "মায়াবতী ফ্লোরাল টপ + প্লাজু ( ১ সেটের কম্বো ) মাত্র -",
      price: "৳ ১০৫০",
    },
    {
      name: "মায়াবতী ফ্লোরাল টপ + প্লাজু ( ২ সেটের কম্বো ) মাত্র -",
      price: "৳ ১৯৫০",
    },
    {
      name: "মায়াবতী ফ্লোরাল টপ + প্লাজু ( ৩ সেটের কম্বো ) মাত্র -",
      price: "৳ ২৯৫০",
    },
  ];

  const benefits = [
    "১০০% প্রিমিয়াম জাপান কটন ফেব্রিক্স কাপড় এবং সুদক্ষ কারিগর দ্বারা তৈরি",
    "কোয়ালিটির শতভাগ নিশ্চয়তা",
    "ধোয়ার পর ছোট হওয়া বা রং ফ্যাকাশে হওয়ার সম্ভাবনা নেই।",
    "১০০% কালার গ্যারান্টি",
    "প্রোডাক্ট চেক করে পেমেন্ট করার সুযোগ",
  ];

  return (
    <section className="w-full bg-[#fafafa] px-4 py-8 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="mb-7 text-center text-2xl font-semibold text-[#ff2f70] sm:text-3xl md:text-3xl">
          প্রোডাক্ট ডিটেইলস :
        </h2>

        {/* Price List */}
        <div className="space-y-5">
          {products.map((product, index) => (
            <div key={index}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-bold leading-relaxed text-gray-900 sm:text-xl md:text-2xl lg:text-2xl">
                  {product.name}
                </h3>

                <span className="shrink-0 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  {product.price}
                </span>
              </div>

              <p className="mt-1 text-sm text-gray-700 sm:text-base md:text-lg">
                ডেলিভারি চার্জ প্রযোজ্য
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gray-300" />

        {/* Benefits */}
        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-2 border-b border-gray-200 pb-2"
            >
              <Check
                className="mt-1 h-5 w-5 shrink-0 text-[#008080] sm:h-6 sm:w-6"
                strokeWidth={3}
              />

              <p className="text-base font-semibold leading-7 text-gray-900 sm:text-lg md:text-xl lg:text-2xl">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Order Button */}
        <div className="mt-8 flex justify-center">
          <button
            className="
              rounded-md
              bg-[#a86b20]
              px-8
              py-3
              text-lg
              font-bold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#8f5b1c]
              hover:shadow-lg
              sm:px-10
              sm:py-3.5
              sm:text-xl
            "
          >
            🛒 অর্ডার করুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
