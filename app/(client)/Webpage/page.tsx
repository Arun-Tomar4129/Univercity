"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  // link of socail media 
  const Social = [
    {
      name: "YouTube",
      link: "https://www.youtube.com/yourchannel",
      icon: "youtube.png",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/yourprofile",
      icon: "instagram.png",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/yourprofile",
      icon: "facebook.png",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/yourprofile",
      icon: "linkdin.png",
    },
  ];
  return (
    <div className="p-4">
      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-4 w-full min-h-screen">
        {/* Left Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:w-[60%] w-full h-[500px] relative"
        >
          <Image
            src="/Image1.jpeg"
            alt="University View"
            fill
            priority // ✅ Fix: improve LCP
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-[40%] w-full flex flex-col gap-4"
        >
          <div className="w-full border-2 rounded-lg overflow-hidden relative h-[250px]">
            <Image
              src="/Image2.jpeg"
              alt="Another View"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-gray-700 text-base">
              This university is ranked among the top 8 in India and number 1 in
              Uttar Pradesh. It offers world-class education, research
              opportunities, and modern infrastructure. With a focus on
              innovation, entrepreneurship, and global exposure, it’s the ideal
              place to build your future.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Fixed WhatsApp Icon */}
      <Link
        href="https://wa.me/919999999999"
        target="_blank"
        className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg z-50 hover:scale-105 transition-transform size-[70px] flex items-center justify-center animate-bounce"
      >
        <Image
          src="/WhatApp.jpg"
          alt="WhatsApp Icon"
          width={70}
          height={70}
          priority // ✅ Fix LCP issue
          className="rounded-full object-cover"
        />
      </Link>
      {/* this contect box by flex */}
      <div className="w-[50px] h-[200px] bg-gray-300 fixed left-0 top-1/2 -translate-y-1/2 z-20 rounded-r-3xl flex items-center justify-around flex-col p-2 shadow-lg">
        {Social.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-8 cursor-pointer hover:scale-110 transition"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Page;
