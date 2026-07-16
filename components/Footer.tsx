import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Church Info */}
        <div>
          <Image
            src="/images/logo.png"
            alt="Omega Fire Ministries Logo"
            width={100}
            height={100}
            className="mb-4"
          />

          <h3 className="text-2xl font-bold">
            Omega Fire Ministries
          </h3>

          <p className="text-yellow-400">
            Porto-Novo RB
          </p>

          <p className="mt-4 text-gray-300 leading-7">
            Raising men and women of fire through the Word of God,
            prayer, worship, and the demonstration of God's power.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
            <li><a href="#gallery" className="hover:text-yellow-400 transition">Gallery</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Service Times */}
        <div>
          <h3 className="text-xl font-bold mb-5">
            Service Times
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>Sunday Celebration Service – 8:00 AM</li>
            <li>Tuesday Bible Study – 6:00 PM</li>
            <li>Friday Solution Service – 6:00 PM</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-5">
            Contact
          </h3>

          <div className="space-y-4 text-gray-300">

            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
              <span>
                Agata, Opposite Agata Market,
                <br />
                Porto-Novo, Benin Republic
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={20} className="text-yellow-400" />
              <span>+229 98 67 90 39</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20} className="text-yellow-400" />
              <span>info@ofmportonovo.org</span>
            </div>

          </div>

          {/* Social Media */}
          <div className="flex gap-5 mt-8">

            <a
              href="https://www.facebook.com/profile.php?id=100091254765632"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF size={28} />
            </a>

            <a
              href="https://www.youtube.com/@esangbedoelliot7449"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition duration-300"
              aria-label="YouTube"
            >
              <FaYoutube size={28} />
            </a>

            <a
              href="https://wa.me/22998679039"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={28} />
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-blue-800 mt-12 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} Omega Fire Ministries Porto-Novo RB. All Rights Reserved.
      </div>
    </footer>
  );
}