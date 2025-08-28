"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ApplyForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [course, setCourse] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    email: "",
    phone: "",
    whatsapp: "",
    address: "",
    state: "",
  });

  useEffect(() => {
    const selectedCourse = searchParams.get("course");
    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }, [searchParams]);

  const indianStates = ["Uttar Pradesh", "Delhi", "Maharashtra", "Punjab"]; // shorten for demo

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save data into localStorage
    localStorage.setItem("studentData", JSON.stringify({ ...formData, course }));

    // Redirect to application letter page
    router.push("/Apply/Recive");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-r from-indigo-50 to-white"
    >
      <form
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-semibold text-indigo-700 text-center mb-4">
          Apply Now
        </h1>

        <input name="name" placeholder="Enter Name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded"/>
        <input name="fatherName" placeholder="Enter Father Name" required value={formData.fatherName} onChange={handleChange} className="w-full px-4 py-2 border rounded"/>
        <input name="motherName" placeholder="Enter Mother Name" required value={formData.motherName} onChange={handleChange} className="w-full px-4 py-2 border rounded"/>
        <input type="email" name="email" placeholder="Enter Email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded"/>
        <input type="tel" name="phone" placeholder="Enter Phone Number" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded"/>
        <input type="tel" name="whatsapp" placeholder="Enter WhatsApp Number" required value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-2 border rounded"/>
        <input name="address" placeholder="Enter Address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2 border rounded"/>
        
        <select name="state" value={formData.state} onChange={handleChange} required className="w-full px-4 py-2 border rounded">
          <option value="">Select a state</option>
          {indianStates.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>

        <input type="text" value={course} readOnly className="w-full px-4 py-2 border font-bold rounded bg-gray-100 text-gray-600 cursor-not-allowed"/>

        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </motion.div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <ApplyForm />
    </Suspense>
  );
}
