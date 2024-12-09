import React from "react";
import { Logo } from "../index";
import { FaFacebook, FaInstagram, FaGithub, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full border-t border-gray-800 my-8">
      <div className="w-full max-w-7xl mx-auto px-6 py-4 md:py-6 grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {/* Left Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">
              <Logo alt="OrbitInk Logo" />
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            OrbitInk - Where ideas come to life. Empowering creators to share, learn, and inspire through their stories.
          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://youtube.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg leading-relaxed text-green-600 font-bold">OrbitInk</h3>
          <p className="text-sm leading-relaxed">
            A modern blogging platform designed for seamless content creation, community engagement, and inspiration sharing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to={"/"}>
              <p  className="text-gray-400 hover:text-white transition-colors">Home</p>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
              <p className="text-gray-400 hover:text-white transition-colors">About Us</p>
              </Link>
            </li>
            <li>
            <Link to={"/"}>
              <p  className="text-gray-400 hover:text-white transition-colors">Privacy Policy</p>
            </Link>
            </li>
            <li>
            <Link to={"/"}>
              <p className="text-gray-400 hover:text-white transition-colors">Contact Us</p>
            </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-white font-semibold mb-3">Follow Us</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            </li>
            <li>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm">
        <p>© {new Date().getFullYear()} OrbitInk. All rights reserved.</p>
        <p>
          Built with <span className="text-red-500">❤️</span> by Ajay
        </p>
      </div>
    </footer>
  );
}

export default Footer;
