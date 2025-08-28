"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Define a TypeScript interface for teacher
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
  "Sanjay Kumar", "Sakshi Sharma", "Tanya Tyagi", "Rohit Rajput", "Shivani Tripathi"
];

const experienceList = [
  "2 years", "3 years", "5 years", "7 years", "10 years", "12 years"
];

const teachersEngineering: Teacher[] = Array.from({ length: 40 }, (_, i) => ({
  name: `Mr./Ms. ${teacherNames[i % teacherNames.length]}`,
  post: i === 0 ? "Principal" : i % 5 === 0 ? "HOD" : "Professor",
  graduation: i % 2 === 0 ? "B.Tech, M.Tech" : "MCA, PhD",
  department: ["BCA", "MCA", "B.Tech", "M.Tech", "B.Sc (CS)"][i % 5],
  experience: experienceList[i % experienceList.length]
}));

const TeacherCard: React.FC<Teacher> = ({ name, post, graduation, department, experience }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] m-2"
  >
    <Card className="shadow-md">
      <CardContent className="flex flex-col items-center p-4">
        <div className="w-[80px] h-[80px] bg-gray-300 rounded-full mb-3 flex items-center justify-center text-sm text-white font-semibold">
          {name.split(" ")[1]?.[0] || "T"}
        </div>
        <h2 className="mt-1 font-semibold text-lg text-center">{name}</h2>
        <p className="text-sm text-gray-600 text-center">{post}</p>
        <p className="text-sm text-center">{graduation}</p>
        <p className="text-xs text-indigo-500 text-center">{department}</p>
        <p className="text-xs text-gray-500 text-center">Experience: {experience}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const Page: React.FC = () => {
  return (
    <div className="p-4">
      <section className="mb-8 text-center">
        <div className="flex flex-col items-center">
          <div className="size-[70px] rounded-full border-2 overflow-hidden bg-gray-200 flex items-center justify-center font-bold text-indigo-600">
            A
          </div>
          <p className="mt-2 text-lg max-w-md">
            Founder <strong>Mr. Arun Tomar</strong> in 2030. I am the visionary behind
            Radhe Shyam University, established to offer modern, practical, and
            government-supported education in the field of Computer Science and Technology.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h1 className="text-2xl font-bold text-indigo-700 mb-4 text-center">Faculty of Computer Science</h1>
        <div className="flex flex-wrap justify-center">
          {teachersEngineering.map((t, i) => (
            <TeacherCard key={i} {...t} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;