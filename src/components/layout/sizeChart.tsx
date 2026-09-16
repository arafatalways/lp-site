const SizeChart = () => {
  const sizes = [
    ["৬-৭ বছর", "২৬ ইঞ্চি", "২৮ ইঞ্চি", "২৭ ইঞ্চি"],
    ["৮-৯ বছর", "২৭ ইঞ্চি", "৩০ ইঞ্চি", "২৯ ইঞ্চি"],
    ["১০-১১ বছর", "২৮ ইঞ্চি", "৩২ ইঞ্চি", "৩২ ইঞ্চি"],
    ["১২-১৩ বছর", "৩২ ইঞ্চি", "৩৪ ইঞ্চি", "৩৪ ইঞ্চি"],
    ["১৪-১৫ বছর", "৩৬ ইঞ্চি", "৩৬ ইঞ্চি", "৩৮ ইঞ্চি"],
  ];

  return (
    <section className="w-full bg-white px-4 py-6">
      <div className="mx-auto w-full max-w-[520px]">
        {/* Size Chart */}
        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="bg-[#123b68] text-white">
                <th className="border-r border-white/30 px-2 py-3 text-sm font-bold sm:text-base">
                  📏 সাইজ
                </th>
                <th className="border-r border-white/30 px-2 py-3 text-sm font-bold sm:text-base">
                  👕 জামার লম্বা
                </th>
                <th className="border-r border-white/30 px-2 py-3 text-sm font-bold sm:text-base">
                  👕 বডি
                </th>
                <th className="px-2 py-3 text-sm font-bold sm:text-base">
                  👖 প্যান্টের লম্বা
                </th>
              </tr>
            </thead>

            <tbody>
              {sizes.map((size, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#f4f7fb]"}
                >
                  <td className="border border-gray-200 px-2 py-3 text-sm font-bold text-[#17385f] sm:text-base">
                    👧 {size[0]}
                  </td>

                  <td className="border border-gray-200 px-2 py-3 text-sm text-gray-800 sm:text-base">
                    {size[1]}
                  </td>

                  <td className="border border-gray-200 px-2 py-3 text-sm text-gray-800 sm:text-base">
                    {size[2]}
                  </td>

                  <td className="border border-gray-200 px-2 py-3 text-sm text-gray-800 sm:text-base">
                    {size[3]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="mt-4 text-center text-xs font-medium leading-5 text-gray-700 sm:text-sm">
          ২ ইঞ্চি ও ৩ ইঞ্চি সিলেটে করলে অটোমেটিক ফিটিংস হয়ে যাবে
        </p>
      </div>
    </section>
  );
};

export default SizeChart;
