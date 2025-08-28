"use client";

import Navbar from "./Navbar";

export default function WebpageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mt-[90px] px-4">
        {children}
      </main>
    </>
  );
}