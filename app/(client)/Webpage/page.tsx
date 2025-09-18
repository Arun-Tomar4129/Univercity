"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(40);

  // Detect mobile screen and set faster speed
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSpeed(15); // faster on mobile
      } else {
        setSpeed(40); // slower on desktop
      }
    };

    handleResize(); // run on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const paragraphs = [
    "RadheShyam University is ranked among the top institutions in India for innovation and research.",
    "The university provides state-of-the-art labs, smart classrooms, and modern learning facilities.",
    "With a strong focus on practical learning, students gain industry-relevant knowledge and skills.",
    "RadheShyam University hosts regular workshops, hackathons, and global seminars.",
    "Our faculty members are renowned scholars and industry leaders with years of expertise.",
    "The university encourages innovation, entrepreneurship, and startup incubation.",
    "We provide international exchange programs with leading global universities.",
    "RadheShyam University fosters cultural diversity and holistic development.",
    "Our alumni network spans across leading companies and research institutions worldwide.",
    "With strong placement support, we ensure students are career-ready upon graduation.",
  ];
  // university ads images
  const uniImages = [
    "/webpage1.jpg",
    "/webpage2.jpg",
    "/webpage3.jpg",
    "/webpage4.jpg",
    "/webpage5.jpg",
    "/webpage1.jpg",
    "/webpage2.jpg",
    "/webpage3.jpg",
    "/webpage4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // auto change every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % uniImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [uniImages.length]);

  const [open, setOpen] = useState(false);

  const Social = [
    { name: "YouTube", link: "https://youtube.com", icon: "https://i.pinimg.com/1200x/5c/d7/3d/5cd73dcdb77181f1c193346ab404120c.jpg" },
    {
      name: "Instagram",
      link: "https://instagram.com",
      icon: "https://i.pinimg.com/736x/d8/12/03/d81203a4741e6f1354124823f3976ef1.jpg",
    },
    { name: "Facebook", link: "https://facebook.com", icon: "https://i.pinimg.com/736x/db/19/33/db19332a23a44f772c5a1855a8aabf70.jpg" },
    {
      name: "WhatsApp",
      link: "https://wa.me/919999999999",
      icon: "/WhatApp.jpg",
    },
    { name: "LinkedIn", link: "https://linkedin.com", icon: "https://i.pinimg.com/736x/ad/a1/7c/ada17c578743c123f075eddc7ea0d449.jpg" },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Hero Section */}
<section className="relative w-full  h-[40vh] sm:h-[50vh] md:h-[40vh] lg:h-[40vh]  flex items-center justify-center text-center bg-gradient-to-br from-indigo-700 via-blue-600 to-indigo-900 text-white overflow-hidden">
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/30 z-0  bg-cover bg-center"
  style={{backgroundImage:"url('https://i.pinimg.com/1200x/12/6d/6a/126d6a772d8c617371646cea80851342.jpg')"}} />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="z-10 px-4 sm:px-6 "
   
  >
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
      Welcome to <br className="sm:hidden" /> Radhe Shyam University
    </h1>
    <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
      Empowering students with <span className="font-semibold text-yellow-300">innovation</span>, 
      <span className="font-semibold text-yellow-300"> research</span>, and world-class education.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/Webpage/Course">
        <button className="bg-yellow-400 text-indigo-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform w-full sm:w-auto">
          Explore Courses
        </button>
      </Link>
      {/* <Link href="/Apply">
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform w-full sm:w-auto">
          Apply Now
        </button>
      </Link> */}
    </div>
  </motion.div>
</section>

      {/* --- Main Top Section --- */}
      <div className="flex flex-col lg:flex-row gap-6 w-full ">
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
            priority
            className="rounded-lg object-cover"
          />
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-[40%] w-full flex flex-col gap-4"
        >
          <div className="w-full rounded-lg overflow-hidden relative h-[250px]">
            <Image
              src="/Image2.jpeg"
              alt="Another View"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-gray-700 text-base leading-relaxed">
              This university is ranked among the top 8 in India and number 1 in
              Uttar Pradesh. It offers world-class education, research
              opportunities, and modern infrastructure. With a focus on
              innovation, entrepreneurship, and global exposure, it’s the ideal
              place to build your future.
            </p>
          </div>
        </motion.div>
      </div>

      {/* --- Teacher + University Ads Section --- */}
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 w-full "
      
      >
        {/* Teacher Vacancy Ads */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-gradient-to-r from-green-200 to-green-400 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 text-center bg-cover"
          style={{backgroundImage:"url('https://i.pinimg.com/736x/fe/0b/97/fe0b97b4ea38a9bbe71aefec5d387832.jpg')"}}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Teacher Vacancy
          </h2>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full max-w-[250px] mb-4"
          >
            <Image
              src="/Teacher.jpg"
              alt="Teacher Vacancy"
              width={250}
              height={200}
              className="rounded-xl object-cover shadow-md"
            />
          </motion.div>
          <Link
            href="/TeacherApply"
            className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:scale-105 transition-transform font-medium"
          >
            Apply Now
          </Link>
        </motion.div>

        {/* University Ads Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden relative flex items-center justify-center h-[250px] md:h-[400px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={uniImages[current]}
                alt={`University Ad ${current + 1}`}
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- Floating User Icon --- */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 bg-blue-200 rounded-full shadow-lg z-50 hover:scale-105 transition-transform size-[70px] flex items-center justify-center animate-bounce"
      >
        <Image
          src="/User.jpg"
          alt="User Icon"
          width={70}
          height={70}
          priority
          className="rounded-full object-cover"
        />
      </button>

      {/* --- Social Bar (slide-in) --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-[60px] h-[260px] bg-gray-100 fixed left-0 top-1/2 -translate-y-1/2 z-40 rounded-r-3xl flex items-center justify-around flex-col p-3 shadow-xl"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
      {/* Top Line */}
      <hr className="h-2 bg-gray-200 border-0 rounded-full shadow-inner my-6" />

      <div
        className="relative w-full bg-white overflow-hidden py-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Scrolling Section */}
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: isPaused ? "0%" : ["0%", "-100%"] }}
          transition={{
            repeat: isPaused ? 0 : Infinity,
            duration: speed,
            ease: "linear",
          }}
        >
          {[...paragraphs, ...paragraphs].map((text, i) => (
            <div
              key={i}
              className="
                min-w-[250px] sm:min-w-[300px] lg:min-w-[350px] 
                max-w-[90%] sm:max-w-[400px] 
                px-4 py-6 bg-indigo-50 rounded-xl shadow-md 
                text-gray-800 text-center 
                whitespace-normal break-words
              "
            >
              {text}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Line */}
      <hr className="h-2 bg-gray-200 border-0 rounded-full shadow-inner my-6" />
    </div>
  );
};

export default Page;
