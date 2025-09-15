"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import jsPDF from "jspdf";

const ApplyPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // State for switching between form and preview
  const [mode, setMode] = useState<"form" | "preview">("form");

  const [course, setCourse] = useState("");
  const [studentData, setStudentData] = useState<any>(null);
  const [appId, setAppId] = useState<number | null>(null);

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

  // Load initial state (course or edit mode)
  useEffect(() => {
    const editMode = searchParams.get("edit");
    const selectedCourse = searchParams.get("course");

    if (editMode) {
      const savedData = localStorage.getItem("studentData");
      if (savedData) {
        const parsed = JSON.parse(savedData);
        setFormData(parsed);
        if (parsed.course) setCourse(parsed.course);
        setMode("form"); // show form pre-filled
      }
    } else if (selectedCourse) {
      setCourse(selectedCourse);
      setMode("form");
    } else {
      const savedData = localStorage.getItem("studentData");
      if (savedData) {
        setStudentData(JSON.parse(savedData));
        setMode("preview"); // directly show preview if already applied
      }
    }

    // Generate random application ID
    setAppId(Math.floor(Math.random() * (999999 - 10000 + 1)) + 10000);
  }, [searchParams]);

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem(
      "studentData",
      JSON.stringify({ ...formData, course })
    );
    setStudentData({ ...formData, course });
    setMode("preview");
  };

  const handleDownload = () => {
    if (!studentData || !appId) return;

    const doc = new jsPDF();
    doc.setFont("times", "normal");
    doc.setFontSize(14);

    const text = `
To,
The Head of Department
Radhe Shyam University

Subject: Application for Admission in ${studentData.course}

Respected Sir/Madam,

I, ${studentData.name}, son/daughter of ${studentData.fatherName} and ${studentData.motherName}, 
am applying for admission to the ${studentData.course} program.

Details:
- Email: ${studentData.email}
- Phone: ${studentData.phone}
- WhatsApp: ${studentData.whatsapp}
- Address: ${studentData.address}, ${studentData.state}

Application ID: ${appId}

Kindly consider my application.

Thank you.

Yours sincerely,
${studentData.name}
`;

    doc.text(text, 20, 20, { maxWidth: 170 });
    doc.save(`Application_${studentData.course}.pdf`);
  };

  const handleOkClick = () => {
    handleDownload();
    router.push("/"); // redirect home after download
  };

  // ---------------- RENDER -----------------
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-r from-indigo-50 to-white py-10"
    >
      {mode === "form" ? (
        // ---------------- FORM ----------------
        <form
          className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl font-semibold text-indigo-700 text-center mb-4">
            Apply Now
          </h1>

          <input
            name="name"
            placeholder="Enter Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            name="fatherName"
            placeholder="Enter Father Name"
            required
            value={formData.fatherName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            name="motherName"
            placeholder="Enter Mother Name"
            required
            value={formData.motherName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="tel"
            name="whatsapp"
            placeholder="Enter WhatsApp Number"
            required
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            name="address"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />

          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">Select a state</option>
            {indianStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={course}
            readOnly
            className="w-full px-4 py-2 border font-bold rounded bg-gray-100 text-gray-600 cursor-not-allowed"
          />

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      ) : (
        // ---------------- PREVIEW ----------------
        <div className="max-w-3xl w-full space-y-6">
          {/* University Logo */}
          <motion.div
            initial={{ width: 0, height: 0, borderRadius: "50%" }}
            animate={{ width: 100, height: 100 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden mx-auto"
          >
            <Image
              src="/logoUnivercity.jpeg"
              alt="University Logo"
              fill
              priority
              className="rounded-full object-cover"
              sizes="100px"
            />
          </motion.div>
          <p className="text-center text-lg font-medium text-gray-800 mt-4">
            Thank you for applying to
            <span className="text-indigo-600 font-semibold"> {course}</span>!
            <br />
            Your application has been successfully submitted. Please download
            your application letter and keep it safe for
            <span className="text-red-500"> college entry and admission</span>.
          </p>
          {/* Application Letter */}
          <Card className="rounded-2xl shadow-xl">
            <CardHeader>
              <h1 className="text-2xl font-bold text-gray-800 text-center">
                Application Letter
              </h1>
            </CardHeader>

            <div className="w-full flex items-center justify-center text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-indigo-700">
                {studentData?.course}
              </h2>
            </div>

            <CardContent className="space-y-3 text-gray-700">
              {Object.entries(studentData || {}).map(([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong> {value as React.ReactNode}
                </p>
              ))}

              {appId && (
                <p className="pt-2 text-indigo-600 font-bold">
                  Application ID: {appId}
                </p>
              )}

              <p className="pt-2">
                <strong className="text-red-500">Notice:</strong> Take a
                download of this letter for college entry and admission.
              </p>

              <div className="flex flex-wrap gap-3 pt-4 justify-center">
                <Button
                  variant="outline"
                  onClick={() => setMode("form")}
                  className="px-4 py-2"
                >
                  Edit
                </Button>
                <Button
                  onClick={handleOkClick}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white"
                >
                  Download & Ok
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </motion.div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <ApplyPage />
    </Suspense>
  );
}
