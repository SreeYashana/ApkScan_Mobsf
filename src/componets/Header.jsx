import React, { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../constants"; // Ensure navigation is imported correctly
import { useLocation, Link } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";

const Header = () => {
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  // Disable or enable page scroll based on menu state
  useEffect(() => {
    if (openNavigation) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
    return () => enablePageScroll(); // Cleanup on component unmount
  }, [openNavigation]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo */}
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} alt="Brainwave Logo" width={190} height={40} />
        </a>

        {/* Hamburger Menu Toggle */}
        <button
          className="block lg:hidden ml-auto"
          onClick={() => setOpenNavigation(!openNavigation)}
          aria-label="Toggle navigation menu"
        >
          <MenuSvg isOpen={openNavigation} />
        </button>

        {/* Navigation */}
        <nav
          className={`${
            openNavigation ? "block" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:gap-8">
            {/* Static Links */}
            <a href="https://app-scaner86.vercel.app/" className="lg:mx-2">
              Scan Secure
            </a>
            <a href="http://127.0.0.1:4444/" className="lg:mx-2">
              Chatbot
            </a>
            <a href="http://127.0.0.1:5502/index.html" className="lg:mx-2">
              Encrypted Files
            </a>
            {/* Dynamic Navigation Links */}
            {navigation.map((navItem) => (
              <Link
                key={navItem.id}
                to={navItem.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  navItem.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs font-semibold ${
                  navItem.url === location.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {navItem.title}
              </Link>
            ))}
          </div>
        </nav>

        {/* Call to Action Links */}
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Header;
