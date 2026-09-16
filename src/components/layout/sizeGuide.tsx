import {
  CheckCircle2,
  Headphones,
  Ruler,
  Sparkles,
  Phone,
  MessageCircle,
} from "lucide-react";

import SizeChart from "@/components/layout/sizeChart";

const SizeGuide = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10 lg:py-20">
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
              <Ruler className="h-3.5 w-3.5" />
            </span>

            <span className="text-xs font-bold tracking-wide text-blue-700 sm:text-sm">
              SIZE GUIDE
            </span>
          </div>

          <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
            সঠিক সাইজটি{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              বেছে নিন
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7 md:text-base">
            আপনার সোনামণির জন্য সঠিক সাইজ নির্বাচন করতে নিচের সাইজ চার্টটি
            ভালোভাবে দেখে অর্ডার করুন।
          </p>
        </div>

        {/* ================= PRODUCT INFO ================= */}
        <div className="mx-auto mb-6 max-w-4xl overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] sm:mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-5 text-center text-white sm:px-7 sm:py-6">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
              <Sparkles className="h-5 w-5" />
            </div>

            <h3 className="mt-3 text-lg font-extrabold sm:text-xl md:text-2xl">
              মায়াবতী ফ্লোরাল টপ এন্ড প্লাজু
            </h3>

            <p className="mt-1 text-xs font-medium text-blue-100 sm:text-sm">
              ১০০% জাফরান ফেব্রিক্স • প্রিমিয়াম কোয়ালিটি
            </p>
          </div>

          <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="flex items-center justify-center gap-2 px-4 py-4 text-center">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
              <span className="text-xs font-bold text-slate-600 sm:text-sm">
                প্রিমিয়াম ফেব্রিক
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 px-4 py-4 text-center">
              <Ruler className="h-5 w-5 shrink-0 text-blue-600" />
              <span className="text-xs font-bold text-slate-600 sm:text-sm">
                ৬–১৫ বছর পর্যন্ত
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 px-4 py-4 text-center">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
              <span className="text-xs font-bold text-slate-600 sm:text-sm">
                সঠিক সাইজ নির্বাচন
              </span>
            </div>
          </div>
        </div>

        {/* ================= SIZE INSTRUCTION ================= */}
        <div className="mx-auto mb-7 max-w-4xl rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-5 shadow-sm sm:mb-9 sm:p-7">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20">
              <Ruler className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-base font-extrabold text-slate-900 sm:text-lg">
                অর্ডারের আগে সাইজটি মিলিয়ে নিন
              </h3>

              <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                শিশুর বর্তমান মাপের সাথে চার্টের মাপ মিলিয়ে সবচেয়ে উপযুক্ত
                সাইজটি নির্বাচন করুন।
              </p>
            </div>
          </div>
        </div>

        {/* ================= SIZE CHART ================= */}
        <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-[0_15px_45px_rgba(15,23,42,0.08)] sm:p-4 md:p-5">
          <div className="mb-4 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Ruler className="h-4 w-4" />
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-slate-800 sm:text-base">
                  সাইজ চার্ট
                </h3>

                <p className="text-[10px] text-slate-400 sm:text-xs">
                  অর্ডারের আগে অবশ্যই দেখে নিন
                </p>
              </div>
            </div>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-blue-600 sm:text-xs">
              ৬–১৫ বছর
            </span>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="min-w-[600px]">
              <SizeChart />
            </div>
          </div>
        </div>

        {/* ================= SUPPORT ================= */}
        <div className="mx-auto mt-7 max-w-4xl overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_12px_35px_rgba(37,99,235,0.08)] sm:mt-9">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto]">
            <div className="p-5 text-center sm:p-7 md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5">
                <Headphones className="h-4 w-4 text-blue-600" />

                <span className="text-[10px] font-bold text-blue-700 sm:text-xs">
                  SIZE SUPPORT
                </span>
              </div>

              <h3 className="mt-3 text-lg font-extrabold text-slate-900 sm:text-xl">
                সাইজ নিয়ে কোনো প্রশ্ন আছে?
              </h3>

              <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                সাইজ বুঝতে সমস্যা হলে আমাদের সাথে যোগাযোগ করুন। আমরা আপনাকে সঠিক
                সাইজ নির্বাচন করতে সাহায্য করবো।
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 border-t border-slate-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 sm:p-7 md:border-l md:border-t-0">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:scale-[0.98] sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                হোয়াটসঅ্যাপ করুন
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 transition-colors hover:text-indigo-600 sm:text-sm"
              >
                <Phone className="h-4 w-4" />
                প্রয়োজনে কল করুন
              </button>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM NOTE ================= */}
        <div className="mt-6 flex justify-center sm:mt-8">
          <div className="flex max-w-full items-center gap-2 rounded-2xl border border-blue-100 bg-white/80 px-4 py-3 text-center shadow-sm backdrop-blur-md sm:px-6">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />

            <p className="text-[10px] font-semibold leading-5 text-slate-500 sm:text-xs md:text-sm">
              সাইজ চার্ট দেখে সঠিক সাইজ নির্বাচন করুন • ভুল সাইজের অর্ডার এড়িয়ে
              চলুন
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeGuide;
