import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F2747] text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Copyright */}
        <p className="text-sm md:text-base">
          © 2026 Dr. Sujathakumari Memorial Library. All Rights Reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center items-center gap-4 mt-6">
          {/* Facebook */}
          <a
            href="https://facebook.com/your-library"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 flex items-center justify-center rounded-full
                       bg-white/10 text-white
                       hover:bg-[#C8A35D] hover:text-[#0F2747]
                       transition-all duration-300"
          >
            <FaFacebookF size={17} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/gran.dhashala?igsi=MW52azhrb3c3YTVzZQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 flex items-center justify-center rounded-full
                       bg-white/10 text-white
                       hover:bg-[#C8A35D] hover:text-[#0F2747]
                       transition-all duration-300"
          >
            <FaInstagram size={18} />
          </a>

         

          
        </div>

        {/* Divider */}
        <div className="mt-6 h-px w-24 mx-auto bg-white/10"></div>

        {/* Developer Credit */}
        <p className="mt-4 text-xs md:text-sm text-white/40 tracking-wide">
          Designed &amp; Developed by{" "}
          <a
            href="https://abhinashok.github.io/Abhin_Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white/60 hover:text-[#C8A35D]
                       transition-colors duration-300
                       underline-offset-4 hover:underline"
          >
            Abhin Ashok
          </a>
        </p>

      </div>
    </footer>
  );
}