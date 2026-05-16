import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-white">Spark</span>
            <span style={{ color: "#e94c89" }}>Digi</span>
            <span className="text-gray-400 text-lg ml-1">Services</span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm leading-6">
            SparkDigi Services is a top-tier digital marketing agency in
            Hyderabad. We specialize in SEO, SEM, Social Media Marketing,
            Content Strategy, Website Design, Creative Solutions, and more.
          </p>

          <div className="flex gap-3 mt-6">
            <Link
              href="https://www.facebook.com/people/SparkDigi-Services/61555764844753/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-[#e94c89] hover:text-white transition"
            >
              <FaFacebookF size={14} />
            </Link>

            <Link 
              href="https://www.instagram.com/sparkdigi_services/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-[#e94c89] hover:text-white transition"
            >
              <FaInstagram size={14} />
            </  Link>

            <Link 
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-[#e94c89] hover:text-white transition"
            >
              <FaLinkedinIn size={14} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold relative inline-block">
            Quick Link
            <span className="block w-10 h-[3px] bg-[#e94c89] mt-2"></span>
          </h3>

          <ul className="mt-5 space-y-3 text-gray-400 text-sm">
            <li>
              <Link href="/" className="hover:text-[#e94c89] transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-[#e94c89] transition">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-[#e94c89] transition">
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="hover:text-[#e94c89] transition"
              >
                Services
              </Link>
            </li>

            <li>
              <Link href="/blogs" className="hover:text-[#e94c89] transition">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold relative inline-block">
            Services
            <span className="block w-10 h-[3px] bg-[#e94c89] mt-2"></span>
          </h3>

          <ul className="mt-5 space-y-3 text-gray-400 text-sm">
            <li className="hover:text-[#e94c89] cursor-pointer">
              Logo Design / Trademark Registration
            </li>
            <li className="hover:text-[#e94c89] cursor-pointer">
              Web Development
            </li>
            <li className="hover:text-[#e94c89] cursor-pointer">
              Search Engine Optimization
            </li>
            <li className="hover:text-[#e94c89] cursor-pointer">
              Social Media Marketing
            </li>
            <li className="hover:text-[#e94c89] cursor-pointer">Google Ads</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold relative inline-block">
            Contact
            <span className="block w-10 h-[3px] bg-[#e94c89] mt-2"></span>
          </h3>

          <div className="mt-5 space-y-4 text-gray-400 text-sm">
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#e94c89] mt-1" />
              <span>+91 6300296581, 7995508708</span>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-[#e94c89] mt-1" />
              <span>sparkdigiservices@gmail.com</span>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#e94c89] mt-1" />
              <span>Malkajgiri, Hyderabad</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-white">Spark Digi Services</span>. All rights
        reserved.
      </div>
    </footer>
  );
}
