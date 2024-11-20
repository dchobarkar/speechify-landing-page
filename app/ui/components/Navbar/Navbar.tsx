"use client";

import { useState } from "react";
import Link from "next/link";

import { navLinks } from "@/app/libs/constants";
import ToggleButton from "./ToggleButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white">
      <nav>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Speechify
          </Link>

          <div className="hidden md:block space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-gray-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <ToggleButton isOpen={isOpen} onClick={toggleNavbar} />
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-gray-300 block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
