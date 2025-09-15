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
  "Aman Verma", "Kavita Joshi", "Rajeev Mehta", "Anjali Rao", "Saurabh Yadav",
  "Nidhi Patel", "Devendra Kumar", "Sneha Sharma", "Ravi Singh", "Kriti Aggarwal",
  "Ramesh Tiwari", "Preeti Sinha", "Manoj Tripathi", "Divya Chauhan", "Sunil Mishra",
  "Shweta Bhatt", "Neeraj Bansal", "Payal Gupta", "Sandeep Rathore", "Priya Jain",
  "Vipin Rawat", "Aarti Sharma", "Pankaj Kumar", "Megha Joshi", "Ankit Meena",
  "Swati Verma", "Aditya Rawat", "Komal Dixit", "Naveen Thakur", "Isha Chaudhary",
  "Tarun Patel", "Garima Tomar", "Harshit Goel", "Ritika Sen", "Yogesh Chauhan",
  "Sanjay Kumar", "Sakshi Sharma", "Tanya Tyagi", "Rohit Rajput", "Shivani Tripathi",
];

const experienceList = ["2 years", "3 years", "5 years", "7 years", "10 years", "12 years"];

const teachersEngineering: Teacher[] = Array.from({ length: 40 }, (_, i) => ({
  name: `Mr./Ms. ${teacherNames[i % teacherNames.length]}`,
  post: i === 0 ? "Principal" : i % 5 === 0 ? "HOD" : "Professor",
  graduation: i % 2 === 0 ? "B.Tech, M.Tech" : "MCA, PhD",
  department: ["BCA", "MCA", "B.Tech", "M.Tech", "B.Sc (CS)"][i % 5],
  experience: experienceList[i % experienceList.length],
}));

// ---------------- Teacher Card ----------------
const TeacherCard: React.FC<Teacher> = ({ name, post, graduation, department, experience }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] m-2">
    <Card className="shadow-md border border-indigo-200 hover:shadow-xl transition">
      <CardContent className="flex flex-col items-center p-4">
        <div className="w-[80px] h-[80px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-3 flex items-center justify-center text-lg text-white font-bold shadow">
          {name.split(" ")[1]?.[0] || "T"}
        </div>
        <h2 className="mt-1 font-semibold text-lg text-center text-indigo-700">{name}</h2>
        <p className="text-sm text-gray-600 text-center">{post}</p>
        <p className="text-sm text-center">{graduation}</p>
        <p className="text-xs text-indigo-500 text-center">{department}</p>
        <p className="text-xs text-gray-500 text-center">Experience: {experience}</p>
      </CardContent>
    </Card>
  </motion.div>
);

// ---------------- Page ----------------
const Page: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-swap (only when not showing all)
  useEffect(() => {
    if (showAll) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teachersEngineering.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [showAll]);

  const nextTeacher = () => setCurrentIndex((prev) => (prev + 1) % teachersEngineering.length);
  const prevTeacher = () => setCurrentIndex((prev) => (prev === 0 ? teachersEngineering.length - 1 : prev - 1));

  return (
    <div className="bg-gradient-to-b from-white via-indigo-50 to-indigo-100 min-h-screen">
      {/* ---------------- Hero Section ---------------- */}
      <section className="text-center py-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Radhe Shyam University
        </motion.h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Empowering Students with Knowledge, Technology & Innovation 
        </p>
      </section>

      {/* ---------------- About Section ---------------- */}
      <section className="p-6 md:p-12 text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">About Our University</h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Established in <strong>2030</strong> by visionary <strong>Mr. Arun Tomar</strong>, Radhe Shyam University
          is a hub of modern learning. With AI-integrated classrooms, real-world projects, and global collaborations,
          we prepare students for the future. Our campus blends academics with wellness, leadership, and innovation,
          making us a unique institution in India .
        </p>
      </section>

      {/* ---------------- Founder Section ---------------- */}
      <section className="text-center p-6">
        <div className="flex flex-col items-center">
          <div className="size-[80px] rounded-full border-4 border-indigo-600 overflow-hidden bg-gray-200 flex items-center justify-center font-bold text-indigo-600 shadow-md">
            A
          </div>
          <p className="mt-4 text-lg max-w-xl text-gray-700">
            <strong>Founder: Mr. Arun Tomar</strong> – A visionary leader who dreamt of an education system that
            emphasizes technology, innovation, and holistic growth. His mission is to provide affordable, high-quality
            education supported by the Indian government.
          </p>
        </div>
      </section>

      {/* ---------------- Faculty Section ---------------- */}
      <section className="mb-10 px-4">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">Faculty of Computer Science</h2>

        {!showAll ? (
          <>
            {/* Desktop/Laptop (4 cards auto-swap) */}
            <div className="hidden sm:flex flex-wrap justify-center">
              {teachersEngineering.slice(currentIndex, currentIndex + 4).map((t, i) => (
                <TeacherCard key={i} {...t} />
              ))}
            </div>

            {/* Mobile (1 card auto-swap with controls) */}
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
                <button onClick={prevTeacher} className="bg-gray-300 px-3 py-1 rounded-lg shadow">◀ Prev</button>
                <button onClick={nextTeacher} className="bg-gray-300 px-3 py-1 rounded-lg shadow">Next ▶</button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-wrap justify-center mt-6">
            {teachersEngineering.map((t, i) => (
              <TeacherCard key={i} {...t} />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </section>

      {/* ---------------- Achievements & Student Life ---------------- */}
      <section className="p-6 md:p-12 bg-white">
        <h2 className="text-2xl font-bold text-indigo-700 text-center mb-6">Why Choose RSU?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-indigo-50 rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-bold text-indigo-600">95% Placement</h3>
            <p className="text-gray-600">Top recruiters like Google, Microsoft, Amazon hire from us.</p>
          </div>
          <div className="p-6 bg-indigo-50 rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-bold text-indigo-600">Modern Labs</h3>
            <p className="text-gray-600">AI, Robotics, Data Science labs with latest technology.</p>
          </div>
          <div className="p-6 bg-indigo-50 rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-bold text-indigo-600">Holistic Growth</h3>
            <p className="text-gray-600">Leadership, wellness, and innovation programs for all students.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
