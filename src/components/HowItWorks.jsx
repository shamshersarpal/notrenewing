export default function HowItWorks() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-[#e2e8f0]">
              <div className="p-6 pt-6 text-center">
                <div className="rounded-full bg-brand-blue text-white w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">List Your Domain</h3>
                <p>
                  Register, verify your account, and list your soon-to-expire
                  domain.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-[#e2e8f0]">
              <div className="p-6 pt-6 text-center">
                <div className="rounded-full bg-brand-blue text-white w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Connect with Buyers
                </h3>
                <p>Interested buyers will express interest in your domain.</p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-[#e2e8f0]">
              <div className="p-6 pt-6 text-center">
                <div className="rounded-full bg-brand-blue text-white w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Complete the Sale
                </h3>
                <p>Finalize the sale directly with the buyer for $99.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href=" ">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-[#e2e8f0] hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 hover:bg-[#f48134] hover:text-white bg-[#f9fafb] cursor-pointer">
                Learn More About How It Works
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
