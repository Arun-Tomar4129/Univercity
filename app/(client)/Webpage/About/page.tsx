"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// ---------------- Teacher Data ----------------
interface Teacher {
  name: string;
  post: string;
  graduation: string;
  department: string;
  experience: string;
}

const teacherNames = [
  "Aman Verma", "Kavita Joshi", "Rajeev Mehta", "Anjali Rao", "Saurabh Yadav",
  "Nidhi Patel", "Devendra Kumar", "Sneha Sharma", "Ravi Singh", "Kriti Aggarwal"
];

const experienceList = ["2 years", "3 years", "5 years", "7 years", "10 years", "12 years"];

const teachersEngineering: Teacher[] = Array.from({ length: 20 }, (_, i) => ({
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

  useEffect(() => {
    if (showAll) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teachersEngineering.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [showAll]);

  return (
    <div className="bg-gradient-to-b from-white via-indigo-50 to-indigo-100 min-h-screen">

     

      {/* ---------------- Founder Section ---------------- */}
      <section className="text-center p-8">
        <div className="flex flex-col items-center">
          <img src="/founder.jpg" alt="Founder" className="w-24 h-24 rounded-full shadow-md border-4 border-indigo-600" />
          <p className="mt-4 text-lg max-w-xl text-gray-700">
            <strong>Founder: Mr. Arun Tomar</strong> – A visionary leader who dreamt of an education
            system that emphasizes technology, innovation, and holistic growth.
          </p>
          <blockquote className="italic text-indigo-600 mt-3">“Education is not preparation for life, it is life itself.”</blockquote>
        </div>
      </section>

      {/* ---------------- Faculty Section ---------------- */}
      <section className="mb-10 px-4">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">Faculty of Computer Science</h2>
        {!showAll ? (
          <div className="flex flex-wrap justify-center">
            {teachersEngineering.slice(currentIndex, currentIndex + 4).map((t, i) => (
              <TeacherCard key={i} {...t} />
            ))}
          </div>
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

      {/* ---------------- Achievements ---------------- */}
      <section className="p-8 md:p-12 bg-white">
        <h2 className="text-2xl font-bold text-indigo-700 text-center mb-6">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-indigo-50 rounded-lg shadow">
            <h3 className="text-4xl font-extrabold text-indigo-600">95%</h3>
            <p className="text-gray-600 mt-2">Placement Rate</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-indigo-50 rounded-lg shadow">
            <h3 className="text-4xl font-extrabold text-indigo-600">200+</h3>
            <p className="text-gray-600 mt-2">Experienced Faculty</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-indigo-50 rounded-lg shadow">
            <h3 className="text-4xl font-extrabold text-indigo-600">5000+</h3>
            <p className="text-gray-600 mt-2">Students Enrolled</p>
          </motion.div>
        </div>
      </section>

    
    </div>
  );
};

export default Page;
