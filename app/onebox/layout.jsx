"use client";

import { useState } from "react";
import {
  ChartNoAxesColumn,
  ChevronDown,
  Home,
  Inbox,
  Mail,
  Send,
  TableOfContentsIcon,
  UserSearchIcon,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { useTheme } from "@/context/themeContext";

function Layout({ children }) {
  const [activeLink, setActiveLink] = useState("Inbox");
  const { theme, toggleTheme } = useTheme();
  

  return (
    <div className={`${theme} flex h-screen`}>
      {/* Sidebar */}
      <aside className={`  flex flex-col justify-between w-20`}>
        <div className="p-4 text-lg font-bold flex items-center justify-between gap-4">
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="Logo"
            style={{ width: "auto", height: "auto" }}
            className="mx-auto"
          />
        </div>
        <nav className="flex-1 flex flex-col items-center space-y-4 px-2 py-4">
          <a
            href="#"
            onClick={() => setActiveLink("Home")}
            className={`${
              activeLink === "Home" ? "bg-slate-400 text-white p-2 rounded" : ""
            }`}
          >
            <Home />
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("UserSearch")}
            className={`${
              activeLink === "UserSearch"
                ? "bg-slate-400 text-white p-2 rounded"
                : ""
            }`}
          >
            <UserSearchIcon />
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("Mail")}
            className={`${
              activeLink === "Mail" ? "bg-slate-400 text-white p-2 rounded" : ""
            }`}
          >
            <Mail />
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("Send")}
            className={`${
              activeLink === "Send" ? "bg-slate-400 text-white p-2 rounded" : ""
            }`}
          >
            <Send />
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("TableOfContents")}
            className={`${
              activeLink === "TableOfContents"
                ? "bg-slate-400 text-white p-2 rounded"
                : ""
            }`}
          >
            <TableOfContentsIcon />
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("Inbox")}
            className={`${
              activeLink === "Inbox"
                ? "bg-slate-400 text-white p-2 rounded"
                : ""
            }`}
          >
            <Inbox />
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("ChartNoAxes")}
            className={`${
              activeLink === "ChartNoAxes"
                ? "bg-slate-400 text-white p-2 rounded"
                : ""
            }`}
          >
            <ChartNoAxesColumn />
          </a>
        </nav>
        <div>
          <div className="w-14 h-14 bg-teal-800 mx-auto rounded-full"></div>
        </div>
      </aside>

      {/* Main content */}
      <div className=" flex-1 flex flex-col">
        {/* Top nav */}
        <header className=" shadow p-4 flex justify-between items-center">
          <h1 className="text-xl  font-semibold">Inbox</h1>
          <div className="flex items-center space-x-4">
            <Switch checked={theme === "dark"} onClick={toggleTheme} />
            <button className="flex items-center justify-center text-sm">
              Tim's Workspace <ChevronDown size={16} />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 h-full overflow-auto p-6">
          {/* Dashboard Content */}
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
