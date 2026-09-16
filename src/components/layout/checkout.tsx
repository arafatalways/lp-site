import { useState } from "react";
import {
  Check,
  ChevronRight,
  MapPin,
  Minus,
  Phone,
  Plus,
  ShoppingBag,
  User,
  Ruler,
  ShieldCheck,
  Truck,
  Headphones,
} from "lucide-react";

const Checkout = () => {
  // ================= PRODUCTS =================
  const products = [
    {
      id: 1,
      image: "/images/lp-1.jpg",
      name: "মায়াবতী ফ্লোরাল টপ এন্ড প্লাজু",
      code: "কোড ০৪",
      price: 1050,
    },
    {
      id: 2,
      image: "/images/lp-1.jpg",
      name: "মায়াবতী ফ্লোরাল টপ এন্ড প্লাজু",
      code: "কোড ০৫",
      price: 1050,
    },
    {
      id: 3,
      image: "/images/lp-1.jpg",
      name: "মায়াবতী ফ্লোরাল টপ এন্ড প্লাজু",
      code: "কোড ০৬",
      price: 1050,
    },
  ];

  // ================= SIZES =================
  const sizes = ["৬-৭ বছর", "৮-৯ বছর", "১০-১১ বছর", "১২-১৩ বছর", "১৪-১৫ বছর"];

  // ================= STATES =================
  const [selectedProducts, setSelectedProducts] = useState<number[]>([1, 2]);

  const [quantities, setQuantities] = useState<Record<number, number>>({
    1: 1,
    2: 1,
    3: 1,
  });

  const [age, setAge] = useState("");

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [address, setAddress] = useState("");

  const [note, setNote] = useState("");

  // ================= SELECT PRODUCT =================
  const toggleProduct = (id: number) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  // ================= INCREASE QUANTITY =================
  const increaseQuantity = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  // ================= DECREASE QUANTITY =================
  const decreaseQuantity = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] - 1),
    }));
  };

  // ================= SELECTED ITEMS =================
  const selectedItems = products.filter((product) =>
    selectedProducts.includes(product.id),
  );

  // ================= SUBTOTAL =================
  const subtotal = selectedItems.reduce(
    (total, product) => total + product.price * quantities[product.id],
    0,
  );

  // ================= DELIVERY CHARGE =================
  const deliveryCharge = 30;

  // ================= TOTAL =================
  const total = subtotal + deliveryCharge;

  // ================= ORDER =================
  const handleOrder = () => {
    if (selectedItems.length === 0) {
      alert("দয়া করে অন্তত একটি প্রোডাক্ট নির্বাচন করুন।");
      return;
    }

    if (!age) {
      alert("দয়া করে সাইজ নির্বাচন করুন।");
      return;
    }

    if (!name.trim()) {
      alert("দয়া করে আপনার নাম লিখুন।");
      return;
    }

    if (!phone.trim()) {
      alert("দয়া করে আপনার ফোন নাম্বার লিখুন।");
      return;
    }

    if (!address.trim()) {
      alert("দয়া করে আপনার ডেলিভারি ঠিকানা লিখুন।");
      return;
    }

    alert("আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে।");
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10 lg:py-20">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <ShoppingBag className="h-3.5 w-3.5" />
            </span>

            <span className="text-xs font-bold tracking-wide text-blue-700 sm:text-sm">
              SECURE CHECKOUT
            </span>
          </div>

          <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
            আপনার পছন্দের পণ্য{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              অর্ডারের জন্য প্রস্তুত
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7 md:text-base">
            পছন্দের প্রোডাক্ট নির্বাচন করে আপনার সঠিক তথ্য দিয়ে অর্ডার সম্পন্ন
            করুন।
          </p>
        </div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.45fr_0.8fr] lg:items-start lg:gap-8">
          {/* ===================================================
              LEFT SIDE
          ==================================================== */}

          <div className="space-y-6">
            {/* =================================================
                PRODUCTS
            ================================================== */}

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
              {/* Header */}

              <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-5 sm:px-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20">
                    <ShoppingBag className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 sm:text-lg">
                      আপনার পছন্দের প্রোডাক্ট
                    </h3>

                    <p className="mt-0.5 text-[10px] text-slate-500 sm:text-xs">
                      যে প্রোডাক্ট অর্ডার করতে চান নির্বাচন করুন
                    </p>
                  </div>
                </div>
              </div>

              {/* Product List */}

              <div className="space-y-3 p-4 sm:p-6">
                {products.map((product) => {
                  const isSelected = selectedProducts.includes(product.id);

                  return (
                    <div
                      key={product.id}
                      className={`group relative overflow-hidden rounded-2xl border p-3 transition-all duration-300 sm:p-4 ${
                        isSelected
                          ? "border-blue-300 bg-gradient-to-r from-blue-50/80 to-indigo-50/50 shadow-sm"
                          : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Checkbox */}

                        <button
                          type="button"
                          onClick={() => toggleProduct(product.id)}
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 transition-all duration-300 ${
                            isSelected
                              ? "border-blue-600 bg-blue-600 text-white"
                              : "border-slate-300 bg-white text-transparent hover:border-blue-400"
                          }`}
                          aria-label={`Select ${product.name}`}
                        >
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </button>

                        {/* Image */}

                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-24 sm:w-24">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                          <span className="absolute bottom-1.5 left-1.5 rounded-md bg-slate-900/70 px-1.5 py-0.5 text-[9px] font-bold text-white backdrop-blur-sm">
                            {product.code}
                          </span>
                        </div>

                        {/* Product Info */}

                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-extrabold leading-5 text-slate-900 sm:text-base">
                            {product.name}
                          </h4>

                          <p className="mt-1 text-[10px] font-semibold text-blue-600 sm:text-xs">
                            {product.code} • ১ সেটের কম্বো
                          </p>

                          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                            {/* Quantity */}

                            <div className="flex h-8 items-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                              <button
                                type="button"
                                onClick={() => decreaseQuantity(product.id)}
                                className="flex h-full w-8 items-center justify-center text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>

                              <span className="flex h-full min-w-9 items-center justify-center border-x border-slate-200 px-2 text-xs font-extrabold text-slate-800">
                                {quantities[product.id]}
                              </span>

                              <button
                                type="button"
                                onClick={() => increaseQuantity(product.id)}
                                className="flex h-full w-8 items-center justify-center text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>

                            {/* Price */}

                            <span className="text-sm font-black text-blue-700 sm:text-base">
                              {(
                                product.price * quantities[product.id]
                              ).toLocaleString("bn-BD")}
                              ৳
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                BILLING DETAILS
            ================================================== */}

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
              {/* Header */}

              <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-5 sm:px-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20">
                    <User className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 sm:text-lg">
                      Billing Details
                    </h3>

                    <p className="mt-0.5 text-[10px] text-slate-500 sm:text-xs">
                      আপনার সঠিক তথ্য প্রদান করুন
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 p-5 sm:p-7">
                {/* ================= SIZE ================= */}

                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <Ruler className="h-4 w-4 text-blue-600" />

                    <p className="text-sm font-extrabold text-slate-800 sm:text-base">
                      সাইজ নির্বাচন করুন
                      <span className="ml-1 text-red-500">*</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {sizes.map((item) => {
                      const selected = age === item;

                      return (
                        <label
                          key={item}
                          className={`relative flex cursor-pointer items-center gap-2 rounded-xl border p-3 transition-all duration-300 ${
                            selected
                              ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm"
                              : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-slate-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="age"
                            value={item}
                            checked={age === item}
                            onChange={(e) => setAge(e.target.value)}
                            className="sr-only"
                          />

                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                              selected ? "border-blue-600" : "border-slate-300"
                            }`}
                          >
                            {selected && (
                              <span className="h-2 w-2 rounded-full bg-blue-600" />
                            )}
                          </span>

                          <span className="text-xs font-bold sm:text-sm">
                            {item}
                          </span>

                          {selected && (
                            <Check className="ml-auto h-4 w-4 text-blue-600" />
                          )}
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* ================= EXTRA NOTE ================= */}

                <div>
                  <label className="mb-2 block text-sm font-extrabold text-slate-800 sm:text-base">
                    অতিরিক্ত সাইজ / বিশেষ নির্দেশনা
                    <span className="ml-1 text-[10px] font-medium text-slate-400 sm:text-xs">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="প্রয়োজনে এখানে লিখুন..."
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 sm:text-base"
                  />
                </div>

                {/* ================= NAME ================= */}

                <div>
                  <label className="mb-2 block text-sm font-extrabold text-slate-800 sm:text-base">
                    আপনার নাম
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="আপনার পূর্ণ নাম লিখুন"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 sm:text-base"
                    />
                  </div>
                </div>

                {/* ================= PHONE ================= */}

                <div>
                  <label className="mb-2 block text-sm font-extrabold text-slate-800 sm:text-base">
                    ফোন নাম্বার
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 sm:text-base"
                    />
                  </div>
                </div>

                {/* ================= ADDRESS ================= */}

                <div>
                  <label className="mb-2 block text-sm font-extrabold text-slate-800 sm:text-base">
                    ডেলিভারি ঠিকানা
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 h-4 w-4 text-slate-400" />

                    <textarea
                      rows={3}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="বাড়ি/রোড, এলাকা, থানা, জেলা লিখুন"
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 sm:text-base"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              RIGHT SIDE
          ==================================================== */}

          <div className="lg:sticky lg:top-6">
            <div className="space-y-5">
              {/* =================================================
                  ORDER SUMMARY
              ================================================== */}

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.08)]">
                {/* Header */}

                <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-5 py-6 text-white sm:px-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100">
                        ORDER SUMMARY
                      </p>

                      <h3 className="mt-1 text-xl font-black sm:text-2xl">
                        অর্ডার সামারি
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                      <ShoppingBag className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Products */}

                <div className="p-5 sm:p-6">
                  {selectedItems.length > 0 ? (
                    <div className="space-y-3">
                      {selectedItems.map((product) => (
                        <div
                          key={product.id}
                          className="group flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/40"
                        >
                          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            <span className="absolute bottom-1 left-1 rounded-md bg-slate-900/75 px-1.5 py-0.5 text-[8px] font-bold text-white">
                              {product.code}
                            </span>
                          </div>

                          <div className="min-w-0 flex-1">
                            <h4 className="line-clamp-2 text-xs font-extrabold leading-5 text-slate-800">
                              {product.name}
                            </h4>

                            <div className="mt-1.5 flex items-center justify-between gap-2">
                              <span className="text-[10px] font-semibold text-slate-400">
                                Qty: {quantities[product.id]}
                              </span>

                              <span className="text-sm font-black text-blue-700">
                                {(
                                  product.price * quantities[product.id]
                                ).toLocaleString("bn-BD")}
                                ৳
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-2xl bg-slate-50 px-4 py-8 text-center">
                      <ShoppingBag className="mx-auto h-8 w-8 text-slate-300" />

                      <p className="mt-2 text-sm font-bold text-slate-500">
                        কোনো প্রোডাক্ট নির্বাচন করা হয়নি
                      </p>
                    </div>
                  )}

                  {/* Price Breakdown */}

                  <div className="mt-6 border-t border-dashed border-slate-200 pt-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">পণ্যের মূল্য</span>

                        <span className="font-bold text-slate-800">
                          {subtotal.toLocaleString("bn-BD")}৳
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-slate-500">
                          <Truck className="h-4 w-4 text-blue-500" />
                          ডেলিভারি চার্জ
                        </span>

                        <span className="font-bold text-slate-700">
                          {deliveryCharge.toLocaleString("bn-BD")}৳
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Total */}

                  <div className="mt-5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-slate-500">
                          সর্বমোট মূল্য
                        </p>

                        <p className="mt-1 text-lg font-black text-slate-900">
                          Total
                        </p>
                      </div>

                      <span className="text-2xl font-black text-blue-700">
                        {total.toLocaleString("bn-BD")}৳
                      </span>
                    </div>
                  </div>

                  {/* Order Button */}

                  <button
                    type="button"
                    onClick={handleOrder}
                    className="group mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-200 active:translate-y-0 sm:text-base"
                  >
                    <ShoppingBag className="h-5 w-5" />

                    <span>অর্ডার কনফার্ম করুন</span>

                    <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* =================================================
                  WHY CHOOSE US
              ================================================== */}

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] sm:p-6">
                <div className="mb-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
                    WHY CHOOSE US
                  </p>

                  <h3 className="mt-1 text-lg font-extrabold text-slate-900">
                    কেন আমাদের থেকে কিনবেন?
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Feature 1 */}

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <ShieldCheck className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        নিরাপদ অর্ডার
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        আপনার তথ্য নিরাপদ থাকবে
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <Truck className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        দ্রুত ডেলিভারি
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        দেশের বিভিন্ন স্থানে ডেলিভারি
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Check className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        কোয়ালিটি নিশ্চিত
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        মানসম্মত পণ্য সরবরাহ
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  DELIVERY INFORMATION
              ================================================== */}

              <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
                    <Truck className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 sm:text-base">
                      ডেলিভারি সম্পর্কিত তথ্য
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      অর্ডার কনফার্ম করার পর আপনার দেওয়া ঠিকানায় পণ্য পাঠানো
                      হবে।
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-xl border border-blue-100 bg-white p-3 text-center">
                    <p className="text-[10px] font-semibold text-slate-400">
                      Delivery
                    </p>

                    <p className="mt-1 text-xs font-extrabold text-blue-700">
                      Nationwide
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-white p-3 text-center">
                    <p className="text-[10px] font-semibold text-slate-400">
                      Payment
                    </p>

                    <p className="mt-1 text-xs font-extrabold text-emerald-600">
                      Secure
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  CUSTOMER SUPPORT
              ================================================== */}

              <div className="rounded-3xl bg-slate-900 p-5 text-white shadow-lg sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-400">
                    <Headphones className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      অর্ডার করতে সমস্যা হচ্ছে?
                    </p>

                    <h3 className="mt-1 text-base font-extrabold">
                      আমাদের সাথে যোগাযোগ করুন
                    </h3>
                  </div>
                </div>

                <a
                  href="tel:+8801897113294"
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-extrabold text-slate-900 transition-all duration-300 hover:bg-blue-50"
                >
                  <Phone className="h-4 w-4 text-blue-600" />
                  +8801897113294
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM SECURITY NOTE
        ====================================================== */}

        <div className="mt-7 flex justify-center sm:mt-9">
          <div className="flex max-w-full items-center gap-2 rounded-2xl border border-blue-100 bg-white/80 px-4 py-3 text-center shadow-sm backdrop-blur-md sm:px-6">
            <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-500" />

            <p className="text-[10px] font-semibold leading-5 text-slate-500 sm:text-xs md:text-sm">
              আপনার তথ্য নিরাপদ থাকবে • সঠিক তথ্য দিয়ে অর্ডার সম্পন্ন করুন
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
