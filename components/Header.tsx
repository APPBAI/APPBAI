"use client";

import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Shared wordmark paths (reused with different fills) */
  const wordmarkPaths = (
    <>
      <path d="M0 40L12.0683 0H15.4522L27.5205 40H24.6336L13.0385 1.66667H14.411L2.88694 40H0Z" />
      <path d="M40.4385 40V21.0556V0H55.6097C56.0008 0 56.4201 0.0185183 56.8671 0.0555548C57.3327 0.0740744 57.8169 0.12963 58.3201 0.222223C60.3313 0.537037 62.0545 1.25926 63.4889 2.38889C64.9413 3.5 66.05 4.90741 66.8133 6.61111C67.5771 8.29628 67.959 10.1574 67.959 12.1944C67.959 14.25 67.5771 16.1296 66.8133 17.8333C66.05 19.5185 64.9413 20.9259 63.4889 22.0556C62.0545 23.1667 60.3313 23.8796 58.3201 24.1944C57.8169 24.2685 57.3327 24.3241 56.8671 24.3611C56.4201 24.3982 56.0008 24.4167 55.6097 24.4167H43.6515V40H40.4385ZM40.4385 21.0556L55.5538 21.2778C55.8891 21.2778 56.2712 21.2593 56.6992 21.2222C57.1463 21.1852 57.5933 21.1296 58.0404 21.0556C59.4934 20.7593 60.7043 20.1759 61.6725 19.3056C62.6414 18.4167 63.3676 17.3518 63.8517 16.1111C64.3364 14.8704 64.5785 13.5648 64.5785 12.1944C64.5785 10.8241 64.3364 9.52778 63.8517 8.30556C63.3676 7.06483 62.6414 6.00928 61.6725 5.13889C60.7043 4.25 59.4934 3.65741 58.0404 3.36111C57.5933 3.26852 57.1463 3.2037 56.6992 3.16667C56.2712 3.12963 55.8891 3.11111 55.5538 3.11111L40.4385 2.38889V21.0556Z" />
      <path d="M80.877 40V21.0556V0H96.0481C96.4395 0 96.8585 0.0185183 97.3056 0.0555548C97.7712 0.0740744 98.2553 0.12963 98.7586 0.222223C100.77 0.537037 102.493 1.25926 103.927 2.38889C105.38 3.5 106.488 4.90741 107.252 6.61111C108.016 8.29628 108.398 10.1574 108.398 12.1944C108.398 14.25 108.016 16.1296 107.252 17.8333C106.488 19.5185 105.38 20.9259 103.927 22.0556C102.493 23.1667 100.77 23.8796 98.7586 24.1944C98.2553 24.2685 97.7712 24.3241 97.3056 24.3611C96.8585 24.3982 96.4395 24.4167 96.0481 24.4167H84.0901V40H80.877ZM80.877 21.0556L95.9925 21.2778C96.3278 21.2778 96.7097 21.2593 97.1377 21.2222C97.5847 21.1852 98.0318 21.1296 98.4789 21.0556C99.9318 20.7593 101.143 20.1759 102.111 19.3056C103.08 18.4167 103.806 17.3518 104.29 16.1111C104.775 14.8704 105.017 13.5648 105.017 12.1944C105.017 10.8241 104.775 9.52778 104.29 8.30556C103.806 7.06483 103.08 6.00928 102.111 5.13889C101.143 4.25 99.9318 3.65741 98.4789 3.36111C98.0318 3.26852 97.5847 3.2037 97.1377 3.16667C96.7097 3.12963 96.3278 3.11111 95.9925 3.11111L80.877 2.38889V21.0556Z" />
      <path d="M121.315 40V0H136.24C138.263 0 140.077 0.444445 141.685 1.33333C143.309 2.20371 144.583 3.39815 145.504 4.91667C146.443 6.43517 146.912 8.14817 146.912 10.0556C146.912 12.2037 146.334 14.1389 145.179 15.8611C144.023 17.5648 142.488 18.7593 140.574 19.4444L140.465 18.1111C143.03 18.9074 145.061 20.2407 146.56 22.1111C148.077 23.9629 148.835 26.2593 148.835 29C148.835 31.2963 148.339 33.2685 147.345 34.9167C146.37 36.5463 145.016 37.8056 143.283 38.6944C141.549 39.5648 139.581 40 137.377 40H121.315ZM121.315 36.8611H136.348C138.082 36.8611 139.635 36.5556 141.007 35.9444C142.398 35.3333 143.49 34.4537 144.285 33.3056C145.097 32.1574 145.504 30.7685 145.504 29.1389C145.504 27.5278 145.134 26.0741 144.393 24.7778C143.671 23.4629 142.687 22.4259 141.441 21.6667C140.195 20.8889 138.795 20.5 137.242 20.5L121.315 20V36.8611ZM121.315 17.4167H136.213C137.567 17.4167 138.804 17.0926 139.924 16.4444C141.061 15.7963 141.964 14.9167 142.633 13.8056C143.3 12.6759 143.635 11.3889 143.635 9.94444C143.635 7.88889 142.921 6.2315 141.495 4.97222C140.086 3.71296 138.325 3.08333 136.213 3.08333H121.315V17.4167Z" />
      <path d="M161.753 40L173.822 0H177.205L189.274 40H186.387L174.792 1.66667H176.165L164.64 40H161.753Z" />
      <path d="M205 40V0H202.192V40H205Z" />
    </>
  );

  const toggleTheme = () => {
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#companies", label: "Companies" },
    { href: "#team", label: "Team" },
  ];

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${hasScrolled ? "bg-alabaster/80 dark:bg-black-soft/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800" : "bg-transparent border-b border-transparent"}`}
      >
        <div
          className={`max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between transition-all duration-300 ${hasScrolled ? "h-14 md:h-16" : "h-16 md:h-20"}`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center text-black dark:text-white transition-colors"
          >
            <svg
              viewBox="0 0 205 40"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 md:h-5 w-auto"
            >
              {wordmarkPaths}
            </svg>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600 dark:text-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions - Desktop */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="h-10 px-6 flex items-center justify-center border border-gray-300 dark:border-gray-700 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white border-r-0"
            >
              Partner with Us
            </Link>
            <button
              onClick={toggleTheme}
              className="h-10 w-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white"
            >
              {mounted &&
                (theme === "dark" || resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                ))}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden h-10 w-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-alabaster dark:bg-black-soft text-black dark:text-white flex flex-col md:hidden">
          {/* Mobile Menu Header */}
          <div className="px-6 h-16 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black dark:text-white transition-colors"
            >
              <svg
                viewBox="0 0 205 40"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-auto"
              >
                {wordmarkPaths}
              </svg>
            </Link>
            <button
              className="h-10 w-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-5 text-base text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800 hover:text-black dark:hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="px-6 py-8 flex items-center justify-center gap-0">
            <Link
              href="#contact"
              className="h-12 px-8 flex items-center justify-center border border-gray-300 dark:border-gray-700 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white border-r-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              Partner with Us
            </Link>
            <button
              onClick={toggleTheme}
              className="h-12 w-12 flex items-center justify-center border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white"
            >
              {mounted &&
                (theme === "dark" || resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                ))}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
