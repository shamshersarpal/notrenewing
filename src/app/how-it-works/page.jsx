"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Faq from "@/components/Faq";

export default function HowitWorks() {
  const [activeTab, setActiveTab] = useState("buyers");

  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center my-4">
            How NotRenewing.com Works
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our platform connects domain buyers with sellers who don't plan to
            renew their domains, creating a win-win marketplace.
          </p>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div
              role="tablist"
              className="grid w-full max-w-md grid-cols-2 rounded-md bg-[#f1f5f9] text-muted-foreground p-2"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "buyers"}
                onClick={() => setActiveTab("buyers")}
                className={`px-3 py-1.5 text-sm font-medium rounded-sm transition focus:outline-none focus:ring-0 focus:ring-ring focus:ring-offset-0 cursor-pointer ${
                  activeTab === "buyers" ? "bg-white text-black shadow-sm" : ""
                }`}
              >
                For Buyers
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "sellers"}
                onClick={() => setActiveTab("sellers")}
                className={`px-3 py-1.5 text-sm font-medium rounded-sm transition focus:outline-none focus:ring-0 focus:ring-ring focus:ring-offset-0 cursor-pointer ${
                  activeTab === "sellers" ? "bg-white text-black shadow-sm" : ""
                }`}
              >
                For Sellers
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="  mx-auto text-center">
            {activeTab === "buyers" && (
              <div id="buyers-tab" role="tabpanel">
                <div
                  data-state="active"
                  data-orientation="horizontal"
                  role="tabpanel"
                  aria-labelledby="radix-:rq:-trigger-buyers"
                  id="radix-:rq:-content-buyers"
                  tabIndex={0}
                  className="mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        icon: "🔍",
                        title: "Find Expiring Domains",
                        desc: "Browse our extensive collection of domains that are set to expire but won't be renewed by their current owners.",
                      },
                      {
                        icon: "📊",
                        title: "Check Domain Details",
                        desc: "Review domain information including expiration date, current traffic, SEO metrics, and pricing.",
                      },
                      {
                        icon: "💳",
                        title: "Secure Your Purchase",
                        desc: "Complete your purchase securely through our platform with various payment options.",
                      },
                      {
                        icon: "🔄",
                        title: "Transfer Process",
                        desc: "We'll guide you through the domain transfer process to ensure a smooth transition of ownership.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-lg bg-card text-card-foreground border-2 transition-all shadow-sm border-[#e2e8f0] hover:border-[#bcc5d2] bg-white"
                      >
                        <div className="p-6">
                          <div className="text-4xl mb-4">{item.icon}</div>
                          <h3 className="text-xl font-semibold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white p-8 rounded-lg shadow-sm mt-8 text-left">
                    <h2 className="text-2xl font-bold mb-6">
                      Benefits For Buyers
                    </h2>
                    <ul className="list-disc pl-5 space-y-4">
                      <li className="text-gray-800">
                        Access to domains before they expire and become
                        available to the general public
                      </li>
                      <li className="text-gray-800">
                        Avoid competing in domain auctions that can drive up
                        prices
                      </li>
                      <li className="text-gray-800">
                        Secure established domains with existing SEO value and
                        traffic
                      </li>
                      <li className="text-gray-800">
                        Transparent pricing without hidden fees
                      </li>
                      <li className="text-gray-800">
                        Secure transaction process with buyer protection
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "sellers" && (
              <div id="sellers-tab" role="tabpanel">
                <div
                  data-state="active"
                  data-orientation="horizontal"
                  role="tabpanel"
                  aria-labelledby="radix-:r3:-trigger-sellers"
                  id="radix-:r3:-content-sellers"
                  tabIndex={0}
                  className="mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        icon: "📝",
                        title: "List Your Domain",
                        desc: "Create a free account and list your domain that you don't plan to renew.",
                      },
                      {
                        icon: "✅",
                        title: "Verify Ownership",
                        desc: "Verify that you own the domain through our simple verification process.",
                      },
                      {
                        icon: "💰",
                        title: "Set Your Price",
                        desc: "Determine how much you want to sell your domain for based on our suggested pricing or your preference.",
                      },
                      {
                        icon: "🎉",
                        title: "Complete the Sale",
                        desc: "Once sold, we'll guide you through transferring the domain to the buyer and receiving your payment.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-lg bg-card text-card-foreground border-2 transition-all shadow-sm border-[#e2e8f0] hover:border-[#bcc5d2] bg-white"
                      >
                        <div className="p-6">
                          <div className="text-4xl mb-4">{item.icon}</div>
                          <h3 className="text-xl font-semibold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white p-8 rounded-lg shadow-sm mt-8 text-left">
                    <h2 className="text-2xl font-bold mb-6">
                      Benefits For Sellers
                    </h2>
                    <ul className="list-disc pl-5 space-y-4">
                      <li className="text-gray-800">
                        Generate revenue from domains you no longer need or plan
                        to renew
                      </li>
                      <li className="text-gray-800">
                        Save on renewal fees for domains you don't want to keep
                      </li>
                      <li className="text-gray-800">
                        Access to a marketplace of active domain buyers
                      </li>
                      <li className="text-gray-800">
                        Simple listing and verification process
                      </li>
                      <li className="text-gray-800">
                        Secure payment handling through our platform
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Faq />

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're looking to buy domains before they expire or sell
              domains you don't plan to renew, NotRenewing.com is your
              marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="" passHref>
                <span className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90">
                  Browse Domains
                </span>
              </Link>
              <Link href=" " passHref>
                <span className="border border-primary text-primary px-6 py-3 rounded-md font-medium bg-white hover:bg-gray-100">
                  Sell Your Domain
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
