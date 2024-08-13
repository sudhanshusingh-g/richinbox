"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";


export default function Home() {

  return (
    <main className={` h-screen flex justify-between flex-col`}>
      <nav className="border-b-[1px] p-4 flex items-center justify-center">
        <div>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            priority
            className="w-40"
          />
        </div>
      </nav>
      <div className=" flex items-center justify-center">
        <Card className={"text-center w-2/3 md:w-1/3 flex flex-col gap-y-4"}>
          <CardHeader>
            <CardTitle className={"text-md"}>Create new account</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <Button className="w-full flex gap-2" variant={"outline"}>
                <Image
                src={"/google.svg"}
                width={100}
                height={100}
                alt="Google logo"
                className="h-4 w-4"
                />
                <span>Sign Up with Google</span>
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full">
              <Button variant={"primary"}>
                <span className="text-white font-medium text-xs">Create an Account</span>
              </Button>
              <p className="my-4 text-xs">
                Already have an account? <Link href={"#"}>Sign In</Link>
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
      <footer className="border-t-[1px] p-4 flex items-center justify-center">
        <p className="text-muted-foreground text-xs">
          © 2023 ReachInbox.All rights reserved.
        </p>
      </footer>
    </main>
  );
}
