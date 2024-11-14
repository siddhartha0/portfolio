"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Dribbble } from "lucide-react";
import React from "react";

interface propTypes {
  children: React.ReactNode;
}

export const Sidebar = ({ children }: propTypes) => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <aside className="w-64 bg-black p-8 flex flex-col">
        <div className="mb-12">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Hubfolio Logo"
            width={80}
            height={80}
            className="rounded-full bg-white p-2"
          />
        </div>
        <nav className="mb-auto">
          <motion.button
            className="text-lg font-semibold mb-4 block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Menu
          </motion.button>
        </nav>
        <div className="mt-auto">
          <p className="text-sm mb-2">hello@hubfolio.agency</p>
          <p className="text-sm mb-4">(+010) 523 68 69</p>
          <p className="text-sm mb-8">Based in Sanfrancisco, CA</p>
          <div className="flex space-x-4">
            <Facebook size={20} />
            <Instagram size={20} />
            <Dribbble size={20} />
          </div>
          <p className="text-xs mt-8">© 2024, All Rights Reserved</p>
        </div>
      </aside>
      {children}
    </div>
  );
};
