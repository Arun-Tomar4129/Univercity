"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
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
    { href: "/", label: "Login" },
  ];

  useEffect(() => {
    setIsOpen(false); // Close mobile menu on route change
    setMounted(true); // Ensure hydration-safe rendering
  }, [pathname]);

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white shadow-md fixed top-0 z-50"
    >
      <div>
      <div className="w-full flex justify-between items-center px-[10px] py-3 max-w-[1600px] mx-auto">
        {/* Logo and University Name */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <Image
                src="/logoUnivercity.jpeg"
                alt="University Logo"
                fill
                priority
                className="rounded-full object-cover"
                sizes="40px"
              />
            </div>
            <h1 className="text-lg sm:text-xl font-semibold text-indigo-700">
              Radhe Shyam University
            </h1>
          </div>
         
        </div>


        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-indigo-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-white overflow-hidden px-6 ${
          isOpen ? "pb-4" : "pb-0"
        } flex flex-col gap-4 text-gray-700 font-medium`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded transition duration-200 ${
              pathname === link.href
                ? "bg-white text-indigo-600 font-semibold shadow"
                : "hover:text-indigo-600"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </motion.div>
      </div>
      <hr />
      <div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium bg-gradient-to-l from-indigo-200 to-blue-300 text-black">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1  transition duration-200 ${
                pathname === link.href
                  ? "bg-white text-indigo-600 font-semibold shadow"
                  : "hover:text-white border-none"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
