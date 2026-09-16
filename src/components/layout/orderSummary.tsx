import { useState } from "react";

const OrderSummary = () => {
  const products = [
    {
      id: 1,
      image: "/images/lp-1.jpg",
      name: "মায়াবতী ফ্লোরাল টপ এন্ড প্লাজু ( ১ সেটের কম্বো ) - কোড ০৪",
      price: 1050,
      quantity: 1,
    },
    {
      id: 2,
      image: "/images/lp-1.jpg",
      name: "মায়াবতী ফ্লোরাল টপ এন্ড প্লাজু ( ১ সেটের কম্বো ) - কোড ০৫",
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

  return (
    <section className="w-full bg-white px-3 py-8 sm:px-5 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        {/* ================= ORDER ================= */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-1 border-b border-gray-300 bg-gray-50 px-4 py-4 font-bold sm:grid-cols-[1fr_180px] sm:px-6">
            <h2 className="text-lg sm:text-xl">Your order</h2>

            <span className="hidden text-right sm:block">Subtotal</span>
          </div>

          {/* Products */}
          <div className="divide-y divide-gray-200">
            {products.map((product) => (
              <div
                key={product.id}
                className="
                  grid
                  grid-cols-1
                  gap-4
                  px-4
                  py-5
                  sm:grid-cols-[100px_1fr_180px]
                  sm:items-center
                  sm:px-6
                "
              >
                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    h-24
                    w-24
                    rounded-lg
                    object-cover
                    sm:h-24
                    sm:w-24
                  "
                />

                {/* Product Name */}
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-800 sm:text-base">
                    {product.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="text-left text-sm font-medium text-gray-800 sm:text-right">
                  × {product.quantity} {product.price.toLocaleString("bn-BD")}৳
                </div>
              </div>
            ))}
          </div>

          {/* Subtotal */}
          <div className="flex items-center justify-between border-t border-gray-300 px-4 py-4 text-sm sm:px-6 sm:text-base">
            <span>Subtotal</span>

            <span className="font-semibold">
              {subtotal.toLocaleString("bn-BD")}৳
            </span>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between border-t border-gray-300 px-4 py-4 text-base font-bold sm:px-6 sm:text-lg">
            <span>Total</span>

            <span>{total.toLocaleString("bn-BD")}৳</span>
          </div>
        </div>

        {/* ================= PAYMENT ================= */}
        <div className="mt-6 rounded-xl bg-gray-100 p-4 sm:p-6">
          {/* Cash on Delivery */}
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
              className="h-4 w-4 accent-[#a86b20]"
            />

            <span className="font-semibold text-gray-800">
              ক্যাশ অন ডেলিভারি
            </span>
          </label>

          {paymentMethod === "cod" && (
            <div className="mt-4 rounded-lg bg-white p-4 text-sm text-gray-700">
              প্রোডাক্ট হাতে পেয়ে পরিশোধ করুন।
            </div>
          )}

          {/* bKash */}
          <label className="mt-4 flex cursor-pointer items-center gap-3">
            <input
              type="radio"
              name="payment"
              value="bkash"
              checked={paymentMethod === "bkash"}
              onChange={() => setPaymentMethod("bkash")}
              className="h-4 w-4 accent-[#a86b20]"
            />

            <span className="font-semibold text-gray-800">bKash</span>

            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#e2136e] text-xs font-bold text-white">
              bK
            </div>
          </label>

          {/* Nagad */}
          <label className="mt-4 flex cursor-pointer items-center gap-3">
            <input
              type="radio"
              name="payment"
              value="nagad"
              checked={paymentMethod === "nagad"}
              onChange={() => setPaymentMethod("nagad")}
              className="h-4 w-4 accent-[#a86b20]"
            />

            <span className="font-semibold text-gray-800">Nagad</span>

            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#f15a24] text-xs font-bold text-white">
              N
            </div>
          </label>
        </div>

        {/* ================= PLACE ORDER ================= */}
        <button
          type="button"
          className="
            mt-5
            w-full
            rounded-lg
            bg-[#8c640f]
            px-6
            py-4
            text-base
            font-bold
            text-white
            shadow-md
            transition-all
            duration-300
            hover:bg-[#72500b]
            hover:shadow-lg
            sm:text-lg
          "
        >
          অর্ডার টি প্লেস করুন — {total.toLocaleString("bn-BD")}৳
        </button>
      </div>
    </section>
  );
};

export default OrderSummary;
