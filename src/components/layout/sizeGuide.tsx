import SizeChart from "@/components/layout/sizeChart";

const SizeGuide = () => {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* WhatsApp Support */}
        <div className="mx-auto mb-7 w-full max-w-2xl rounded-2xl bg-[#003c3a] px-4 py-4 text-center shadow-md sm:px-6">
          <p className="text-sm font-semibold leading-6 text-white/90 sm:text-base md:text-lg">
            সাইজ নিয়ে প্রশ্ন হলে অথবা অন্য কোন সমস্যার হলে নির্দ্বিধায় কল দিতে
            পারেন। দিনের ভিতরে প্রয়োজন হলে ফোন করুন
          </p>

          <button
            className="
              mt-3
              rounded-md
              bg-green-600
              px-5
              py-2
              text-sm
              font-bold
              text-white
              transition
              hover:bg-green-700
              sm:text-base
            "
          >
            হোয়াটসঅ্যাপ করুন
          </button>
        </div>

        {/* Heading */}
        <h2
          className="
            mb-6
            text-center
            text-lg
            font-bold
            leading-7
            text-gray-900
            sm:text-xl
            md:text-2xl
            lg:text-3xl
          "
        >
          আপনার সোনামণির জন্য সঠিক সাইজটি অর্ডার করতে চার্টটি ভালোভাবে দেখুন।
          সাইজ পাবেন ৬ বছর থেকে ১৫ বছর পর্যন্ত 🥰 তাই সাইজ!
        </h2>

        {/* Size Chart */}
        <div className="flex w-full justify-center">
          <div className="text-center text-xl font-semibold">
            <p>১০০% জাফরান ফেব্রিক্স </p>
            <p> মায়াবতী ফ্লোরাল টপ এন্ড প্লাজু</p>
            <p> সেটের সাইজ ডিটেইলস।</p>
          </div>
        </div>
      </div>
      <SizeChart />
    </section>
  );
};

export default SizeGuide;
