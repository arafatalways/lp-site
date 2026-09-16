import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(22 * 60 * 60 + 35 * 60 + 35);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const timeItems = [
    {
      value: hours,
      label: "ঘণ্টা",
    },
    {
      value: minutes,
      label: "মিনিট",
    },
    {
      value: seconds,
      label: "সেকেন্ড",
    },
  ];

  return (
    <div className="w-full px-1 py-2 sm:px-2 sm:py-3">
      {/* Main Timer Card */}
      <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-blue-200/70 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 shadow-[0_20px_60px_rgba(37,99,235,0.12)] sm:rounded-[32px] sm:p-6 md:p-8">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl sm:h-52 sm:w-52" />
        <div className="pointer-events-none absolute -bottom-20 -right-16 h-48 w-48 rounded-full bg-indigo-400/20 blur-3xl sm:h-60 sm:w-60" />

        <div className="relative">
          {/* Timer Header */}
          <div className="mb-5 text-center sm:mb-7">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-md sm:px-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs text-white sm:h-7 sm:w-7 sm:text-sm">
                ⏰
              </span>

              <span className="text-xs font-bold tracking-wide text-blue-700 sm:text-sm">
                অফার শেষ হতে বাকি
              </span>
            </div>

            <h3 className="mt-3 text-lg font-extrabold text-slate-900 sm:text-xl md:text-2xl">
              বিশেষ অফারটি শেষ হয়ে যাচ্ছে!
            </h3>

            <p className="mx-auto mt-1 max-w-lg text-xs leading-6 text-slate-500 sm:text-sm">
              সময় শেষ হওয়ার আগেই আপনার পছন্দের পণ্যটি অর্ডার করুন।
            </p>
          </div>

          {/* Timer Boxes */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
            {timeItems.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/90 p-2.5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(37,99,235,0.15)] sm:rounded-3xl sm:p-4 md:p-5"
              >
                {/* Top Gradient Line */}
                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 sm:h-1.5" />

                {/* Number */}
                <div className="flex items-center justify-center">
                  <span className="text-2xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>

                {/* Label */}
                <div className="mt-1.5 text-center sm:mt-2">
                  <span className="text-[11px] font-bold text-blue-600 sm:text-sm md:text-base">
                    {item.label}
                  </span>
                </div>

                {/* Bottom Glow */}
                <div className="pointer-events-none absolute -bottom-8 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full bg-blue-500/10 blur-2xl transition-all duration-300 group-hover:bg-blue-500/20" />
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-5 flex items-center justify-center sm:mt-7">
            <div className="flex max-w-full items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-2 shadow-sm sm:px-5 sm:py-2.5">
              <span className="text-sm sm:text-base">🔥</span>

              <p className="text-center text-[10px] font-semibold text-slate-600 sm:text-xs md:text-sm">
                সীমিত সময়ের অফার — এখনই অর্ডার করুন
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
