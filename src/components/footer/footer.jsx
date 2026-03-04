// Footer.jsx
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex md:grid-cols-4 justify-between ">

        {/* Logo & Description */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-bold">StreamFlix</h2>
          <p className="text-gray-400 text-sm">
            Watch your favorite movies, shows, and exclusive content anytime, anywhere.
          </p>
        </div>



        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors"><FaLinkedin /></a>
            <a href="#" className="hover:text-white transition-colors"><FaYoutube /></a>
            <a href="#" className="hover:text-white transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition-colors"><FaFacebook /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} StreamFlix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;