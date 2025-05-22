import DomainSearch from "@/components/CondensedView";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pagination from "@/components/pagination";

export default function BrowseDomains() {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 py-8 bg-gray-50">
          <h1 className="text-3xl font-bold my-8">Browse Domains</h1>

          <div className="mb-8 space-y-4">
            <form className="flex flex-col gap-4 md:flex-row md:items-center">
              <input
                type="text"
                placeholder="Search domains..."
                className="w-full flex-grow rounded-md border px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary border-[#e2e8f0]"
              />

              <select className="w-full md:w-48 rounded-md border px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary border-[#e2e8f0]">
                <option value="all">All Categories</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="health">Health</option>
                <option value="education">Education</option>
                <option value="entertainment">Entertainment</option>
                <option value="finance">Finance</option>
                <option value="travel">Travel</option>
                <option value="food">Food</option>
                <option value="fashion">Fashion</option>
                <option value="other">Other</option>
              </select>

              <select className="w-full md:w-48 rounded-md border px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary border-[#e2e8f0]">
                <option value="all">All TLDs</option>
                <option value="dev">dev</option>
                <option value="ai">ai</option>
                <option value="app">app</option>
                <option value="com">com</option>
                <option value="io">io</option>
                <option value="net">net</option>
                <option value="org">org</option>
              </select>

              <select className="w-full md:w-48 rounded-md border px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary border-[#e2e8f0]">
                <option value="expiration-asc">Expiration (Soon First)</option>
                <option value="expiration-desc">
                  Expiration (Later First)
                </option>
                <option value="popularity">Most Popular</option>
                <option value="alphabetical">Alphabetical (A-Z)</option>
                <option value="category">Category</option>
              </select>

              <button
                type="submit"
                className="h-10 px-4 py-2 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Search
              </button>
            </form>
          </div>
          <DomainSearch />
          <Pagination />
        </div>
      </main>
      <Footer />
    </>
  );
}
