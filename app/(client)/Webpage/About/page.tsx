"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Teacher {
  name: string;
  post: string;
  graduation: string;
  department: string;
  experience: string;
}

const teacherNames = [
  "Aman Verma",
  "Kavita Joshi",
  "Rajeev Mehta",
  "Anjali Rao",
  "Saurabh Yadav",
  "Nidhi Patel",
  "Devendra Kumar",
  "Sneha Sharma",
  "Ravi Singh",
  "Kriti Aggarwal",
  "Ramesh Tiwari",
  "Preeti Sinha",
  "Manoj Tripathi",
  "Divya Chauhan",
  "Sunil Mishra",
  "Shweta Bhatt",
  "Neeraj Bansal",
  "Payal Gupta",
  "Sandeep Rathore",
  "Priya Jain",
  "Vipin Rawat",
  "Aarti Sharma",
  "Pankaj Kumar",
  "Megha Joshi",
  "Ankit Meena",
  "Swati Verma",
  "Aditya Rawat",
  "Komal Dixit",
  "Naveen Thakur",
  "Isha Chaudhary",
  "Tarun Patel",
  "Garima Tomar",
  "Harshit Goel",
  "Ritika Sen",
  "Yogesh Chauhan",
  "Sanjay Kumar",
  "Sakshi Sharma",
  "Tanya Tyagi",
  "Rohit Rajput",
  "Shivani Tripathi",
];

const experienceList = [
  "2 years",
  "3 years",
  "5 years",
  "7 years",
  "10 years",
  "12 years",
];

const teachersEngineering: Teacher[] = Array.from({ length: 40 }, (_, i) => ({
  name: `Mr./Ms. ${teacherNames[i % teacherNames.length]}`,
  post: i === 0 ? "Principal" : i % 5 === 0 ? "HOD" : "Professor",
  graduation: i % 2 === 0 ? "B.Tech, M.Tech" : "MCA, PhD",
  department: ["BCA", "MCA", "B.Tech", "M.Tech", "B.Sc (CS)"][i % 5],
  experience: experienceList[i % experienceList.length],
}));

// Teacher Card
const TeacherCard: React.FC<Teacher> = ({
  name,
  post,
  graduation,
  department,
  experience,
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] m-2"
  >
    <Card className="shadow-md">
      <CardContent className="flex flex-col items-center p-4">
        <div className="w-[80px] h-[80px] bg-indigo-500 rounded-full mb-3 flex items-center justify-center text-sm text-white font-semibold">
          {name.split(" ")[1]?.[0] || "T"}
        </div>
        <h2 className="mt-1 font-semibold text-lg text-center">{name}</h2>
        <p className="text-sm text-gray-600 text-center">{post}</p>
        <p className="text-sm text-center">{graduation}</p>
        <p className="text-xs text-indigo-500 text-center">{department}</p>
        <p className="text-xs text-gray-500 text-center">
          Experience: {experience}
        </p>
      </CardContent>
    </Card>
  </motion.div>
);

const Page: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-swap only when not showing all
  useEffect(() => {
    if (showAll) return; // stop swapping
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teachersEngineering.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [showAll]);

  const nextTeacher = () => {
    setCurrentIndex((prev) => (prev + 1) % teachersEngineering.length);
  };

  const prevTeacher = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? teachersEngineering.length - 1 : prev - 1
    );
  };

  return (
    <div className="p-4">
      {/* Founder Section */}
      <section className="mb-8 text-center">
        <div className="flex flex-col items-center">
          <div className="size-[70px] rounded-full border-2 overflow-hidden bg-gray-200 flex items-center justify-center font-bold text-indigo-600">
            A
          </div>
          <p className="mt-2 text-lg max-w-md">
            Founder <strong>Mr. Arun Tomar</strong> in 2030. I am the visionary
            behind Radhe Shyam University, established to offer modern,
            practical, and government-supported education in Computer Science
            and Technology.
          </p>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="mb-10">
        <h1 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
          Faculty of Computer Science
        </h1>

        {!showAll ? (
          <>
            {/* Desktop/Laptop (Grid layout with auto swap 4 cards) */}
            <div className="hidden sm:flex flex-wrap justify-center">
              {teachersEngineering
                .slice(currentIndex, currentIndex + 4)
                .map((t, i) => (
                  <TeacherCard key={i} {...t} />
                ))}
            </div>

            {/* Mobile (One card with navigation + animation) */}
            <div className="sm:hidden flex flex-col items-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <TeacherCard {...teachersEngineering[currentIndex]} />
                </motion.div>
              </AnimatePresence>
              <div className="flex justify-between mt-3 w-full px-6">
                <button
                  onClick={prevTeacher}
                  className="bg-gray-300 px-3 py-1 rounded-lg shadow"
                >
                  ◀ Prev
                </button>
                <button
                  onClick={nextTeacher}
                  className="bg-gray-300 px-3 py-1 rounded-lg shadow"
                >
                  Next ▶
                </button>
              </div>
            </div>
          </>
        ) : (
          // Show all teachers in grid
          <div className="flex flex-wrap justify-center mt-6">
            {teachersEngineering.map((t, i) => (
              <TeacherCard key={i} {...t} />
            ))}
          </div>
        )}

        {/* Show More / Show Less Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Page;
