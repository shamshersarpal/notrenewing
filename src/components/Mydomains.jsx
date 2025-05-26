"use client";

import { useState } from "react";

const domains = [
  {
    name: "salesace.ai",
    tld: ".ai",
    isSponsored: true,
    category: "Finance",
    expiration: "Oct 3, 2025",
    expiresIn: "Expires in 4 months",
    price: "$99",
    likes: 15,
  },
  {
    name: "salesace.ai",
    tld: ".ai",
    isSponsored: false,
    category: "Finance",
    expiration: "Oct 3, 2025",
    expiresIn: "Expires in 4 months",
    price: "$99",
    likes: 15,
  },
  {
    name: "salesace.ai",
    tld: ".ai",
    isSponsored: false,
    category: "Finance",
    expiration: "Oct 3, 2025",
    expiresIn: "Expires in 4 months",
    price: "$99",
    likes: 15,
  },
];

export default function MyDomains() {
  const [selectedDomain, setSelectedDomain] = useState(null);

  const handleBuyClick = (domain) => {
    setSelectedDomain(domain);
  };

  const handleCloseModal = () => {
    setSelectedDomain(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((domain, index) => (
          <div
            key={index}
            className="rounded-lg border border-[#e2e8f0] bg-white text-card-foreground shadow-sm domain-card h-full flex flex-col"
          >
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold tracking-tight text-xl break-all">
                    {domain.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center rounded-full border px-2.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-100 text-gray-800 text-xs py-0 h-5">
                      {domain.tld}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  {domain.isSponsored ? (
                    <div className="flex items-center space-x-1 text-green-600 text-sm">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.5 11.5L11 14l4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Sponsored</span>
                    </div>
                  ) : (
                    <button className="flex items-center space-x-2 px-4 py-2 border border-yellow-400 text-yellow-500 font-medium rounded-md hover:bg-yellow-50 text-sm cursor-pointer">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l1.8 5.6H20l-4.6 3.4 1.8 5.6L12 13.8 6.8 16.6l1.8-5.6L4 7.6h6.2L12 2z" />
                      </svg>
                      <span>Sponsor</span>
                    </button>
                  )}
                  <button className="flex items-center space-x-2 px-4 py-2 border border-red-300 text-red-500 rounded-md hover:bg-red-50 text-sm min-w-[109.75px] cursor-pointer">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 3v1H4v2h1v13a2 2 0 002 2h10a2 2 0 002-2V6h1V4h-5V3H9zm3 5a1 1 0 011 1v8a1 1 0 11-2 0V9a1 1 0 011-1zm-4 1v8a1 1 0 102 0V9a1 1 0 10-2 0zm8 0v8a1 1 0 102 0V9a1 1 0 10-2 0z" />
                    </svg>
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow pt-2">
              <p className="text-muted-foreground mb-4">
                Premium domain name available for purchase. Perfect for your next
                project.
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                <div className="rounded-full px-2.5 py-0.5 text-xs font-semibold bg-[#317ac4] text-white flex items-center gap-1 w-fit">
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                  </svg>
                  {domain.category}
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm">
                  <span className="font-semibold">Expiration:</span>{" "}
                  {domain.expiration}
                </p>
                <p className="text-sm text-amber-600 font-medium">
                  {domain.expiresIn}
                </p>
              </div>
              <p className="text-lg font-bold">{domain.price}</p>
            </div>
            <div className="p-6 flex justify-between border-t border-[#e2e8f0] pt-4">
              <div className="flex items-center gap-1">
                <button
                  aria-label="Like"
                  title="Like"
                  className="text-sm text-gray-500 flex items-center gap-1 hover:bg-[#f48134] p-2 rounded-md hover:text-white transition-colors duration-200 cursor-pointer" 
                >
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-colors duration-200 fill-transparent"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span>{domain.likes}</span>
                </button>
              </div>
              <button
                onClick={() => handleBuyClick(domain)}
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Buy Now Modal */}
      {selectedDomain && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
             <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:max-w-md"
  tabIndex={-1}
  style={{ pointerEvents: "auto" }}
>
  <div className="flex flex-col space-y-1.5 text-center sm:text-left">
    <h2
      id="radix-:r2r:"
      className="text-lg font-semibold leading-none tracking-tight"
    >
      Purchase Domain
    </h2>
    <p id="radix-:r2s:" className="text-sm text-gray-500">
      You're about to purchase salesace.ai
    </p>
  </div>
  <div className="py-4">
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-500">Domain Name:</span>
        <span className="font-medium">salesace.ai</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-500">Domain Price:</span>
        <span className="font-medium">$99.00</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-500">NotRenewing.com Fee:</span>
        <span className="font-medium">$1.00</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between items-center">
        <span className="text-gray-500 font-bold">Total:</span>
        <span className="font-bold text-lg">$100.00</span>
      </div>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
        Proceed to Payment
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-credit-card ml-2"
        >
          <rect width={20} height={14} x={2} y={5} rx={2} />
          <line x1={2} x2={22} y1={10} y2={10} />
        </svg>
      </button>
    </div>
  </div>
  <button
    type="button"  onClick={handleCloseModal}
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
</div>


             
          </div>
        </div>
      )}
    </>
  );
}
