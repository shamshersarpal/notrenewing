import Link from "next/link";
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
                    <Link href="/" passHref legacyBehavior>
                      <a className="hover:underline">Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="browse-domains" passHref legacyBehavior>
                      <a className="hover:underline">Browse Domains</a>
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref legacyBehavior>
                      <a className="hover:underline">My Account</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="how-it-works" passHref legacyBehavior>
                      <a className="hover:underline">How It Works</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="faq" passHref legacyBehavior>
                      <a className="hover:underline">FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="contact" passHref legacyBehavior>
                      <a className="hover:underline">Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href=" " passHref legacyBehavior>
                      <a className="hover:underline">Terms of Service</a>
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref legacyBehavior>
                      <a className="hover:underline">Privacy Policy</a>
                    </Link>
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
