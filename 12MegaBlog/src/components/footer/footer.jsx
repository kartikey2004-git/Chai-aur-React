import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <Logo width="100px" />
            <p className="mt-4 text-gray-400">
              &copy; {new Date().getFullYear()}. All Rights Reserved by DevUI.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-400">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link className="text-base text-gray-200" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="text-base text-gray-200" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="text-base text-gray-200" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="text-base text-gray-200" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-400">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link className="text-base text-gray-200" to="/">
                  Account
                </Link>
              </li>
              <li>
                <Link className="text-base text-gray-200" to="/">
                  Help
                </Link>
              </li>
              <li>
                <Link className="text-base text-gray-200" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-base text-gray-200" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-400">
              Legals
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link className="text-base text-gray-200" to="/">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="text-base text-gray-200" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-base  text-gray-200" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
