"use client";
import React from "react";
import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideNav() {
  const MenuItems = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: PanelsTopLeft,
    },
    {
      id: 2,
      name: "Create New",
      path: "/dashboard/create-new",
      icon: FileVideo,
    },
    {
      id: 3,
      name: "Upgrade",
      path: "/upgrade",
      icon: ShieldPlus,
    },
    {
      id: 4,
      name: "Account",
      path: "/account",
      icon: CircleUser,
    },
  ];

  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="w-64 h-screen p-5 shadow-md dark:shadow-light">
      <div className="grid gap-3">
        {MenuItems.map(({ id, name, path, icon: Icon }) => (
          <Link href={path} key={id}>
            <div
              className={`flex items-center gap-3 p-3 rounded-md hover:cursor-pointer hover:bg-primary hover:text-primary-foreground 
                ${
                  pathname === path ? "bg-primary text-primary-foreground" : ""
                }`}
            >
              <Icon />
              <h2>{name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
