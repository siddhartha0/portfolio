"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../shared/Button";
import { Card, CardContent } from "../shared/Card";

export const SecondaryContent = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const [ref, inView] = useInView();
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <section className="hero bg-gray-100 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              I'm a passionate web developer creating amazing digital
              experiences
            </p>
            <Button className="mr-4">View Projects</Button>
            <Button variant="outline">Contact Me</Button>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="about py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" animate={controls} variants={fadeIn}>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a skilled web developer with experience in creating responsive
              and user-friendly websites. My expertise includes React, Next.js,
              and Tailwind CSS.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of
              coffee.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="projects bg-gray-100 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate={controls}
                variants={fadeIn}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      A brief description of project {i} and its key features.
                    </p>
                    <Button variant="outline" className="w-full">
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" animate={controls} variants={fadeIn}>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" className="flex items-center">
                <Github className="mr-2" />
                GitHub
              </Button>
              <Button variant="outline" className="flex items-center">
                <Linkedin className="mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" className="flex items-center">
                <Mail className="mr-2" />
                Email
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
