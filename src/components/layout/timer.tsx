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

  return (
    <div className="my-4 w-full px-3 sm:px-4">
      <div className="flex w-full justify-center">
        <div className="grid w-full max-w-2xl grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Hours */}
          <div className="flex aspect-[1.25/1] min-h-[90px] flex-col items-center justify-center rounded-2xl bg-black sm:min-h-[110px] sm:rounded-[24px] md:min-h-[125px] md:rounded-[28px] lg:min-h-[130px] lg:rounded-[30px]">
            <span className="text-2xl font-bold leading-none text-white sm:text-4xl md:text-5xl">
              {String(hours).padStart(2, "0")}
            </span>
            <span className="mt-2 text-sm text-white sm:text-xl md:text-2xl lg:text-3xl">
              ঘণ্টা
            </span>
          </div>

          {/* Minutes */}
          <div className="flex aspect-[1.25/1] min-h-[90px] flex-col items-center justify-center rounded-2xl bg-black sm:min-h-[110px] sm:rounded-[24px] md:min-h-[125px] md:rounded-[28px] lg:min-h-[130px] lg:rounded-[30px]">
            <span className="text-2xl font-bold leading-none text-white sm:text-4xl md:text-5xl">
              {String(minutes).padStart(2, "0")}
            </span>
            <span className="mt-2 text-sm text-white sm:text-xl md:text-2xl lg:text-3xl">
              মিনিট
            </span>
          </div>

          {/* Seconds */}
          <div className="flex aspect-[1.25/1] min-h-[90px] flex-col items-center justify-center rounded-2xl bg-black sm:min-h-[110px] sm:rounded-[24px] md:min-h-[125px] md:rounded-[28px] lg:min-h-[130px] lg:rounded-[30px]">
            <span className="text-2xl font-bold leading-none text-white sm:text-4xl md:text-5xl">
              {String(seconds).padStart(2, "0")}
            </span>
            <span className="mt-2 text-sm text-white sm:text-xl md:text-2xl lg:text-3xl">
              সেকেন্ড
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
