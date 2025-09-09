"use client";

import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const TeacherApply = () => {
  const router = useRouter();

  const [step, setStep] = useState<"form" | "preview">("form");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
     Address: "",
    qualification: "",
    experience: "None",
    subject: "",
    master: "",
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generate random application number
  const generateApplicationNumber = () =>
    Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;

  // Generate PDF
  const handleDownload = () => {
    const appNo = generateApplicationNumber();
    const doc = new jsPDF();

    doc.setFont("times", "bold");
    doc.setFontSize(18);
    doc.text("Teacher Application Form", 70, 20);

    doc.setTextColor(255, 0, 0);
    doc.setFontSize(12);
    doc.text(
      "⚠ Download this letter for college entry and job submission",
      20,
      30
    );

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(`Application ID: ${appNo}`, 20, 45);

    doc.setFontSize(12);
    doc.text(`Name: ${formData.name}`, 20, 60);
    doc.text(`Phone: ${formData.phone}`, 20, 70);
    doc.text(`WhatsApp: ${formData.whatsapp}`, 20, 80);
    doc.text(`Email: ${formData.email}`, 20, 90);
     doc.text(`Address: ${formData.Address}`, 20, 90);
    doc.text(`Qualification: ${formData.qualification}`, 20, 100);
    doc.text(`Experience: ${formData.experience}`, 20, 110);
    doc.text(`Subject: ${formData.subject}`, 20, 120);


    doc.setTextColor(0, 0, 255);
    doc.textWithLink("Visit College Portal", 20, 150, {
      url: "http://localhost:3000/Webpage",
    });

    doc.save("Teacher_Application.pdf");
  };

  // Final submit → move to /Webpage
  const handleFinalSubmit = () => {
    router.push("/Webpage");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">
        <AnimatePresence mode="wait">
          {step === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Teacher Application Form
              </h1>

              <form className="space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter your name"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter phone number"
                />
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter WhatsApp number"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter email"
                />
                 <input
                  type="text"
                  name="Address"
                  value={formData.Address}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter Address"
                />
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter qualification"
                />
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="None">None (Fresher)</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="2-3 years">2-3 years</option>
                  <option value="3-4 years">3-4 years</option>
                  <option value="5+ years">Above 5 years</option>
                </select>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter subject"
                />
               

                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => setStep("preview")}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === "preview" && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                Application Preview
              </h1>
              <p className="text-red-500 text-sm text-center mb-4">
                ⚠ Please verify your details before downloading or final submit
              </p>

              <div className="bg-gray-50 p-4 rounded-lg border space-y-2">
                <p>
                  <b>Name:</b> {formData.name}
                </p>
                <p>
                  <b>Phone:</b> {formData.phone}
                </p>
                <p>
                  <b>WhatsApp:</b> {formData.whatsapp}
                </p>
                <p>
                  <b>Email:</b> {formData.email}
                </p>
                <p>
                  <b>Address:</b> {formData.Address}
                </p>
                <p>
                  <b>Qualification:</b> {formData.qualification}
                </p>
                <p>
                  <b>Experience:</b> {formData.experience}
                </p>
                <p>
                  <b>Subject:</b> {formData.subject}
                </p>
               
              </div>

              <div
                className="
    flex flex-col gap-3 mt-6
    sm:flex-row sm:justify-between sm:gap-0
  "
              >
                <button
                  onClick={() => setStep("form")}
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-500 transition"
                >
                  Edit
                </button>
                <button
                  onClick={handleDownload}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
                >
                  Download
                </button>
                <button
                  onClick={handleFinalSubmit}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Final Submit
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TeacherApply;
