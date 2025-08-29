"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import jsPDF from "jspdf";

const Page = () => {
  const router = useRouter();
  const [studentData, setStudentData] = useState<any>(null);
  const [appId, setAppId] = useState<number | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("studentData");
    if (data) setStudentData(JSON.parse(data));

    // Generate random Application ID between 10000 - 999999
    setAppId(Math.floor(Math.random() * (999999 - 10000 + 1)) + 10000);
  }, []);

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
    handleDownload(); // download first
    router.push("/"); // then redirect home
  };

  if (!studentData) {
    return <div className="text-center mt-10">No application found!</div>;
  }

  return (
    <div className="min-h-screen px-4 py-10 flex flex-col items-center gap-10 bg-background">
      {/* University Logo */}
      <motion.div
        initial={{ width: 0, height: 0, borderRadius: "50%" }}
        animate={{ width: 100, height: 100 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden"
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

      {/* Course Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full text-center"
      >
        <p className="mt-3 text-lg text-gray-700 font-medium leading-relaxed">
          Thank you for applying to the <strong>{studentData.course}</strong>{" "}
          program. This course provides in-depth training .
        </p>
      </motion.div>

      {/* Application Letter */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full"
      >
        <Card className="rounded-2xl shadow-xl">
          <CardHeader>
            <h1 className="text-2xl font-bold text-gray-800">
              Application Letter
            </h1>
          </CardHeader>
          <div className="w-full flex items-center justify-center text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-indigo-700">
              {studentData.course}
            </h2>
          </div>

          <CardContent className="space-y-3 text-gray-700">
            {Object.entries(studentData).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value as React.ReactNode}
              </p>
            ))}

            {/* Application ID */}
            {appId && (
              <p className="pt-2 text-indigo-600 font-bold">
                Application ID: {appId}
              </p>
            )}

            <p className="pt-2">
              <strong className="text-red-500">Notice:</strong> Take a download
              of this letter for college entry and admission.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => router.push("/apply")}
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
      </motion.div>

      {/* Confirmation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-muted px-6 py-6 rounded-xl text-gray-700"
      >
        <p className="text-base leading-relaxed">
          Your application has been successfully received. Please check your
          email and WhatsApp for further updates.
        </p>
      </motion.div>
    </div>
  );
};

export default Page;
