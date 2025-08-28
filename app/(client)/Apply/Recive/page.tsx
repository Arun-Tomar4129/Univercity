"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const program = "MCA";

const Page = () => {
  const router = useRouter();
  const [studentData, setStudentData] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("studentData");
    if (data) setStudentData(JSON.parse(data));
  }, []);

  const handleOkClick = () => {
    router.push("/");
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
        className="max-w-3xl w-full"
      >
        <p className="text-lg text-gray-700 font-medium leading-relaxed">
          Thank you for applying to the <strong>{studentData.course}</strong> program. 
          This course provides in-depth training on AI tools, full stack development, 
          and real-world projects.
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
            <h1 className="text-2xl font-bold text-gray-800">Application Letter</h1>
            <h2 className="text-center text-xl font-semibold text-indigo-700 mt-2">
              {program}
            </h2>
          </CardHeader>
          <CardContent className="space-y-3 text-gray-700">
            {Object.entries(studentData).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value as React.ReactNode}

              </p>
            ))}

            <p className="pt-2">
              <strong className="text-red-500">Notice:</strong> Take a screenshot of this letter for college entry and admission.
            </p>
            <div className="flex gap-4 pt-4">
              <Button variant="outline" onClick={() => router.push("/apply")}>Edit</Button>
              <Button onClick={handleOkClick}>Ok</Button>
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
          Your application has been successfully received. Please check your email and WhatsApp for further updates.
        </p>
      </motion.div>
    </div>
  );
};

export default Page;
