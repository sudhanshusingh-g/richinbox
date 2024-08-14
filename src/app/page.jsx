"use client";

import LoginCard from "@/components/LoginCard";
import Image from "next/image";

export default function Home() {
  

  return (
    <main className="h-screen flex flex-col justify-between text-center">
      <nav className="border-b-[1px] p-2 flex items-center justify-center">
        <Image src={"/wide-logo.png"} alt="Logo" width={300} height={100} />
      </nav>
      <div className="flex items-center justify-center">
        <LoginCard />
      </div>
      <footer className="border-t-[1px] p-2 flex items-center justify-center">
        <p className="text-sm">© All rights reserved.</p>
      </footer>
    </main>
  );
}
