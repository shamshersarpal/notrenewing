export default function SearchBar() {
  return (
    <>
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Quick Search</h2>
            <form className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full"
                  placeholder="Search domains..."
                  defaultValue=""
                />
              </div>
              <div className="w-full md:w-48">
                <select defaultValue="all" className="border rounded px-3 py-2 w-full bg-white">
                  <option value="all">All TLDs</option>
                  <option value="ai">ai</option>
                  <option value="app">app</option>
                  <option value="net">net</option>
                  <option value="dev">dev</option>
                  <option value="com">com</option>
                  <option value="io">io</option>
                  <option value="org">org</option>
                </select>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
