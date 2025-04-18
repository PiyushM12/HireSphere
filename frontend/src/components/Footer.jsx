import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#7209b7] text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">HireSphere</h1>
          <p className="text-sm text-gray-200">
            Connecting top talent with leading companies worldwide.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Company</h2>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Resources</h2>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="bg-white text-[#7209b7] p-2 rounded-full hover:bg-gray-100 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-white text-[#7209b7] p-2 rounded-full hover:bg-gray-100 transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="bg-white text-[#7209b7] p-2 rounded-full hover:bg-gray-100 transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="bg-white text-[#7209b7] p-2 rounded-full hover:bg-gray-100 transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-300 mt-10 border-t border-white/20 pt-6">
        © {new Date().getFullYear()} HireSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
