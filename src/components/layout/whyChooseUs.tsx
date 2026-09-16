import { Award, Tags, Truck, Headphones, CheckCircle2 } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "প্রিমিয়াম কোয়ালিটি",
      description:
        "১০০% প্রিমিয়াম জাপান কটন কাপড় এবং সুদক্ষ কারিগর দ্বারা তৈরি — আপনার সোনামণির আরামের জন্য সেরা।",
    },
    {
      icon: Tags,
      title: "সাশ্রয়ী মূল্য",
      description:
        "প্রিমিয়াম কোয়ালিটির টপ + প্লাজু এখন পাচ্ছেন বিশেষ অফারে, যাতে ভালো মানের সাথে থাকে সাশ্রয়ী দাম।",
    },
    {
      icon: Truck,
      title: "দ্রুত ডেলিভারি",
      description:
        "অর্ডার করার পর দ্রুত প্রসেসিং এবং দেশের যেকোনো প্রান্তে ক্যাশ অন ডেলিভারি সুবিধা।",
    },
    {
      icon: Headphones,
      title: "২৪/৭ সাপোর্ট",
      description:
        "যেকোনো প্রশ্ন, অর্ডার বা সাইজ সংক্রান্ত সমস্যায় আমাদের সাপোর্ট টিম সবসময় পাশে থাকবে।",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
              ✦
            </span>

            <span className="text-xs font-bold tracking-wide text-blue-700 sm:text-sm">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
            কেন বেছে নিবেন{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Baby Nest Fashion?
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm md:text-base">
            আপনার সোনামণির জন্য মানসম্মত পণ্য, সাশ্রয়ী মূল্য এবং বিশ্বস্ত
            সার্ভিস দেওয়াই আমাদের প্রধান লক্ষ্য।
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-5 text-center shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(37,99,235,0.13)] sm:p-6"
              >
                {/* Top Number */}
                <div className="absolute right-4 top-4 text-[10px] font-black tracking-widest text-slate-200 transition-colors duration-300 group-hover:text-blue-100">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 shadow-sm ring-1 ring-blue-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20 sm:h-[72px] sm:w-[72px]">
                  <Icon className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-blue-700 sm:text-xl">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs font-medium leading-6 text-slate-500 sm:text-sm sm:leading-7">
                  {feature.description}
                </p>

                {/* Check */}
                <div className="mt-5 flex justify-center">
                  <div className="flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 text-[10px] font-bold text-slate-500 transition-all duration-300 group-hover:bg-blue-50 group-hover:text-blue-600 sm:text-xs">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    বিশ্বস্ত সার্ভিস
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Message */}
        <div className="mt-7 flex justify-center sm:mt-9">
          <div className="flex max-w-full items-center gap-2 rounded-2xl border border-blue-100 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
              ✓
            </span>

            <p className="text-center text-[10px] font-semibold text-slate-600 sm:text-xs md:text-sm">
              গুণগত মান • সাশ্রয়ী মূল্য • দ্রুত ডেলিভারি • বিশ্বস্ত সাপোর্ট
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
