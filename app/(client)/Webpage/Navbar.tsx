"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/Webpage", label: "Home" },
    { href: "/Webpage/Course", label: "Courses" },
    { href: "/Webpage/Placement", label: "Placement" },
    { href: "/Webpage/About", label: "About" },
    { href: "/", label: "Login", isButton: true },
  ];

  useEffect(() => {
    setIsOpen(false); // Close mobile menu on route change
    setMounted(true); // Hydration fix
  }, [pathname]);

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full fixed top-0 z-50 bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-600 text-white shadow-lg backdrop-blur-md"
    >
      <div className="flex justify-between items-center px-4 sm:px-8 py-3 max-w-[1400px] mx-auto">
        {/* Logo and Name */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 relative">
            <Image
              src="/logoUnivercity.jpeg"
              alt="University Logo"
              fill
              priority
              className="rounded-full object-cover border-2 border-white shadow-md"
              sizes="48px"
            />
          </div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
            Radhe Shyam University
          </h1>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          {navLinks.map((link) =>
            link.isButton ? (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg bg-white text-indigo-700 font-semibold shadow hover:bg-gray-100 transition"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 transition duration-300 ${
                  pathname === link.href ? "text-yellow-300" : "hover:text-yellow-200"
                }`}
              >
                {link.label}
                {/* Underline Animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full transform scale-x-0 bg-yellow-300 transition-transform duration-300 ${
                    pathname === link.href ? "scale-x-100" : "group-hover:scale-x-100"
                  }`}
                />
              </Link>
            )
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white text-gray-800 shadow-inner flex flex-col gap-3 px-6 py-4"
          >
            {navLinks.map((link) =>
              link.isButton ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded transition duration-200 ${
                    pathname === link.href
                      ? "bg-indigo-100 text-indigo-700 font-semibold shadow"
                      : "hover:text-indigo-600"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
