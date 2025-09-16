"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const courses = [
  { title: "BCA", fee: "₹34,000 / semester", duration: "3 Years", paperFee: "₹5,000", badge: "Popular" },
  { title: "MCA", fee: "₹37,000 / semester", duration: "2 Years", paperFee: "₹5,000" },
  { title: "BSc (CS)", fee: "₹35,000 / semester", duration: "3 Years", paperFee: "₹5,000" },
  { title: "B.Tech", fee: "₹60,000 / semester", duration: "4 Years", paperFee: "₹5,500", badge: "Best Value" },
  { title: "M.Tech", fee: "₹62,000 / semester", duration: "2 Years", paperFee: "₹5,500" },
];

const onlineCourses = [
  { title: "Cybersecurity Fundamentals", fee: "₹10,000 / semester", duration: "2 years", paperFee: "₹1,500" },
  { title: "Frontend Development with React", fee: "₹8,000 / semester", duration: "1.5 years", paperFee: "₹1,200" },
  { title: "Backend Engineering with Node.js", fee: "₹12,000 / semester", duration: "2 years", paperFee: "₹1,500" },
  { title: "Data Science and Machine Learning", fee: "₹14,000 / semester", duration: "2 years", paperFee: "₹2,000", badge: "Trending" },
  { title: "Cloud Computing Essentials", fee: "₹10,000 / semester", duration: "1.5 years", paperFee: "₹1,500" },
  { title: "Full Stack Web Development", fee: "₹10,000 / semester", duration: "2 years", paperFee: "₹1,800" },
  { title: "Artificial Intelligence", fee: "₹20,000 / semester", duration: "2 years", paperFee: "₹2,000", badge: "New" },
  { title: "Python Programming Mastery", fee: "₹7,000 / semester", duration: "1 year", paperFee: "₹1,000" },
];

type Course = { title: string; fee: string; duration: string; paperFee: string; badge?: string };

const CourseCard = ({ course }: { course: Course }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="relative border rounded-xl p-6 shadow-lg bg-white hover:shadow-indigo-200 hover:bg-indigo-50 flex flex-col"
  >
    {/* Badge */}
    {course.badge && (
      <span className="absolute top-2 right-2 text-xs font-bold bg-indigo-600 text-white px-2 py-1 rounded-md shadow">
        {course.badge}
      </span>
    )}

    {/* Content */}
    <div className="mb-16"> {/* space for buttons */}
      <h2 className="text-xl font-bold text-indigo-700 mb-2">{course.title}</h2>
      <p className="text-gray-700"><strong>Fee:</strong> {course.fee}</p>
      <p className="text-gray-700"><strong>Duration:</strong> {course.duration}</p>
      <p className="text-gray-700"><strong>Paper Fee:</strong> {course.paperFee}</p>
    </div>

    {/* Buttons pinned to bottom */}
    <div className="absolute bottom-5 left-0 right-0 px-6 flex gap-3">
      <Link href={`/Apply?course=${encodeURIComponent(course.title)}`} className="flex-1">
        <Button className="w-full">Apply</Button>
      </Link>
      <Button variant="outline" className="flex-1">
        Learn More
      </Button>
    </div>
  </motion.div>
);


const Page = () => {
  const [tab, setTab] = useState<"degree" | "online">("degree");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 bg-gradient-to-br from-white to-indigo-100 min-h-screen"
    >
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-800 mb-4">
          Explore Our Programs
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from a wide range of <strong>degree programs</strong> and <strong>online certifications</strong> designed 
          to prepare you for the future of technology.
        </p>
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-center gap-6 mb-10">
        <Button onClick={() => setTab("degree")} variant={tab === "degree" ? "default" : "outline"}>
          Computer Science Degrees
        </Button>
        <Button onClick={() => setTab("online")} variant={tab === "online" ? "default" : "outline"}>
          Online Certifications
        </Button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {(tab === "degree" ? courses : onlineCourses).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      
    </motion.div>
  );
};

export default Page;
