"use client"; // top to the file

import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const HELLO_TEXT = "Hellooooo";
const messageSpanAnimationVariant = {
  hidden: {
    opacity: 0,
    y: 4,
    filter: "blur(10px)",
    originY: 1,
    originX: 0.5,
    scale: 0.9,
    color: "rgb(107, 114, 128)",
    // color: "#C77CFF",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    color: "#1D1B16",
    transition: {
      color: { duration: 3 },
      filter: { duration: 1 },
      opacity: { duration: 0.6 },
      scale: {
        type: "spring",
        bounce: 0.2,
        duration: 2,
      },
      y: {
        type: "spring",
        bounce: 0.2,
        duration: 2,
      },
    },
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <motion.div className="text-4xl">
          {HELLO_TEXT.split("").map((char, index) => (
            <motion.span
              key={char + "-" + index}
              variants={messageSpanAnimationVariant}
              initial="hidden"
              animate="visible"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
