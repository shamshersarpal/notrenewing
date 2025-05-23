"use client";
import { useState } from "react";

export default function DomainSearch() {
  const [condensedView, setCondensedView] = useState(false);

  const handleCondensedToggle = () => {
    setCondensedView(!condensedView);
  };

  return (
    <div className="mb-8 space-y-4">
      <form className="flex flex-col gap-4 md:flex-row md:items-center">
        {/* Input, Selects, and Search Button here */}
      </form>

      <div className="flex justify-end mt-4">
        <div className="flex items-center gap-2">
          <label
            htmlFor="condensed-view"
            className="flex items-center gap-2 text-sm cursor-pointer"
          >
            {/* Visually hidden input */}
            <input
              type="checkbox"
              id="condensed-view"
              className="sr-only"
              checked={condensedView}
              onChange={handleCondensedToggle}
            />
            {/* Custom toggle UI */}
            <div
              className={`relative h-6 w-11 rounded-full transition-colors ${
                condensedView ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-0.5 h-5 w-5 bg-white rounded-full shadow transition-transform ${
                  condensedView
                    ? "translate-x-5 left-0"
                    : "translate-x-0 left-0.5"
                }`}
              />
            </div>

            {/* Icon and label */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500"
            >
              <path d="M3 6h18" />
              <path d="M7 12h10" />
              <path d="M10 18h4" />
            </svg>
            <span>Condensed View</span>
          </label>
        </div>
      </div>

      {/* TAB VIEWS */}
      {condensedView ? (
        <div className="space-y-2">
          <div className="flex items-center justify-between bg-white p-3 rounded-md border hover:shadow-md transition-shadow border-[#e2e8f0] ">
            <div className="flex items-center gap-3 flex-grow">
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-lg truncate">sullyx.com</h3>
                  <div className="flex flex-wrap gap-1">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-brand-orange  text-xs text-white bg-[#ed8936]">
                      Sponsored
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-brand-blue text-white text-xs">
                      Staff Pick
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-200 text-gray-800 text-xs">
                      .com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <div className="rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-1 w-fit text-xs bg-[#317ac4] text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag"
                    >
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                    </svg>
                    Business
                  </div>
                  <span className="mx-1">•</span>
                  <span className="text-amber-600 font-medium">Expired</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold">$99</span>
              <div className="flex items-center gap-2">
                <button
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1 text-gray-500"
                  disabled=""
                  aria-label="Like"
                  title="Like"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart text-gray-500"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span>0</span>
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white p-3 rounded-md border hover:shadow-md transition-shadow border-[#e2e8f0] ">
            <div className="flex items-center gap-3 flex-grow">
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-lg truncate">sullyx.com</h3>
                  <div className="flex flex-wrap gap-1">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-brand-orange  text-xs text-white bg-[#ed8936]">
                      Sponsored
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-brand-blue text-white text-xs">
                      Staff Pick
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-200 text-gray-800 text-xs">
                      .com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <div className="rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-1 w-fit text-xs bg-[#317ac4] text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag"
                    >
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                    </svg>
                    Business
                  </div>
                  <span className="mx-1">•</span>
                  <span className="text-amber-600 font-medium">Expired</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold">$99</span>
              <div className="flex items-center gap-2">
                <button
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1 text-gray-500"
                  disabled=""
                  aria-label="Like"
                  title="Like"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart text-gray-500"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span>0</span>
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white p-3 rounded-md border hover:shadow-md transition-shadow border-[#e2e8f0] ">
            <div className="flex items-center gap-3 flex-grow">
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-lg truncate">sullyx.com</h3>
                  <div className="flex flex-wrap gap-1">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-brand-orange  text-xs text-white bg-[#ed8936]">
                      Sponsored
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-brand-blue text-white text-xs">
                      Staff Pick
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-200 text-gray-800 text-xs">
                      .com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <div className="rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-1 w-fit text-xs bg-[#317ac4] text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag"
                    >
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                    </svg>
                    Business
                  </div>
                  <span className="mx-1">•</span>
                  <span className="text-amber-600 font-medium">Expired</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold">$99</span>
              <div className="flex items-center gap-2">
                <button
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1 text-gray-500"
                  disabled=""
                  aria-label="Like"
                  title="Like"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart text-gray-500"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span>0</span>
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white p-3 rounded-md border hover:shadow-md transition-shadow border-[#e2e8f0] ">
            <div className="flex items-center gap-3 flex-grow">
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-lg truncate">sullyx.com</h3>
                  <div className="flex flex-wrap gap-1">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-brand-orange  text-xs text-white bg-[#ed8936]">
                      Sponsored
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-brand-blue text-white text-xs">
                      Staff Pick
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-200 text-gray-800 text-xs">
                      .com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <div className="rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-1 w-fit text-xs bg-[#317ac4] text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag"
                    >
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                    </svg>
                    Business
                  </div>
                  <span className="mx-1">•</span>
                  <span className="text-amber-600 font-medium">Expired</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold">$99</span>
              <div className="flex items-center gap-2">
                <button
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1 text-gray-500"
                  disabled=""
                  aria-label="Like"
                  title="Like"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart text-gray-500"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span>0</span>
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-lg border border-[#e2e8f0] bg-white text-card-foreground shadow-sm domain-card h-full flex flex-col">
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold tracking-tight text-xl break-all">
                  taxguide.dev
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-brand-orange text-white bg-[#ed8936]">
                    Sponsored
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-200 text-gray-800">
                    .dev
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow pt-2">
              <p className="text-muted-foreground mb-4">
                Premium domain name available for purchase. Perfect for your
                next project.
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                <div className="rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-1 w-fit bg-[#317ac4] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-tag"
                  >
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                  </svg>
                  Fashion
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm">
                  <span className="font-semibold">Expiration:</span> Sep 11,
                  2025
                </p>
                <p className="text-sm text-amber-600 font-medium">
                  Expires in 3 months
                </p>
              </div>
              <p className="text-lg font-bold">$99</p>
            </div>
            <div className="items-center p-6 flex justify-between border-t border-[#e2e8f0] pt-4">
              <div className="flex items-center gap-1">
                <button
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                  disabled=""
                  aria-label="Like"
                  title="Like"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart transition-colors duration-200 fill-transparent text-gray-500"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span className="text-gray-500">26</span>
                </button>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
          <div className="rounded-lg border border-[#e2e8f0] bg-white text-card-foreground shadow-sm domain-card h-full flex flex-col">
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold tracking-tight text-xl break-all">
                  salesace.ai
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-200 text-gray-800">
                    .ai
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow pt-2">
              <p className="text-muted-foreground mb-4">
                Premium domain name available for purchase. Perfect for your
                next project.
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                <div className="rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-1 w-fit bg-[#317ac4] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-tag"
                  >
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                  </svg>
                  Finance
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm">
                  <span className="font-semibold">Expiration:</span> Oct 3, 2025
                </p>
                <p className="text-sm text-amber-600 font-medium">
                  Expires in 4 months
                </p>
              </div>
              <p className="text-lg font-bold">$99</p>
            </div>
            <div className="items-center p-6 flex justify-between border-t border-[#e2e8f0] pt-4">
              <div className="flex items-center gap-1">
                <button
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                  disabled=""
                  aria-label="Like"
                  title="Like"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart transition-colors duration-200 fill-transparent text-gray-500"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span className="text-gray-500">15</span>
                </button>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
          <div className="rounded-lg border border-[#e2e8f0] bg-white text-card-foreground shadow-sm domain-card h-full flex flex-col">
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold tracking-tight text-xl break-all">
                  techlab.app
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-200 text-gray-800">
                    .app
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow pt-2">
              <p className="text-muted-foreground mb-4">
                Premium domain name available for purchase. Perfect for your
                next project.
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                <div className="rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-1 w-fit bg-[#317ac4] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-tag"
                  >
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                  </svg>
                  Food
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm">
                  <span className="font-semibold">Expiration:</span> Jun 20,
                  2025
                </p>
                <p className="text-sm text-amber-600 font-medium">
                  Expires in 1 months
                </p>
              </div>
              <p className="text-lg font-bold">$99</p>
            </div>
            <div className="items-center p-6 flex justify-between border-t border-[#e2e8f0] pt-4">
              <div className="flex items-center gap-1">
                <button
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                  disabled=""
                  aria-label="Like"
                  title="Like"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart transition-colors duration-200 fill-transparent text-gray-500"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span className="text-gray-500">21</span>
                </button>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
          <div className="rounded-lg border border-[#e2e8f0] bg-white text-card-foreground shadow-sm domain-card h-full flex flex-col">
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold tracking-tight text-xl break-all">
                  webcraft.app
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-200 text-gray-800">
                    .app
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow pt-2">
              <p className="text-muted-foreground mb-4">
                Premium domain name available for purchase. Perfect for your
                next project.
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                <div className="rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-1 w-fit bg-[#317ac4] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-tag"
                  >
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                  </svg>
                  Food
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm">
                  <span className="font-semibold">Expiration:</span> Jan 7, 2026
                </p>
                <p className="text-sm text-amber-600 font-medium">
                  Expires in 7 months
                </p>
              </div>
              <p className="text-lg font-bold">$99</p>
            </div>
            <div className="items-center p-6 flex justify-between border-t border-[#e2e8f0] pt-4">
              <div className="flex items-center gap-1">
                <button
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                  disabled=""
                  aria-label="Like"
                  title="Like"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart transition-colors duration-200 fill-transparent text-gray-500"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span className="text-gray-500">25</span>
                </button>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
          <div className="rounded-lg border border-[#e2e8f0] bg-white text-card-foreground shadow-sm domain-card h-full flex flex-col">
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold tracking-tight text-xl break-all">
                  devpro.app
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-200 text-gray-800">
                    .app
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow pt-2">
              <p className="text-muted-foreground mb-4">
                Premium domain name available for purchase. Perfect for your
                next project.
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                <div className="rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-1 w-fit bg-[#317ac4] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-tag"
                  >
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                  </svg>
                  Food
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm">
                  <span className="font-semibold">Expiration:</span> Apr 22,
                  2025
                </p>
                <p className="text-sm text-amber-600 font-medium">Expired</p>
              </div>
              <p className="text-lg font-bold">$99</p>
            </div>
            <div className="items-center p-6 flex justify-between border-t border-[#e2e8f0] pt-4">
              <div className="flex items-center gap-1">
                <button
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                  disabled=""
                  aria-label="Like"
                  title="Like"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart transition-colors duration-200 fill-transparent text-gray-500"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span className="text-gray-500">43</span>
                </button>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
          <div className="rounded-lg border border-[#e2e8f0] bg-white text-card-foreground shadow-sm domain-card h-full flex flex-col">
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold tracking-tight text-xl break-all">
                  cardeals.dev
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-200 text-gray-800">
                    .dev
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow pt-2">
              <p className="text-muted-foreground mb-4">
                Premium domain name available for purchase. Perfect for your
                next project.
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                <div className="rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-1 w-fit bg-[#317ac4] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-tag"
                  >
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                  </svg>
                  Fashion
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm">
                  <span className="font-semibold">Expiration:</span> Jan 5, 2026
                </p>
                <p className="text-sm text-amber-600 font-medium">
                  Expires in 7 months
                </p>
              </div>
              <p className="text-lg font-bold">$99</p>
            </div>
            <div className="items-center p-6 flex justify-between border-t border-[#e2e8f0] pt-4">
              <div className="flex items-center gap-1">
                <button
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                  disabled=""
                  aria-label="Like"
                  title="Like"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart transition-colors duration-200 fill-transparent text-gray-500"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span className="text-gray-500">30</span>
                </button>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
          <div className="rounded-lg border border-[#e2e8f0] bg-white text-card-foreground shadow-sm domain-card h-full flex flex-col">
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold tracking-tight text-xl break-all">
                  nftmarket.dev
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-200 text-gray-800">
                    .dev
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow pt-2">
              <p className="text-muted-foreground mb-4">
                Premium domain name available for purchase. Perfect for your
                next project.
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                <div className="rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-1 w-fit bg-[#317ac4] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-tag"
                  >
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                  </svg>
                  Other
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm">
                  <span className="font-semibold">Expiration:</span> Jul 25,
                  2025
                </p>
                <p className="text-sm text-amber-600 font-medium">
                  Expires in 2 months
                </p>
              </div>
              <p className="text-lg font-bold">$99</p>
            </div>
            <div className="items-center p-6 flex justify-between border-t border-[#e2e8f0] pt-4">
              <div className="flex items-center gap-1">
                <button
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                  disabled=""
                  aria-label="Like"
                  title="Like"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart transition-colors duration-200 fill-transparent text-gray-500"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span className="text-gray-500">1</span>
                </button>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
          <div className="rounded-lg border border-[#e2e8f0] bg-white text-card-foreground shadow-sm domain-card h-full flex flex-col">
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold tracking-tight text-xl break-all">
                  metaverse.dev
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-200 text-gray-800">
                    .dev
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow pt-2">
              <p className="text-muted-foreground mb-4">
                Premium domain name available for purchase. Perfect for your
                next project.
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                <div className="rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-1 w-fit bg-[#317ac4] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-tag"
                  >
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                  </svg>
                  Other
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm">
                  <span className="font-semibold">Expiration:</span> Sep 20,
                  2025
                </p>
                <p className="text-sm text-amber-600 font-medium">
                  Expires in 4 months
                </p>
              </div>
              <p className="text-lg font-bold">$99</p>
            </div>
            <div className="items-center p-6 flex justify-between border-t border-[#e2e8f0] pt-4">
              <div className="flex items-center gap-1">
                <button
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                  disabled=""
                  aria-label="Like"
                  title="Like"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart transition-colors duration-200 fill-transparent text-gray-500"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span className="text-gray-500">33</span>
                </button>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
