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

// 1. Define Types
type CompanyListProps = {
  title: string;
  companies: string[];
};

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

// 2. Stats Component
const PlacementStats: React.FC = () => (
  <Card className="shadow-lg mt-6">
    <CardHeader>
      <CardTitle className="text-indigo-600">📊 Placement Stats</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-gray-700">Placement Rate: <strong>95%</strong></p>
      <Progress value={95} className="h-2 bg-gray-200" />
      <p className="text-gray-700">Average Package: <strong>₹6.5 LPA</strong></p>
      <p className="text-gray-700">Highest Package: <strong>₹48 LPA</strong></p>
    </CardContent>
  </Card>
);

// 3. Company List Component with Props
const CompanyList: React.FC<CompanyListProps> = ({ title, companies }) => (
  <Card className="mt-6">
    <CardHeader>
      <CardTitle className="text-indigo-600">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {companies.map((name, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="text-sm bg-indigo-50 p-2 rounded shadow-sm text-center font-medium"
          >
            {name}
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

// 4. Final Page
const Page: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 py-8 min-h-screen bg-gradient-to-b from-white to-indigo-50"
    >
      <h1 className="text-3xl font-bold text-indigo-700 mb-4 text-center">
        🎓 Placement Overview – Radhe Shyam University
      </h1>

      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Our university collaborates with top national and international companies to ensure the best opportunities for our students. We focus on both technical and soft skill development to guarantee industry readiness.
      </p>

      <PlacementStats />
      <CompanyList title="🇮🇳 Top 50 Indian Recruiters" companies={indianCompanies} />
      <CompanyList title="🌍 Top 20 Global Recruiters (USA, Japan, China)" companies={internationalCompanies} />
    </motion.div>
  );
};

export default Page;
