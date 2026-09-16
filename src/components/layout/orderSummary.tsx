import { useState } from "react";
import {
  Banknote,
  CheckCircle2,
  CreditCard,
  LockKeyhole,
  MapPin,
  ShieldCheck,
  Smartphone,
  Truck,
} from "lucide-react";

const OrderSummary = () => {
  const products = [
    {
      id: 1,
      image: "/images/lp-1.jpg",
      name: "মায়াবতী ফ্লোরাল টপ এন্ড প্লাজু",
      code: "কোড ০৪",
      price: 1050,
      quantity: 1,
    },
    {
      id: 2,
      image: "/images/lp-1.jpg",
      name: "মায়াবতী ফ্লোরাল টপ এন্ড প্লাজু",
      code: "কোড ০৫",
      price: 1050,
      quantity: 1,
    },
  ];

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  const deliveryCharge = 30;
  const total = subtotal + deliveryCharge;

  const paymentOptions = [
    {
      id: "cod",
      title: "ক্যাশ অন ডেলিভারি",
      description: "পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন",
      icon: Banknote,
      badge: "জনপ্রিয়",
    },
    {
      id: "bkash",
      title: "bKash",
      description: "bKash-এর মাধ্যমে পেমেন্ট করুন",
      icon: Smartphone,
      badge: "bK",
    },
    {
      id: "nagad",
      title: "Nagad",
      description: "Nagad-এর মাধ্যমে পেমেন্ট করুন",
      icon: Smartphone,
      badge: "N",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-3 py-10 sm:px-5 md:px-8 lg:px-10 lg:py-14">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto w-full max-w-5xl">
        {/* ================= HEADER ================= */}
        <div className="mb-8 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold tracking-wider text-blue-700 sm:text-sm">
            <LockKeyhole size={15} />
            SECURE CHECKOUT
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            আপনার অর্ডারটি <span className="text-blue-600">সম্পন্ন করুন</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            আপনার পছন্দের পণ্যগুলো যাচাই করে পেমেন্ট মেথড নির্বাচন করুন এবং
            অর্ডারটি কনফার্ম করুন।
          </p>
        </div>

        {/* ================= ORDER CARD ================= */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          {/* Card Header */}
          <div className="border-b border-slate-200 bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-5 text-white sm:px-6 md:px-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                    <CreditCard size={20} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold sm:text-xl">
                      অর্ডার সামারি
                    </h3>

                    <p className="mt-0.5 text-xs text-blue-100 sm:text-sm">
                      আপনার নির্বাচিত পণ্য
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur sm:text-sm">
                {products.length} টি পণ্য
              </div>
            </div>
          </div>

          {/* ================= PRODUCTS ================= */}
          <div className="divide-y divide-slate-100">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-4 px-4 py-5 transition-colors duration-200 hover:bg-slate-50/70 sm:flex-row sm:items-center sm:px-6 md:px-8"
              >
                {/* Product Image */}
                <div className="relative shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-24 w-24 rounded-2xl border border-slate-200 object-cover shadow-sm sm:h-28 sm:w-28"
                  />

                  <div className="absolute -right-2 -top-2 flex h-7 min-w-7 items-center justify-center rounded-full border-2 border-white bg-blue-600 px-1.5 text-xs font-bold text-white shadow">
                    {product.quantity}
                  </div>
                </div>

                {/* Product Info */}
                <div className="min-w-0 flex-1">
                  <div className="mb-2 inline-flex rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">
                    {product.code}
                  </div>

                  <h4 className="text-sm font-bold leading-6 text-slate-800 sm:text-base md:text-lg">
                    {product.name}
                  </h4>

                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 sm:text-sm">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      Premium Quality
                    </span>

                    <span>•</span>

                    <span>Quantity: {product.quantity}</span>
                  </div>
                </div>

                {/* Product Price */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-3 sm:block sm:border-0 sm:pt-0 sm:text-right">
                  <span className="text-xs font-medium text-slate-500 sm:hidden">
                    মূল্য
                  </span>

                  <div>
                    <p className="text-lg font-extrabold text-slate-900 sm:text-xl">
                      {(product.price * product.quantity).toLocaleString(
                        "bn-BD",
                      )}
                      ৳
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {product.price.toLocaleString("bn-BD")}৳ ×{" "}
                      {product.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= PRICE DETAILS ================= */}
          <div className="border-t border-slate-200 bg-slate-50/70 px-4 py-6 sm:px-6 md:px-8">
            <div className="ml-auto w-full max-w-md space-y-3">
              <div className="flex items-center justify-between text-sm text-slate-600 sm:text-base">
                <span>পণ্যের মূল্য</span>

                <span className="font-semibold text-slate-800">
                  {subtotal.toLocaleString("bn-BD")}৳
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-600 sm:text-base">
                <span className="flex items-center gap-2">
                  <Truck size={16} className="text-blue-600" />
                  ডেলিভারি চার্জ
                </span>

                <span className="font-semibold text-slate-800">
                  {deliveryCharge.toLocaleString("bn-BD")}৳
                </span>
              </div>

              <div className="my-4 border-t border-dashed border-slate-300" />

              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-slate-900 sm:text-lg">
                  সর্বমোট
                </span>

                <span className="text-2xl font-black text-blue-600 sm:text-3xl">
                  {total.toLocaleString("bn-BD")}৳
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PAYMENT ================= */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_15px_45px_rgba(15,23,42,0.06)] sm:p-6 md:p-8">
          {/* Payment Header */}
          <div className="mb-5 flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <CreditCard size={21} />
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                পেমেন্ট মেথড
              </h3>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                আপনার পছন্দের পেমেন্ট পদ্ধতি নির্বাচন করুন
              </p>
            </div>
          </div>

          {/* Payment Options */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {paymentOptions.map((option) => {
              const Icon = option.icon;
              const isSelected = paymentMethod === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setPaymentMethod(option.id)}
                  className={`relative flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-all duration-300 ${
                    isSelected
                      ? "border-blue-500 bg-blue-50 shadow-md shadow-blue-100"
                      : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                  }`}
                >
                  {/* Radio */}
                  <div
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                      isSelected ? "border-blue-600" : "border-slate-300"
                    }`}
                  >
                    {isSelected && (
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                    )}
                  </div>

                  {/* Icon */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Icon size={19} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-slate-800">
                        {option.title}
                      </p>

                      {option.id === "cod" && (
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                          {option.badge}
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {option.description}
                    </p>
                  </div>

                  {/* Brand Badge */}
                  {option.id !== "cod" && (
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-black text-white ${
                        option.id === "bkash" ? "bg-pink-600" : "bg-orange-500"
                      }`}
                    >
                      {option.badge}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Selected Payment Description */}
          <div className="mt-4 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
            {paymentMethod === "cod" && (
              <div className="flex gap-3">
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    ক্যাশ অন ডেলিভারি নির্বাচিত
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                    প্রোডাক্ট হাতে পাওয়ার পর ডেলিভারি রাইডারকে পেমেন্ট করুন।
                  </p>
                </div>
              </div>
            )}

            {paymentMethod === "bkash" && (
              <div className="flex gap-3">
                <Smartphone
                  size={19}
                  className="mt-0.5 shrink-0 text-pink-600"
                />

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    bKash পেমেন্ট নির্বাচিত
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                    অর্ডার কনফার্ম করার পর bKash পেমেন্টের নির্দেশনা দেওয়া হবে।
                  </p>
                </div>
              </div>
            )}

            {paymentMethod === "nagad" && (
              <div className="flex gap-3">
                <Smartphone
                  size={19}
                  className="mt-0.5 shrink-0 text-orange-500"
                />

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Nagad পেমেন্ট নির্বাচিত
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                    অর্ডার কনফার্ম করার পর Nagad পেমেন্টের নির্দেশনা দেওয়া হবে।
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================= TRUST FEATURES ================= */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <ShieldCheck size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">নিরাপদ অর্ডার</p>
              <p className="text-xs text-slate-500">Secure Checkout</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Truck size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">দ্রুত ডেলিভারি</p>
              <p className="text-xs text-slate-500">Fast Delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <MapPin size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">সারা বাংলাদেশ</p>
              <p className="text-xs text-slate-500">Nationwide Delivery</p>
            </div>
          </div>
        </div>

        {/* ================= PLACE ORDER ================= */}
        <div className="mt-6">
          <button
            type="button"
            className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-5 py-4 text-base font-extrabold text-white shadow-xl shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-blue-200 active:translate-y-0 sm:py-5 sm:text-lg"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              অর্ডারটি কনফার্ম করুন
              <span className="rounded-lg bg-white/15 px-2.5 py-1 text-sm backdrop-blur sm:text-base">
                {total.toLocaleString("bn-BD")}৳
              </span>
            </span>

            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-500 sm:text-sm">
            <LockKeyhole size={14} className="text-emerald-600" />
            আপনার তথ্য নিরাপদ ও সুরক্ষিত থাকবে
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
