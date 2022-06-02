import React from "react";
import { Link } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

const Footer = () => {
  return (
    <section className="border-t border-gray-200">
      <footer
        className="text-gray-600 body-font "
        style={{ width: "70%", margin: "auto" }}
      >
        <div className="flex mt-10 mb-10 justify-between">
          <div>
            <h1 className="text-2xl font-bold text-black mb-1">
              Subscribe to our awesome emails.
            </h1>
            <p className="mb-5">
              Get our latest offers and news straight in your inbox
            </p>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Please ener an email address"
              className="w-80 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <button className="bg-black hover:bg-gray-700 text-white font-bold py-3 px-8 border rounded ">
              Subscribe
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-black mb-1">
              Download our apps
            </h1>
            <p>Shop our products and offers on-the-go.</p>
            <div className="flex">
              <div>
                <img
                  style={{ width: "200px", marginTop: "9px", height: "70px" }}
                  src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg"
                  alt="applestore"
                />
              </div>

              <div>
                <img
                  style={{ width: "200px", marginLeft: "10px", height: "90px" }}
                  src="https://www.freepnglogos.com/uploads/play-store-logo-png/play-store-logo-nisi-filters-australia-11.png"
                  alt="platstore"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 py-12 mx-auto border-t border-gray-200">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 ">
                Women
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Tops
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Dresses
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Jumpsuits
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Sportswear
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Ethenicwear
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Lingerie
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Sleepwear
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                Men
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Tops
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Bottoms
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Sportswear
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Winterwear
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Shoes
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                Boys
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Tops
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Bottoms
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Indian Wear
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Winter Wear
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Shoes
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                Girls
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Tops
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Bottoms
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Indian Wear
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Winter Wear
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Shoes
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                About Us
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    className="text-gray-600 hover:text-gray-800"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Write to us
                  </Link>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href="https://www.linkedin.com/company/max-fashion-india/jobs/" target="_blank" rel="noreferrer">
                    Carrers
                  </a>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Take a Tour
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    BLog
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Store Locator
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                Help
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Shippeing
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Returns Process
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" to="/">
                    Help Center
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div className="flex">
                <LocalPhoneIcon className="mt-3" />
                <span className="ml-5">
                  <p className="text-gray-400"> Talk to us </p>
                  <p>1800-123-1444</p>
                </span>
              </div>
              <div className="flex ml-10">
                <LiveHelpIcon className="mt-3" />
                <span className="ml-5">
                  <p className="text-gray-400"> Helpcenter</p>
                  <p>help.maxfashion.com</p>
                </span>
              </div>
              <div className="flex ml-10">
                <LocalPostOfficeIcon className="mt-3" />
                <span className="ml-5">
                  <p className="text-gray-400">Write to us</p>
                  <p>help.in@maxfashion.com</p>
                </span>
              </div>
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <Link className="text-gray-500" to="/">
                <svg
                  fill="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link className="ml-5 text-gray-500" to="/">
                <svg
                  fill="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link className="ml-5 text-gray-500" to="/">
                <svg
                  fill="none"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
            </span>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              <Link to="/">
                <img style={{ width: "110px" }} src="maxlogo.png" alt="logo" />
              </Link>
            </p>
            <span className="sm:ml-auto sm:mt- mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              © 2022 Retail World Limited. Terms & Conditions - Privacy Policy
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
