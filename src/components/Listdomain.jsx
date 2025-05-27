import DatePicker from "./DatePicker";

export default function ListDomain(){
    return(
        <>
       <div className="rounded-lg border bg-white border-[#e2e8f0] text-card-foreground shadow-sm">

        <div className="flex flex-col space-y-1.5 p-6">
  <h3 className="text-2xl font-semibold leading-none tracking-tight">
    List Your Domain
  </h3>
  <p className="text-sm text-gray-500">
    Enter details about the domain you're not planning to renew
  </p>
</div>


<div className="p-6 pt-0">
  <form className="space-y-6">
    {/* Domain Name */}
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none" htmlFor="domain-name">
        Domain Name
      </label>
      <div className="flex space-x-2">
        <input
          className="flex h-10 w-full rounded-md border px-3 py-2 text-base placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 md:text-sm bg-[#f9fafb] border-[#e2e8f0]"
          id="domain-name"
          placeholder="example.com"
          required=""
        />
        <button
          className="flex h-10 w-[150px] rounded-md border px-2 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 md:text-sm bg-[#f9fafb] border-[#e2e8f0] justify-center cursor-pointer"
          type="button"
          disabled=""
        >
          Verify Domain
        </button>
      </div>
      <p className="text-sm text-gray-500">
        Include the full domain name with TLD (e.g., .com, .org, .io)
      </p>
    </div>
    {/* Category */}
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none" htmlFor="category">
        Category
      </label>
     
      <select className="flex h-10 w-full rounded-md border px-3 py-2 text-base placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 md:text-sm bg-[#f9fafb] border-[#e2e8f0]" hidden="">
        <option value="business" defaultValue="">
          Business
        </option>
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
      <p className="text-sm text-gray-500">
        Select the most appropriate category for your domain
      </p>
    </div>
    {/* Sponsor Domain */}
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="sponsor-domain"
          className="peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        <div className="grid gap-1.5">
          <label
            className="text-sm font-medium leading-none flex items-center cursor-pointer"
            htmlFor="sponsor-domain"
          >
            <svg
              className="h-4 w-4 text-amber-500 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            </svg>
            Sponsor this domain for $5 (appears in Sponsored Leaderboard)
          </label>
          <p className="text-sm text-gray-500">
            Get more visibility by sponsoring your domain to appear in the
            Sponsored section
          </p>
        </div>
      </div>
    </div>
    {/* Expiration Date */}
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none"
        htmlFor="expiration-date"
      >
        Expiration Date
      </label>
     <div className="w-full">
         <DatePicker/>
     </div>
    </div>
    {/* Description */}
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none" htmlFor="description">
        Description
      </label>
      <textarea
        className="flex h-10 w-full rounded-md border px-3 py-2 text-base placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 md:text-sm bg-[#f9fafb] border-[#e2e8f0] min-h-[80px]"
        id="description"
        placeholder="Describe your domain (industry, potential uses, etc.)"
        required=""
        defaultValue={""}
      />
    </div>
    {/* Payment Info */}
    <div>
      <p className="text-sm text-gray-500 mb-4">
        All domains are listed at our fixed price of $99. A $1 listing fee
        applies.
      </p>
      <button
        className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full cursor-pointer"
        type="submit"
      >
        Proceed to Payment
      </button>
    </div>
  </form>
</div>


       </div>
        </>
    )
}