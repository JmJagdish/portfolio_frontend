"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function FloatingThemeButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.35,
        type: "spring",
        stiffness: 220,
      }}
      className="fixed bottom-6 right-6 z-999"
    >
        <ThemeToggle />
    </motion.div>
  );
}
