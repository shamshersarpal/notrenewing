"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const closeModals = () => {
    setShowSignIn(false);
    setShowRegister(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white py-2 shadow">
        <nav className="w-full z-20">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto lg:p-4 py-1 p-2">
            <Link href="/" passHref legacyBehavior>
              <a className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="lg:text-2xl text-[16px] font-bold text-brand-blue">
                  NotRenewing.com
                </span>
              </a>
            </Link>

            <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowSignIn(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 py-2 hover:bg-[#f48134] hover:text-white bg-white cursor-pointer"
                >
                  Sign In
                </button>

                <button
                  onClick={() => setShowRegister(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 py-2 bg-[#0f366b] text-white hover:bg-[#0f366b]/90 cursor-pointer"
                >
                  Register
                </button>
              </div>

              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-sticky"
                aria-expanded={isOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`items-center justify-between ${
                isOpen ? "block" : "hidden"
              } w-full md:flex md:w-auto md:order-1`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-8 md:flex-row md:mt-0">
                <li>
                  <Link href="/" passHref legacyBehavior>
                    <a
                      onClick={() => handleItemClick("Home")}
                      className={`block py-2 px-3 rounded-sm md:p-0 ${
                        activeItem === "Home"
                          ? "text-blue-600 font-semibold"
                          : "text-gray-800"
                      }`}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="browse-domains" passHref legacyBehavior>
                    <a
                      onClick={() => handleItemClick("Browse")}
                      className={`block py-2 px-3 rounded-sm md:p-0 ${
                        activeItem === "Browse"
                          ? "text-blue-600 font-semibold"
                          : "text-gray-800"
                      }`}
                    >
                      Browse Domains
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref legacyBehavior>
                    <a
                      onClick={() => handleItemClick("HowItWorks")}
                      className={`block py-2 px-3 rounded-sm md:p-0 ${
                        activeItem === "HowItWorks"
                          ? "text-blue-600 font-semibold"
                          : "text-gray-800"
                      }`}
                    >
                      How It Works
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Sign In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80  ">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
            <div className="flex flex-col space-y-1.5 text-center sm:text-left">
              <h2
                id="radix-:ro:"
                className="text-lg font-semibold leading-none tracking-tight"
              >
                Sign In
              </h2>
              <p id="radix-:rp:" className="text-sm   text-[#64748b]">
                Enter your credentials to access your account
              </p>
            </div>

            <button
              type="button"
              onClick={closeModals}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x h-4 w-4"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Close</span>
            </button>

            <form className="space-y-4 mt-10">
              {/* Email Field */}
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full h-10 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f366b]"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-1">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  className="w-full h-10 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f366b]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-10 px-4 py-2 text-sm font-medium text-white bg-[#0f366b] rounded-lg   transition cursor-pointer"
              >
                Sign In
              </button>

              {/* Forgot Password */}
              <button
                type="button"
                className="w-full text-sm text-[#0f366b] hover:underline mt-1 cursor-pointer"
              >
                Forgot your password?
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegister && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 ">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
            <div className="flex flex-col space-y-1.5 text-center sm:text-left">
              <h2
                id="radix-:ro:"
                className="text-lg font-semibold leading-none tracking-tight"
              >
                Create an Account
              </h2>
              <p id="radix-:rp:" className="text-sm text-[#64748b]">
                Register to list your expiring domains
              </p>
            </div>

            <button
              type="button"
              onClick={closeModals}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x h-4 w-4"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Close</span>
            </button>

            <form className="space-y-4 mt-10">
              {/* Email Field */}
              <div className="space-y-1">
                <label
                  htmlFor="Full Name"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  required
                  className="w-full h-10 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f366b]"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full h-10 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f366b]"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-1">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  className="w-full h-10 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f366b]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-10 px-4 py-2 text-sm font-medium text-white bg-[#0f366b] rounded-lg   transition cursor-pointer"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
