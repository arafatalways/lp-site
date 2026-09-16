import { Award, Tags, Truck, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "প্রিমিয়াম কোয়ালিটি",
      description:
        "১০০% প্রিমিয়াম জাপান কটন কাপড় এবং সুদক্ষ কারিগর দ্বারা তৈরি — আপনার সোনামণির আরামের জন্য সেরা।",
      color: "text-[#ff2f70]",
    },
    {
      icon: Tags,
      title: "সাশ্রয়ী মূল্য",
      description:
        "১০০% প্রিমিয়াম জাপান কটন আকর্ষণীয় টপ + প্লাজু এখন পেয়ে যাচ্ছেন বিশেষ ডিসকাউন্টে। 💖",
      color: "text-[#006b6b]",
    },
    {
      icon: Truck,
      title: "দ্রুত ডেলিভারি",
      description:
        "অর্ডার করার পর দ্রুত প্রসেসিং এবং দেশের যেকোনো প্রান্তে ক্যাশ অন ডেলিভারি সুবিধা।",
      color: "text-[#d47a00]",
    },
    {
      icon: Headphones,
      title: "২৪/৭ সাপোর্ট",
      description:
        "যেকোনো প্রশ্ন বা সাইজ সমস্যায় আমাদের হোয়াটসঅ্যাপ সাপোর্ট টিম সবসময় পাশে।",
      color: "text-[#3ca344]",
    },
  ];

  return (
    <section className="w-full bg-[#fff8fa] px-4 py-10 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-8 text-center text-lg font-semibold text-[#a04369] sm:text-3xl md:text-4xl lg:text-1xl">
          কেন বেছে নিবেন Baby Nest Fashion ?
        </h2>

        {/* Features */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  px-5
                  py-7
                  text-center
                  shadow-sm
                  ring-1
                  ring-black/5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                  sm:px-8
                  sm:py-8
                  md:py-9
                "
              >
                {/* Icon */}
                <Icon
                  className={`mb-3 h-12 w-12 sm:h-14 sm:w-14 ${feature.color}`}
                  strokeWidth={2.5}
                />

                {/* Title */}
                <h3
                  className={`text-xl font-bold sm:text-2xl md:text-3xl ${feature.color}`}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2 max-w-4xl text-sm font-medium leading-6 text-gray-600 sm:text-base sm:leading-7 md:text-lg">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
