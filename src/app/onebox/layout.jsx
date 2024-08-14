"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import {GoHomeFill} from "react-icons/go";
import { RiUserSearchFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { RiLayout4Fill } from "react-icons/ri";
import { FaChartSimple } from "react-icons/fa6";
import { FaInbox } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";



function layout({children}) {

    const {data:session}=useSession();
    const { theme, toggleTheme } = useTheme();

  return (
    <section className="h-screen grid grid-cols-12">
      {/* Side navigation */}
      <aside className="col-span-1 flex flex-col items-center justify-between border-r-[1px] py-4">
        <Image src={"/small-logo.png"} alt="Logo" width={37} height={37} />
        <div className="flex flex-col space-y-4">
          <a
            href="#"
            className=" text-muted-foreground p-2 rounded"
          >
            <GoHomeFill className="h-7 w-7  " />
          </a>
          <a
            href="#"
            className=" text-muted-foreground p-2 rounded"
          >
            <RiUserSearchFill className="h-7 w-7" />
          </a>
          <a
            href="#"
            className=" text-muted-foreground p-2 rounded"
          >
            <IoMdMail className="h-7 w-7" />
          </a>
          <a
            href="#"
            className=" text-muted-foreground p-2 rounded"
          >
            <IoIosSend className="h-7 w-7" />
          </a>
          <a
            href="#"
            className=" text-muted-foreground p-2 rounded"
          >
            <RiLayout4Fill className="h-7 w-7" />
          </a>
          <a
            href="#"
            className="bg-secondary p-2 rounded relative"
          >
            <div className="bg-rose-500 absolute -top-3 -right-2 rounded-full
            flex items-center justify-center text-xs">
                <span className="p-1 text-xs">12+</span>
            </div>
            <FaInbox className="h-7 w-7" />
          </a>
          <a
            href="#"
            className="text-muted-foreground p-2 rounded"
          >
            <FaChartSimple className="h-7 w-7" />
          </a>
        </div>
        <Image
          src={session?.user?.image}
          alt="Logo"
          width={37}
          height={37}
          className="rounded-full"
        />
      </aside>
      {/* Main content */}
      <main className="col-span-11">
        {/* Navigation */}
        <nav className="border-b-[1px] px-4 py-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">Inbox</h1>
          <div className="flex items-center space-x-4">
            <Switch onClick={toggleTheme} />

            <Popover>
              <PopoverTrigger className="flex">
                Hi! {session?.user?.name} <ChevronDown />
              </PopoverTrigger>
              <PopoverContent className="w-40">
                <Button variant={"ghost"} className="w-full">
                  Sign out
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </nav>

        {/* Dashboard */}
        <section>{children}</section>
      </main>
    </section>
  );
}

export default layout