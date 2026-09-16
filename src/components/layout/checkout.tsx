import { useState } from "react";

const Checkout = () => {
  const products = [
    {
      id: 1,
      image: "/images/lp-1.jpg",
      name: "মায়াবতী ফ্লোরাল টপ এন্ড প্লাজু ( ১ সেটের কম্বো ) - কোড ০৪",
      price: 1050,
    },
    {
      id: 2,
      image: "/images/lp-1.jpg",
      name: "মায়াবতী ফ্লোরাল টপ এন্ড প্লাজু ( ১ সেটের কম্বো ) - কোড ০৫",
      price: 1050,
    },
    {
      id: 3,
      image: "/images/lp-1.jpg",
      name: "মায়াবতী ফ্লোরাল টপ এন্ড প্লাজু ( ১ সেটের কম্বো ) - কোড ০৬",
      price: 1050,
    },
  ];

  const [selectedProducts, setSelectedProducts] = useState<number[]>([1, 2]);

  const [quantities, setQuantities] = useState<Record<number, number>>({
    1: 1,
    2: 1,
    3: 1,
  });

  const [age, setAge] = useState("");

  // Product select / unselect
  const toggleProduct = (id: number) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  // Increase quantity
  const increaseQuantity = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  // Decrease quantity
  const decreaseQuantity = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] - 1),
    }));
  };

  return (
    <section className="min-h-screen w-full bg-white px-3 py-6 sm:px-5 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* ================= PRODUCTS ================= */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.id}
              className={`
                flex
                items-center
                gap-3
                rounded-lg
                border
                p-3
                transition
                duration-200
                sm:gap-4
                sm:p-4
                ${
                  selectedProducts.includes(product.id)
                    ? "border-gray-400 bg-gray-50"
                    : "border-gray-300 bg-white"
                }
              `}
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={selectedProducts.includes(product.id)}
                onChange={() => toggleProduct(product.id)}
                className="h-5 w-5 shrink-0 cursor-pointer accent-[#a86b20]"
              />

              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-16 w-16 shrink-0 rounded-md object-cover sm:h-20 sm:w-20"
              />

              {/* Product Info */}
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold leading-6 text-gray-900 sm:text-base md:text-lg">
                  {product.name}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-4">
                  {/* Quantity */}
                  <div className="flex h-8 items-center overflow-hidden rounded border border-gray-300">
                    {/* Minus */}
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(product.id)}
                      className="h-full w-8 bg-gray-100 text-lg text-gray-600 transition hover:bg-gray-200"
                    >
                      −
                    </button>

                    {/* Quantity */}
                    <span className="flex h-full w-10 items-center justify-center border-x border-gray-300 text-sm font-semibold">
                      {quantities[product.id]}
                    </span>

                    {/* Plus */}
                    <button
                      type="button"
                      onClick={() => increaseQuantity(product.id)}
                      className="h-full w-8 bg-gray-100 text-lg text-gray-600 transition hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>

                  {/* Price */}
                  <span className="text-sm font-bold text-gray-900 sm:text-base">
                    {(product.price * quantities[product.id]).toLocaleString(
                      "bn-BD",
                    )}
                    ৳
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BILLING ================= */}
        <div className="mt-10 max-w-7xl">
          <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
            Billing details
          </h2>

          {/* ================= SIZE ================= */}
          <div className="mb-7">
            <p className="mb-3 text-sm font-medium text-gray-800 sm:text-base">
              সাইজ হবে? <span className="text-red-500">*</span>
            </p>

            <div className="space-y-3">
              {[
                "৬-৭ বছর",
                "৮-৯ বছর",
                "১০-১১ বছর",
                "১২-১৩ বছর",
                "১৪-১৫ বছর",
              ].map((item) => (
                <label
                  key={item}
                  className="flex cursor-pointer items-center gap-2 text-sm text-gray-800 sm:text-base"
                >
                  <input
                    type="radio"
                    name="age"
                    value={item}
                    checked={age === item}
                    onChange={(e) => setAge(e.target.value)}
                    className="h-4 w-4 accent-[#a86b20]"
                  />

                  {item}

                  <span className="text-red-500">*</span>
                </label>
              ))}
            </div>
          </div>

          {/* ================= EXTRA SIZE ================= */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-800 sm:text-base">
              এক্সট্রা অতিরিক্ত সাইজ লাগলে নিচে লিখে দিন অথবা খালি রাখুন।
              (optional)
            </label>

            <textarea
              rows={3}
              className="
                w-full
                rounded-lg
                border-2
                border-gray-300
                px-4
                py-3
                text-sm
                outline-none
                transition
                focus:border-[#a86b20]
                sm:text-base
              "
            />
          </div>

          {/* ================= NAME ================= */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-800 sm:text-base">
              আপনার নামঃ <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              className="
                w-full
                rounded-lg
                border-2
                border-gray-300
                px-4
                py-3
                text-sm
                outline-none
                transition
                focus:border-[#a86b20]
                sm:text-base
              "
            />
          </div>

          {/* ================= PHONE ================= */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-800 sm:text-base">
              ফোন নাম্বারঃ <span className="text-red-500">*</span>
            </label>

            <input
              type="tel"
              className="
                w-full
                rounded-lg
                border-2
                border-gray-300
                px-4
                py-3
                text-sm
                outline-none
                transition
                focus:border-[#a86b20]
                sm:text-base
              "
            />
          </div>

          {/* ================= ADDRESS ================= */}
          <div className="mb-7">
            <label className="mb-2 block text-sm font-medium text-gray-800 sm:text-base">
              ঠিকানাঃ <span className="text-red-500">*</span>
            </label>

            <textarea
              rows={3}
              className="
                w-full
                rounded-lg
                border-2
                border-gray-300
                px-4
                py-3
                text-sm
                outline-none
                transition
                focus:border-[#a86b20]
                sm:text-base
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
