const ProductCode = () => {
  const products = [
    {
      image: "/images/lp-1.jpg",
      code: "কোড - ০৪",
    },
    {
      image: "/images/lp-1.jpg",
      code: "কোড - ০৫",
    },
    {
      image: "/images/lp-1.jpg",
      code: "কোড - ০৬",
    },
  ];

  return (
    <section className="w-full px-4 py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 md:grid-cols-3 md:gap-8">
        {products.map((product) => (
          <div
            key={product.code}
            className="flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.code}
              className="w-full max-w-[300px] rounded-2xl object-cover"
            />

            <h3 className="mt-2 text-lg font-bold md:text-2xl">
              {product.code}
            </h3>

            <button
              className="
                mt-2
                rounded-sm
                bg-[#a86b20]
                px-4
                py-1
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-[#8b5819]
              "
            >
              অর্ডার করুন
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCode;
