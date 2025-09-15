"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// --------- Types ----------
type CompanyListProps = {
  title: string;
  companies: string[];
};

type Student = {
  name: string;
  company: string;
  package: string;
  image: string;
};

// --------- Data ----------
const indianCompanies: string[] = [
  "TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra", "LTI Mindtree", "Capgemini",
  "IBM India", "Cognizant", "Accenture India", "Amazon India", "Google India",
  "Microsoft India", "Flipkart", "Reliance", "Adani Group", "Paytm", "BYJU'S",
  "Zomato", "Swiggy", "Ola", "Uber India", "Deloitte India", "KPMG India",
  "EY India", "PwC India", "HDFC Bank", "ICICI Bank", "Axis Bank", "Jio",
  "MakeMyTrip", "Tata Motors", "BharatPe", "PhonePe", "Zoho", "Freshworks",
  "Snapdeal", "Hike", "Vedantu", "Lenskart", "BigBasket", "RedBus", "Nykaa",
  "Delhivery", "Razorpay", "CRED", "Unacademy", "InMobi", "PolicyBazaar"
];

const internationalCompanies: string[] = [
  "Google", "Apple", "Microsoft", "Amazon", "Meta", "Tesla", "NVIDIA", "Intel",
  "Oracle", "Adobe", "Samsung", "Sony", "Panasonic", "Hitachi", "Toyota",
  "Lenovo", "Huawei", "Alibaba", "Baidu", "Tencent"
];

const topStudents: Student[] = [
  {
    name: "Aarav Mehta",
    company: "Google India",
    package: "₹48 LPA",
    image: "/students/aarav.jpg", // keep images in public/students/
  },
  {
    name: "Priya Sharma",
    company: "Microsoft",
    package: "₹42 LPA",
    image: "/students/priya.jpg",
  },
  {
    name: "Rahul Verma",
    company: "Amazon India",
    package: "₹40 LPA",
    image: "/students/rahul.jpg",
  },
];

// --------- Components ----------
const PlacementStats: React.FC = () => (
  <Card className="shadow-xl mt-6 border border-indigo-200">
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

const TopStudents: React.FC = () => (
  <div className="mt-8">
    <h2 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">🏆 Top Placement Students</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {topStudents.map((student, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-lg rounded-2xl overflow-hidden border border-indigo-100"
        >
          <img
            src={student.image}
            alt={student.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-indigo-700">{student.name}</h3>
            <p className="text-gray-600">{student.company}</p>
            <p className="text-green-600 font-semibold">{student.package}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const CompanyList: React.FC<CompanyListProps> = ({ title, companies }) => (
  <Card className="mt-8 shadow-lg border border-indigo-100">
    <CardHeader>
      <CardTitle className="text-indigo-600">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {companies.map((name, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="text-sm bg-gradient-to-r from-indigo-50 to-white p-2 rounded-lg shadow-sm text-center font-medium text-gray-700 border border-indigo-100"
          >
            {name}
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

// --------- Final Page ----------
const Page: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 py-8 min-h-screen bg-gradient-to-b from-white via-indigo-50 to-indigo-100"
    >
      <h1 className="text-3xl font-bold text-indigo-700 mb-4 text-center">
        Placement Overview – Radhe Shyam University
      </h1>

      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Our university collaborates with top national and international companies to ensure the best opportunities for our students. 
        We focus on both technical and soft skill development to guarantee industry readiness.
      </p>

      <PlacementStats />
      <TopStudents />
      <CompanyList title="🇮🇳 Top 50 Indian Recruiters" companies={indianCompanies} />
      <CompanyList title="🌍 Top 20 Global Recruiters (USA, Japan, China)" companies={internationalCompanies} />
    </motion.div>
  );
};

export default Page;
