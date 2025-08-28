"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-r from-indigo-100 to-white"
    >
      {/* University Logo */}
      <div className="mb-6">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[200px] h-[200px] rounded-full border-4 border-indigo-500 overflow-hidden shadow-lg"
        >
          <img
            src="/logoUnivercity.jpeg" // Make sure it's in public folder
            alt="Radhe Shyam University"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4 text-center">
        Radhe Shyam University
      </h1>

      {/* Navigation Button */}
      <div className="flex gap-4 mb-6">
        <Button asChild>
          <Link href="/Webpage" className="flex items-center gap-2">
            Explore Website <LogIn />
          </Link>
        </Button>
      </div>

      {/* Paragraph */}
      <p className="max-w-xl text-center text-gray-700 text-lg leading-relaxed">
        Welcome to{" "}
        <span className="font-semibold text-indigo-600">
          Radhe Shyam University
        </span>{" "}
        — founded by visionary <strong>Arun Tomar</strong> in 2030. This
        institution redefines education through immersive learning, real-world
        projects, hands-on practicals, and AI-integrated environments. Students
        not only gain top-tier knowledge in tech, science, and innovation, but
        also experience healthy food, digital wellness, and leadership training
        — all supported by the Indian government.
      </p>
     
    </motion.div>
  );
};

export default Page;
