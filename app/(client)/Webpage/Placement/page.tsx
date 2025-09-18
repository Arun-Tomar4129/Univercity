"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// ---------- Types ----------
type Student = {
  name: string;
  company: string;
  package: string;
  branch: string;
  image: string;
};

type Company = {
  name: string;
  logo: string;
};

// ---------- Data ----------
const highlights = [
  { icon: "🎯", title: "95% Placement Rate" },
  { icon: "🏢", title: "500+ Recruiters" },
  { icon: "🌍", title: "20+ Global Companies" },
  { icon: "💰", title: "₹48 LPA Highest Package" },
];

const topStudents: Student[] = [
  {
    name: "Arun Tomar",
    company: "Google India",
    package: "₹48 LPA",
    branch: "B.Tech CSE",
    image: "/Arun.jpg",
  },
  {
    name: "Shivam Thankur",
    company: "Microsoft",
    package: "₹42 LPA",
    branch: "B.Tech IT",
    image: "/Shivam.png",
  },
  {
    name: "Udit ",
    company: "Amazon India",
    package: "₹40 LPA",
    branch: "B.Tech AI/ML",
    image: "/udit.jpg",
  },
];

const recruiters: Company[] = [
  { name: "Google", logo: "https://i.pinimg.com/1200x/28/71/e3/2871e3e71c3344351d1c9b62fa4baec4.jpg" },
  { name: "Microsoft", logo: "https://i.pinimg.com/736x/cf/5f/d9/cf5fd9eb5ea343a1201776b26095db37.jpg" },
  { name: "Amazon", logo: "https://i.pinimg.com/736x/d1/e9/35/d1e9352526c9fd7ae68e651af76f09ca.jpg" },
  { name: "Infosys", logo: "/infosys.jpg" },
  { name: "TCS", logo: "https://i.pinimg.com/736x/53/b0/e6/53b0e6c332aa9cb17300f14c2c053a95.jpg" },
  { name: "Wipro", logo: "https://i.pinimg.com/1200x/71/2c/66/712c660619fcfe31b2154a1cb041d8cb.jpg" },
  { name: "Accenture", logo: "https://i.pinimg.com/1200x/aa/10/0f/aa100f5af627232b89311fab7545ab26.jpg" },
  { name: "Meta", logo: "https://i.pinimg.com/736x/80/14/ca/8014ca9f0a2e6a57afa2734b7f11453f.jpg" },
];

// ---------- Components ----------
const Hero = () => (
  <div className="relative bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-6 text-center rounded-xl bg-cover bg-center w-full shadow-lg"
  style={{
      backgroundImage: "url('https://i.pinimg.com/1200x/16/f3/b0/16f3b0bc85829c9151e1cc6e9fba90b3.jpg')",
    }}
>
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold mb-4"
    >
      Placement Overview – Radhe Shyam University
    </motion.h1>
    <p className="max-w-2xl mx-auto text-lg text-indigo-100">
      Empowering students with world-class training and opportunities.  
      With 95% placement success, our graduates shine in top companies worldwide.
    </p>
  </div>
);

const Highlights = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
    {highlights.map((h, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-md rounded-xl p-6 text-center border border-indigo-100"
      >
        <div className="text-3xl mb-2">{h.icon}</div>
        <p className="font-semibold text-indigo-700">{h.title}</p>
      </motion.div>
    ))}
  </div>
);

const PlacementStats = () => (
  <Card className="shadow-xl mt-10 border border-indigo-200">
    <CardHeader>
      <CardTitle className="text-indigo-600 text-xl">📊 Placement Stats</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-gray-700">Placement Rate: <strong>95%</strong></p>
      <Progress value={95} className="h-2 bg-gray-200" />
      <p className="text-gray-700">Average Package: <strong>₹6.5 LPA</strong></p>
      <p className="text-gray-700">Highest Package: <strong>₹48 LPA</strong></p>
    </CardContent>
  </Card>
);

const TopStudents = () => (
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
      Top Placement Students
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {topStudents.map((s, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative h-80 bg-gray-200 shadow-lg rounded-2xl overflow-hidden border border-indigo-100"
        >
          {/* Background Image */}
          <img
            src={s.image}
            alt={s.name}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-opacity-40"></div>

          {/* Text Content */}
          <div className="absolute bottom-0 w-full p-4 text-center text-white">
            <h3 className="text-lg font-bold">{s.name}</h3>
            <p className="text-sm">{s.branch}</p>
            <p className="text-sm">{s.company}</p>
            <p className="text-black font-semibold">{s.package}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);


const RecruiterLogos = () => (
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center"> Our Recruiters</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
      {recruiters.map((c, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-md rounded-xl p-4 flex justify-center items-center border border-indigo-100"
        >
          <img src={c.logo} alt={c.name} className="h-12 object-contain" />
        </motion.div>
      ))}
    </div>
  </div>
);

const PlacementProcess = () => {
  const steps = [
    { step: "📚 Training & Workshops", desc: "Industry-ready skills through expert sessions." },
    { step: "📝 Mock Interviews", desc: "Preparation with real-world interview experience." },
    { step: "🏢 Company Drives", desc: "Top recruiters conduct campus interviews." },
    { step: "🎉 Final Selection", desc: "Students land dream jobs worldwide." },
  ];

  return (
  <div className="mt-16 px-4">
    <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
       Placement Process
    </h2>
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
      {steps.map((s, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-indigo-50 to-white shadow-md p-6 rounded-xl border border-indigo-100 flex-1 
                     w-full sm:w-[300px] md:w-[350px] lg:w-[400px] min-h-[130px]"
        >
          <h3 className="font-bold text-indigo-700">{s.step}</h3>
          <p className="text-gray-600">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);
}
const CTASection = () => (
  <div className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl p-10 text-center shadow-lg">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Radhe Shyam University </h2>
    <p className="mb-6 text-indigo-100">Start your journey with top placements, global recruiters, and industry-ready training.</p>
    <div className="flex justify-center gap-4">
      <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">
        Apply Now
      </button>
      <button className="bg-indigo-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-900">
        Contact Placement Cell
      </button>
    </div>
  </div>
);

// ---------- Final Page ----------
const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 py-12 min-h-screen bg-gradient-to-b from-white via-indigo-50 to-indigo-100"
    >
      <Hero />
      <Highlights />
      <PlacementStats />
      <TopStudents />
      <RecruiterLogos />
      <PlacementProcess />
      {/* <CTASection /> */}
    </motion.div>
  );
};

export default Page;
