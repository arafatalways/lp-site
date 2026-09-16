import {
  BadgeCheck,
  Heart,
  MapPin,
  MessageCircle,
  Quote,
  Star,
} from "lucide-react";

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
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10">
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
              <MessageCircle className="h-3.5 w-3.5" />
            </span>

            <span className="text-xs font-bold tracking-wide text-blue-700 sm:text-sm">
              CUSTOMER REVIEWS
            </span>
          </div>

          <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
            আমাদের কাস্টমারদের{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              মতামত
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm md:text-base">
            আমাদের প্রোডাক্ট ব্যবহার করে সম্মানিত কাস্টমাররা তাদের অভিজ্ঞতা
            আমাদের সাথে শেয়ার করেছেন।
          </p>
        </div>

        {/* ================= RATING SUMMARY ================= */}
        <div className="mx-auto mb-8 max-w-5xl overflow-hidden rounded-3xl border border-blue-100 bg-white/90 shadow-[0_15px_45px_rgba(37,99,235,0.08)] backdrop-blur-md sm:mb-10 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_190px]">
            {/* Rating */}
            <div className="flex flex-col items-center justify-center border-b border-slate-100 px-5 py-6 text-center md:border-b-0 md:border-r sm:px-7 sm:py-7">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
                Overall Rating
              </span>

              <div className="mt-1">
                <span className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
                  ৪.৯
                </span>

                <span className="text-xl font-bold text-slate-400 sm:text-2xl">
                  /৫
                </span>
              </div>

              <div className="mt-2 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-amber-400 text-amber-400 sm:h-5 sm:w-5"
                  />
                ))}
              </div>

              <p className="mt-2 text-xs font-medium text-slate-400">
                ৫০০+ কাস্টমার রিভিউ
              </p>
            </div>

            {/* Center */}
            <div className="flex flex-col justify-center px-5 py-6 text-center sm:px-7 sm:py-7 md:px-8 md:text-left">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 mx-auto md:mx-0">
                <BadgeCheck className="h-4 w-4 text-emerald-500" />

                <span className="text-[10px] font-bold text-emerald-600 sm:text-xs">
                  VERIFIED CUSTOMERS
                </span>
              </div>

              <h3 className="mt-3 text-lg font-extrabold text-slate-900 sm:text-xl">
                কাস্টমারদের ভালোবাসাই আমাদের অনুপ্রেরণা ❤️
              </h3>

              <p className="mt-2 max-w-xl text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                মানসম্মত প্রোডাক্ট, সুন্দর প্যাকেজিং এবং ভালো সার্ভিস দেওয়াই
                আমাদের প্রধান লক্ষ্য।
              </p>
            </div>

            {/* Trust */}
            <div className="m-4 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-5 text-center md:m-5">
              <div>
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20">
                  <Heart className="h-5 w-5 fill-white" />
                </div>

                <h4 className="mt-3 text-sm font-extrabold text-slate-800">
                  আপনাদের ভালোবাসা
                </h4>

                <p className="mt-1 text-[10px] leading-5 text-slate-500">
                  আমাদের এগিয়ে যাওয়ার শক্তি
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= REVIEW CARDS ================= */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(37,99,235,0.13)] sm:p-6"
            >
              {/* Top Accent */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Quote */}
              <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                <Quote className="h-4 w-4" />
              </div>

              {/* Customer */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-12 w-12 rounded-full border-2 border-blue-100 object-cover shadow-sm sm:h-14 sm:w-14"
                  />

                  <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-[9px] font-bold text-white">
                    ✓
                  </span>
                </div>

                <div className="min-w-0 pr-10">
                  <h3 className="truncate text-sm font-extrabold text-slate-900 sm:text-base">
                    {review.name}
                  </h3>

                  <div className="mt-1 flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-blue-500" />

                    <span className="text-xs text-slate-400">
                      {review.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-5 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}

                <span className="ml-1 text-[10px] font-semibold text-slate-400">
                  5.0
                </span>
              </div>

              {/* Review */}
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                “{review.review}”
              </p>

              {/* Bottom */}
              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-emerald-500" />

                  <span className="text-[10px] font-bold text-slate-400 sm:text-xs">
                    Verified Customer
                  </span>
                </div>

                <Heart className="h-4 w-4 text-slate-300 transition-all duration-300 group-hover:fill-blue-500 group-hover:text-blue-500" />
              </div>
            </article>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-8 text-center sm:mt-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />

            <span className="text-[10px] font-bold text-slate-500 sm:text-xs">
              JOIN OUR HAPPY CUSTOMERS
            </span>
          </div>

          <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl md:text-2xl">
            আপনিও আপনার সোনামণির জন্য{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              সুন্দর একটি সেট
            </span>{" "}
            বেছে নিন
          </h3>

          <p className="mt-2 text-xs text-slate-400 sm:text-sm">
            প্রিমিয়াম কোয়ালিটি • সুন্দর ডিজাইন • আরামদায়ক ফেব্রিক
          </p>

          <button
            type="button"
            className="group mt-5 inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_25px_rgba(37,99,235,0.22)] transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-indigo-700 hover:shadow-[0_16px_35px_rgba(37,99,235,0.28)] active:scale-[0.98] sm:py-4 sm:text-base"
          >
            <span>এখনই অর্ডার করুন</span>

            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
