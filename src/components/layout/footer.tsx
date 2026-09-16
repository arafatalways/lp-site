import {
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* ================= TOP SECTION ================= */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT - BRAND INFO */}
          <div className="w-full lg:max-w-2xl">
            <h2 className="text-2xl font-bold text-black sm:text-3xl">
              Baby Nest Fashion
            </h2>

            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-gray-800 sm:text-base">
              Comfortable, stylish, and safe clothing for your little ones.
              Quality you can trust, prices you'll love.
            </p>

            {/* Contact Info */}
            <div className="mt-5 space-y-3 text-sm font-semibold text-gray-800 sm:text-base">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#b58a4b]" />
                <span>
                  Address: Near Kutubkhali Nur Mosque, Kutubkhali, Jatrabari,
                  Dhaka-1236
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="shrink-0 text-[#b58a4b]" />
                <span>Call Us: +8801897113294</span>
              </div>

              <div className="flex items-center gap-3 break-all">
                <FaEnvelope className="shrink-0 text-[#b58a4b]" />
                <span>support@babynestfashion.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  border border-gray-300
                  text-lg text-black
                  transition-all duration-300
                  hover:border-[#1877F2]
                  hover:bg-[#1877F2]
                  hover:text-white
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  border border-gray-300
                  text-lg text-black
                  transition-all duration-300
                  hover:border-[#25D366]
                  hover:bg-[#25D366]
                  hover:text-white
                "
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* RIGHT - PAYMENT METHODS */}
          <div
            className="
              flex w-full
              flex-wrap
              items-center
              justify-center
              gap-7
              sm:gap-10
              lg:w-auto
              lg:justify-end
              lg:pt-2
            "
          >
            <img
              src="/images/cash-on-delivery.png"
              alt="Cash On Delivery"
              className="h-12 w-auto object-contain sm:h-14"
            />

            <img
              src="/images/bkash.png"
              alt="bKash"
              className="h-10 w-auto object-contain sm:h-12"
            />

            <img
              src="/images/nagad.png"
              alt="Nagad"
              className="h-10 w-auto object-contain sm:h-12"
            />

            <img
              src="/images/rocket.png"
              alt="Rocket"
              className="h-10 w-auto object-contain sm:h-12"
            />
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-9 h-px w-full bg-gray-300" />

        {/* ================= NAVIGATION ================= */}
        <nav
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-7
            gap-y-4
            text-sm
            font-bold
            text-gray-900
            sm:text-base
          "
        >
          <a href="#" className="transition-colors hover:text-[#b58a4b]">
            About Us
          </a>

          <a href="#" className="transition-colors hover:text-[#b58a4b]">
            Contact Us
          </a>

          <a href="#" className="transition-colors hover:text-[#b58a4b]">
            Privacy Policy
          </a>

          <a href="#" className="transition-colors hover:text-[#b58a4b]">
            Refund Policy
          </a>

          <a href="#" className="transition-colors hover:text-[#b58a4b]">
            Terms & Conditions
          </a>
        </nav>

        {/* ================= COPYRIGHT ================= */}
        <div className="mt-7 text-center text-sm font-semibold text-gray-700 sm:text-base">
          © <span className="text-[#b58a4b]">2026 Yeasin Arafat.</span> All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
