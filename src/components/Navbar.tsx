"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-transparent mix-blend-difference text-white"
    >
      <div className="font-bold text-xl tracking-tighter">
        <Link href="/">ZAIN UL HASSAN</Link>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
        <Link href="#about" className="hover:text-gray-300 transition-colors">ABOUT</Link>
        <Link href="#experience" className="hover:text-gray-300 transition-colors">EXPERIENCE</Link>
        <Link href="#education" className="hover:text-gray-300 transition-colors">EDUCATION</Link>
        <Link href="#skills" className="hover:text-gray-300 transition-colors">SKILLS</Link>
      </div>
    </motion.nav>
  );
}
