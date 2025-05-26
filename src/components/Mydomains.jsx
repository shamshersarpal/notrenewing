export default function MyDomains() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-lg border border-[#e2e8f0] bg-white text-card-foreground shadow-sm domain-card h-full flex flex-col">
          <div className="flex flex-col space-y-1.5 p-6 pb-2">
            <div className="flex justify-between">
              <div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold tracking-tight text-xl break-all">
                        salesace.ai
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-200 text-gray-800">
                      .ai
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="space-y-2">
                    {/* Sponsor Button */}
                    <div className="flex items-center space-x-1 text-green-600 font-sm">
                      {/* Check Icon */}
                      <svg
                        className="w-5 h-5  "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>

                      <span>Sponsored</span>
                    </div>

                    {/* Delete Button */}
                    <button className="flex items-center space-x-2 px-4 py-2 border border-red-300 text-red-500 rounded-md hover:bg-red-50 transition text-sm min-w-[109.75px] cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
            </div>
          </div>
          <div className="p-6 flex-grow pt-2">
            <p className="text-muted-foreground mb-4">
              Premium domain name available for purchase. Perfect for your next
              project.
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
            <div className="flex justify-between">
              <div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold tracking-tight text-xl break-all">
                        salesace.ai
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-200 text-gray-800">
                      .ai
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="space-y-2">
                    {/* Sponsor Button */}
                    <button className="flex items-center space-x-2 px-4 py-2 border border-yellow-400 text-yellow-500 font-medium rounded-md hover:bg-yellow-50 transition text-sm cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l1.8 5.6H20l-4.6 3.4 1.8 5.6L12 13.8 6.8 16.6l1.8-5.6L4 7.6h6.2L12 2z" />
                      </svg>
                      <span>Sponsor</span>
                    </button>
                    {/* Delete Button */}
                    <button className="flex items-center space-x-2 px-4 py-2 border border-red-300 text-red-500 rounded-md hover:bg-red-50 transition text-sm min-w-[109.75px] cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
            </div>
          </div>
          <div className="p-6 flex-grow pt-2">
            <p className="text-muted-foreground mb-4">
              Premium domain name available for purchase. Perfect for your next
              project.
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
            <div className="flex justify-between">
              <div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold tracking-tight text-xl break-all">
                        salesace.ai
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-200 text-gray-800">
                      .ai
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="space-y-2">
                    {/* Sponsor Button */}
                    <button className="flex items-center space-x-2 px-4 py-2 border border-yellow-400 text-yellow-500 font-medium rounded-md hover:bg-yellow-50 transition text-sm cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l1.8 5.6H20l-4.6 3.4 1.8 5.6L12 13.8 6.8 16.6l1.8-5.6L4 7.6h6.2L12 2z" />
                      </svg>
                      <span>Sponsor</span>
                    </button>
                    {/* Delete Button */}
                    <button className="flex items-center space-x-2 px-4 py-2 border border-red-300 text-red-500 rounded-md hover:bg-red-50 transition text-sm min-w-[109.75px] cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
            </div>
          </div>
          <div className="p-6 flex-grow pt-2">
            <p className="text-muted-foreground mb-4">
              Premium domain name available for purchase. Perfect for your next
              project.
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
      </div>
    </>
  );
}
