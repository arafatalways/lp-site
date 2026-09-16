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
    <div className="my-4 flex items-center justify-center">
      <div className="flex gap-8">
        {/* Hours */}
        <div className="w-40 h-30 bg-black rounded-[30px] flex flex-col items-center justify-center">
          <span className="text-white text-5xl font-bold">{hours}</span>

          <span className="text-white text-3xl">ঘণ্টা</span>
        </div>

        {/* Minutes */}
        <div className="w-40 h-30 bg-black rounded-[30px] flex flex-col items-center justify-center">
          <span className="text-white text-5xl font-bold">{minutes}</span>

          <span className="text-white text-3xl">মিনিট</span>
        </div>

        {/* Seconds */}
        <div className="w-40 h-30 bg-black rounded-[30px] flex flex-col items-center justify-center">
          <span className="text-white text-5xl font-bold">{seconds}</span>

          <span className="text-white text-3xl">সেকেন্ড</span>
        </div>
      </div>
    </div>
  );
}
