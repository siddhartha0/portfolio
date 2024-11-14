"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const MainContent = () => {
  return (
    <main className="flex-1 flex flex-col gap-4 p-12 relative ">
      <header className="mb-12">
        <h1 className="text-4xl font-bold">MERN Stack Developer</h1>
      </header>
      <div className="relative">
        <motion.h2
          className="text-8xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Brand and
          <br />
          Design
        </motion.h2>
        <motion.p
          className="text-base mb-8 mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Hi, I’m siddhartha sunuwar! A passionate MERN Stack Developer with
          hands-on experience in building dynamic and user-centric applications.
          <br />I specialize in creating efficient, scalable, and visually
          appealing web applications. Let’s turn your ideas into reality!”
        </motion.p>
        <motion.div
          className="absolute right-0 bottom-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Chess pieces"
            width={300}
            height={300}
          />
        </motion.div>
      </div>
      <motion.div
        className="absolute top-12 right-12 bg-white text-black p-6 rounded-lg shadow-lg max-w-xs"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <h3 className="font-bold mb-2">Based in Boston, MA.</h3>
        <p className="text-sm">
          We're an agency that focused on crafting experience design &
          development digital products.
        </p>
      </motion.div>
      <div className="absolute bottom-12 right-12 flex space-x-2">
        {["Database", "Backend", "Frontend"].map((skill, index) => (
          <motion.div
            key={skill}
            className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </main>
  );
};
