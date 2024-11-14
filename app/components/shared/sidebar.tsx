"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Github } from "lucide-react";
import React from "react";

interface propTypes {
  children: React.ReactNode;
}

export const Sidebar = ({ children }: propTypes) => {
  return (
    <div className="flex    bg-gray-900 text-white justify-between  gap-9">
      <aside className="w-64 fixed top-0 left-0 min-h-screen bg-black p-8 flex flex-col justify-around ">
        <div>
          <p className="text-xl ">Portfoilo</p>
        </div>

        <Image
          src="/logo.png?height=120&width=120"
          alt="Hubfolio Logo"
          width={160}
          height={160}
          className="rounded-full  p-2"
        />

        <div className="">
          <p className="text-sm mb-2">sidddhartha.sunuwar@gmail.com</p>
          <p className="text-sm mb-4">(+977) 9819682900</p>
          <p className="text-sm mb-8">Kathmandu, Nepal</p>
          <div className="flex space-x-4">
            <Facebook size={20} />
            <Instagram size={20} />
            <Github size={20} />
          </div>
          <p className="text-xs mt-8">© 2024, All Rights Reserved</p>
        </div>
      </aside>
      <div className="pl-64">{children}</div>
    </div>
  );
};
