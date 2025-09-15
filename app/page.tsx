"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const IntroPage = () => {
  const router = useRouter();

  // Auto redirect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/Webpage");
    }, 4000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-200"
    >
      {/* Logo Animation */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-[180px] h-[180px] rounded-full border-4 border-white overflow-hidden shadow-2xl mb-6"
      >
        <img
          src="/logoUnivercity.jpeg" // keep in public folder
          alt="Radhe Shyam University"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* University Name */}
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg text-center"
      >
        Radhe Shyam University
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-4 text-lg sm:text-xl text-white/90 text-center max-w-xl leading-relaxed"
      >
        Innovating education with{" "}
        <span className="font-bold text-yellow-300">AI, Practical Learning</span>{" "}
        & Leadership — shaping the leaders of tomorrow.
      </motion.p>
    </motion.div>
  );
};

export default IntroPage;
