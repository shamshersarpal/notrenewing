export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">NotRenewing.com</h2>
              <p className="max-w-md">
                The marketplace for soon-to-expire domain names.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a className="hover:underline" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="">
                      Browse Domains
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="">
                      My Account
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a className="hover:underline" href="">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a className="hover:underline" href="">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>© 2025 NotRenewing.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
