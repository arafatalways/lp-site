import {
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import {
  ArrowRight,
  Clock,
  Headphones,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:px-8 lg:px-10 lg:py-14">
        {/* ================= TOP CONTACT BANNER ================= */}
        <div className="relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 p-5 shadow-xl shadow-blue-100 sm:p-7 lg:p-8">
          {/* Decorative */}
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-white/5" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold tracking-wider text-blue-50">
                BABY NEST FASHION
              </span>

              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                আপনার সন্তানের জন্য
                <br className="sm:hidden" /> সুন্দর পোশাকের ঠিকানা
              </h2>

              <p className="mt-2 text-sm leading-6 text-blue-100 sm:text-base">
                মানসম্মত পোশাক, সহজ অর্ডার এবং বিশ্বস্ত সার্ভিস—সবকিছু এক
                জায়গায়।
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="tel:+8801897113294"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Phone size={17} />
                কল করুন
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
              >
                <FaWhatsapp size={17} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:gap-12">
          {/* ================= BRAND ================= */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-black text-white shadow-lg shadow-blue-200">
                BN
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Baby Nest Fashion
                </h3>

                <p className="text-xs font-medium text-blue-600">
                  Fashion for Little Ones
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
              Comfortable, stylish, and safe clothing for your little ones.
              আমাদের লক্ষ্য হলো ভালো মানের শিশুদের পোশাক সহজে ও সুন্দরভাবে আপনার
              কাছে পৌঁছে দেওয়া।
            </p>

            {/* Social */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                Follow Us
              </p>

              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-100"
                >
                  <FaFacebookF size={16} />
                </a>

                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-100"
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <div className="mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Contact
              </span>

              <h3 className="mt-1 text-xl font-extrabold text-slate-900">
                যোগাযোগ করুন
              </h3>
            </div>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-400">ঠিকানা</p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Near Kutubkhali Nur Mosque, Kutubkhali, Jatrabari,
                    Dhaka-1236
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-400">ফোন</p>

                  <p className="mt-1 text-sm font-bold text-slate-700">
                    +8801897113294
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <Mail size={17} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-400">ইমেইল</p>

                  <p className="mt-1 break-all text-sm font-semibold text-slate-700">
                    support@babynestfashion.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <div className="mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Information
              </span>

              <h3 className="mt-1 text-xl font-extrabold text-slate-900">
                প্রয়োজনীয় লিংক
              </h3>
            </div>

            <nav className="space-y-3">
              {[
                "About Us",
                "Contact Us",
                "Privacy Policy",
                "Refund Policy",
                "Terms & Conditions",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="group flex items-center justify-between rounded-lg px-2 py-1.5 text-sm font-medium text-slate-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  <span>{item}</span>

                  <ArrowRight
                    size={15}
                    className="translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-8 border-t border-slate-200 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="text-xs font-medium text-slate-500 sm:text-sm">
              © 2026{" "}
              <span className="font-bold text-blue-600">Yeasin Arafat</span>.
              All Rights Reserved.
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <Clock size={14} />
              Baby Nest Fashion
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
