"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const courses = [
  {
    title: "BCA",
    fee: "₹34,000 / semester",
    duration: "3 Years",
    paperFee: "₹5,000",
  },
  {
    title: "MCA",
    fee: "₹37,000 / semester",
    duration: "2 Years",
    paperFee: "₹5,000",
  },
  {
    title: "BSc (CS)",
    fee: "₹35,000 / semester",
    duration: "3 Years",
    paperFee: "₹5,000",
  },
  {
    title: "B.Tech",
    fee: "₹60,000 / semester",
    duration: "4 Years",
    paperFee: "₹5,500",
  },
  {
    title: "M.Tech",
    fee: "₹62,000 / semester",
    duration: "2 Years",
    paperFee: "₹5,500",
  },
];

const onlineCourses = [
  {
    title: "Cybersecurity Fundamentals",
    fee: "₹10,000 / semester",
    duration: "2 years",
    paperFee: "₹1,500",
  },
  {
    title: "Frontend Development with React",
    fee: "₹8,000 / semester",
    duration: "1.5 years",
    paperFee: "₹1,200",
  },
  {
    title: "Backend Engineering with Node.js",
    fee: "₹12,000 / semester",
    duration: "2 years",
    paperFee: "₹1,500",
  },
  {
    title: "Data Science and Machine Learning",
    fee: "₹14,000 / semester",
    duration: "2 years",
    paperFee: "₹2,000",
  },
  {
    title: "Cloud Computing Essentials",
    fee: "₹10,000 / semester",
    duration: "1.5 years",
    paperFee: "₹1,500",
  },
  {
    title: "Full Stack Web Development",
    fee: "₹10,000 / semester",
    duration: "2 years",
    paperFee: "₹1,800",
  },
  {
    title: "Artificial Intelligence",
    fee: "₹20,000 / semester",
    duration: "2 years",
    paperFee: "₹2,000",
  },
  {
    title: "Python Programming Mastery",
    fee: "₹7,000 / semester",
    duration: "1 year",
    paperFee: "₹1,000",
  },
];

type Course = {
  title: string;
  fee: string;
  duration: string;
  paperFee: string;
};

const CourseCard = ({ course }: { course: Course }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 0 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="border rounded-xl p-6 shadow-xl bg-white hover:shadow-indigo-200 hover:bg-indigo-50"
  >
    <h2 className="text-xl font-bold text-indigo-700 mb-2">
      {course.title}
    </h2>
    <p> <strong>Fee:</strong> {course.fee}</p>
    <p><strong>Duration:</strong> {course.duration}</p>
    <p><strong>Paper Fee:</strong> {course.paperFee}</p>
    <Link  href={`/Apply?course=${encodeURIComponent(course.title)}`}>
      <Button className="mt-4 w-full">Apply</Button>
    </Link>
  </motion.div>
);

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 bg-gradient-to-br from-white to-indigo-100 min-h-screen"
    >
      <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-12">
         Explore Our Programs
      </h1>

      {/* Computer Science Programs */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-6">
           Computer Science Degrees
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </section>

      {/* Online Courses */}
      <section>
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">
           Online Certification Programs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {onlineCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Page;