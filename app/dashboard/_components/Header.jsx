import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import ModeToggle from "@/components/theme-toggle";
function Header() {
  return (
    <div className="px-5 py-3 flex justify-between items-center shadow-md dark:shadow-light rounded-b-3xl">
      <div className="flex gap-3 items-center">
        <Image src="/logo.svg" alt="logo" width={24} height={24} />
        <h1 className="text-xl font-bold text-primary dark:text-foreground">
          Voice Synthesis V1
        </h1>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="outline">Dashboard</Button>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
