import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="
        bg-zinc-100
        py-12
        px-4
        sm:px-6
        md:px-10
        lg:px-20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
        "
      >
        {/* Company Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            E-State
          </h1>

          <p className="mt-4 text-gray-600">
            Find your dream property with trusted real estate solutions.
          </p>

          <p className="mt-4 text-gray-500">
            © 2026 All Rights Reserved
          </p>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Company
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>
              <a
                href="#About"
                className="hover:text-blue-500 transition"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition"
              >
                FAQ's
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Support
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition"
              >
                Support Center
              </a>
            </li>

            <li>
              <a
                href="#Contact"
                className="hover:text-blue-500 transition"
              >
                Contact Us
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition"
              >
                Feedback
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Stay Connected
          </h2>

          <p className="text-gray-600 mb-4">
            Questions and feedback?
            We'd love to hear from you.
          </p>

          <div
            className="
              flex
              items-center
              bg-white
              border
              rounded-lg
              overflow-hidden
            "
          >
            <input
              type="email"
              placeholder="Email address"
              className="
                flex-1
                min-w-0
                px-4
                py-3
                outline-none
              "
            />

            <button
              className="
                bg-blue-500
                hover:bg-blue-600
                text-white
                px-4
                py-4
                transition
              "
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div
        className="
          border-t
          border-gray-300
          mt-10
          pt-6
          text-center
          text-gray-500
          text-sm
        "
      >
        Designed & Developed by E-State Team
      </div>
    </footer>
  );
};

export default Footer;