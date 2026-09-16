const CustomerReview = () => {
  const reviews = [
    {
      id: 1,
      name: "সুমাইয়া ইসলাম",
      location: "ঢাকা",
      image: "/images/customer-1.avif",
      review:
        "আলহামদুলিল্লাহ, ড্রেসটা হাতে পেয়ে অনেক ভালো লেগেছে। কাপড়ের মান এবং ডিজাইন দুটোই খুব সুন্দর। আমার মেয়েরও অনেক পছন্দ হয়েছে।",
    },
    {
      id: 2,
      name: "নুসরাত জাহান",
      location: "চট্টগ্রাম",
      image: "/images/customer-2.jpg",
      review:
        "প্রোডাক্টের কোয়ালিটি সত্যিই অনেক ভালো। ছবির সাথে হুবহু মিল পেয়েছি। কাপড়টা অনেক আরামদায়ক এবং দেখতে খুব সুন্দর।",
    },
    {
      id: 3,
      name: "মারজিয়া আক্তার",
      location: "সিলেট",
      image: "/images/customer-3.jfif",
      review:
        "আমার মেয়ের জন্য নিয়েছিলাম। সাইজ একদম পারফেক্ট হয়েছে। প্যাকেজিংও সুন্দর ছিল এবং সময়মতো ডেলিভারি পেয়েছি।",
    },
    {
      id: 4,
      name: "ফারজানা রহমান",
      location: "নারায়ণগঞ্জ",
      image: "/images/customer-4.avif",
      review:
        "ড্রেসটা খুবই সুন্দর এবং কাপড় অনেক নরম। বাচ্চাদের জন্য বেশ আরামদায়ক। আবারও অর্ডার করার ইচ্ছা আছে ইনশাআল্লাহ।",
    },
    {
      id: 5,
      name: "তানজিলা আক্তার",
      location: "রাজশাহী",
      image: "/images/customer-5.jfif",
      review:
        "যে রকম আশা করেছিলাম তার থেকেও ভালো পেয়েছি। কালার এবং ফেব্রিক দুটোই সুন্দর। কোয়ালিটি অনুযায়ী দামও ভালো।",
    },
    {
      id: 6,
      name: "সাদিয়া হোসেন",
      location: "কুমিল্লা",
      image: "/images/customer-6.jfif",
      review:
        "অনলাইনে অর্ডার করে অনেক সময় চিন্তা থাকে প্রোডাক্ট কেমন হবে। কিন্তু এটা হাতে পেয়ে সত্যিই ভালো লেগেছে। খুব সুন্দর একটি সেট।",
    },
  ];

  return (
    <section className="w-full bg-[#fffaf5] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="mb-3 inline-block rounded-full bg-[#a86b20]/10 px-4 py-1.5 text-sm font-semibold text-[#a86b20] sm:text-base">
            Customer Reviews
          </span>

          <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
            আমাদের কাস্টমারদের
            <span className="text-[#a86b20]"> মতামত</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:text-lg">
            আমাদের প্রোডাক্ট ব্যবহার করে সম্মানিত কাস্টমাররা তাদের অভিজ্ঞতা
            আমাদের সাথে শেয়ার করেছেন।
          </p>
        </div>

        {/* ================= RATING SUMMARY ================= */}
        <div className="mx-auto mb-10 flex w-full max-w-4xl flex-col items-center justify-center gap-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7 md:flex-row md:gap-10 md:p-8">
          {/* Rating */}
          <div className="text-center md:min-w-[180px]">
            <div className="text-4xl font-bold text-gray-900 sm:text-5xl">
              ৪.৯
              <span className="text-2xl text-gray-500 sm:text-3xl">/৫</span>
            </div>

            <div className="mt-2 flex justify-center gap-1 text-xl sm:text-2xl">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <p className="mt-2 text-sm text-gray-500">৫০০+ কাস্টমার রিভিউ</p>
          </div>

          {/* Divider */}
          <div className="hidden h-24 w-px bg-gray-200 md:block" />

          {/* Trust Text */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              কাস্টমারদের ভালোবাসাই আমাদের অনুপ্রেরণা ❤️
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              মানসম্মত প্রোডাক্ট, সুন্দর প্যাকেজিং এবং ভালো সার্ভিস দেওয়াই
              আমাদের প্রধান লক্ষ্য।
            </p>
          </div>
        </div>

        {/* ================= REVIEWS ================= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
            >
              {/* Top */}
              <div className="flex items-center gap-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-12 w-12 shrink-0 rounded-full border-2 border-[#a86b20]/20 object-cover sm:h-14 sm:w-14"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-bold text-gray-900 sm:text-base">
                    {review.name}
                  </h3>

                  <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
                    {review.location}
                  </p>
                </div>

                {/* Verified */}
                <div className="shrink-0 rounded-full bg-green-50 px-2 py-1 text-[10px] font-semibold text-green-600 sm:text-xs">
                  ✓ Verified
                </div>
              </div>

              {/* Stars */}
              <div className="mt-4 flex items-center gap-1 text-lg">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              {/* Review */}
              <p className="mt-3 flex-1 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                “{review.review}”
              </p>

              {/* Bottom */}
              <div className="mt-5 border-t border-gray-100 pt-4">
                <span className="text-xs font-medium text-gray-400 sm:text-sm">
                  Verified Customer
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-10 text-center sm:mt-12">
          <p className="mb-4 text-sm font-medium text-gray-700 sm:text-base">
            আপনিও আপনার সোনামণির জন্য অর্ডার করতে পারেন ❤️
          </p>

          <button
            type="button"
            className="w-full rounded-lg bg-[#a86b20] px-8 py-3 text-base font-bold text-white shadow-md transition duration-300 hover:bg-[#8f5918] hover:shadow-lg sm:w-auto sm:min-w-[220px] sm:py-3.5 sm:text-lg"
          >
            এখনই অর্ডার করুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
