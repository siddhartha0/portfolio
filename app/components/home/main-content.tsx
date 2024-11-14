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
          className="text-8xl uppercase font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skilled and
          <br />
          Innovative
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
      </div>
      <motion.div
        className="absolute top-12 right-12 bg-white text-black p-6 rounded-lg shadow-lg max-w-xs"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <h3 className="font-bold mb-2">Key Skills :</h3>
        <p className="text-sm">
          Frontend: React, HTML, CSS, JavaScript, Redux
          <br />
          Backend: Node.js, Express.js
          <br />
          Database: SQL, NO-SQL <br />
          Tools: Git, GitHub, Postman, VS Code
        </p>
      </motion.div>

      <motion.div
        className="absolute right-0 bottom-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
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
      </motion.div>
    </main>
  );
};
