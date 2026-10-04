"use client";

import { useTransform, motion, MotionValue } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% scroll
  // Fades out by 15%
  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  // Section 2: 30% scroll
  // Fades in from 15% to 30%, stays until 40%, fades out by 45%
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.45], [100, -100]);

  // Section 3: 60% scroll
  // Fades in from 45% to 60%, stays until 70%, fades out by 80%
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.8], [100, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      
      {/* Section 1 */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute top-1/2 left-0 w-full -translate-y-1/2 text-center text-white px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">Zain Ul Hassan Awan</h1>
        <p className="text-xl md:text-2xl font-light tracking-wide text-gray-400 drop-shadow-md mb-6">
          AI Engineer & Data Scientist
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-300 font-mono">
          <a href="mailto:zainulhassanawan73@gmail.com" className="hover:text-white transition-colors pointer-events-auto">zainulhassanawan73@gmail.com</a>
          <span className="hidden md:block">•</span>
          <a href="tel:+923345903619" className="hover:text-white transition-colors pointer-events-auto">+92 3345903619</a>
          <span className="hidden md:block">•</span>
          <a href="https://linkedin.com/in/zain-ul-hassan-awan" target="_blank" rel="noreferrer" className="hover:text-white transition-colors pointer-events-auto">LinkedIn</a>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-full md:w-1/2 px-8 md:px-24 text-left text-white"
      >
        <h2 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Artificial Intelligence<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Specialist.</span>
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-md">
          Gold Medalist & Microsoft Certified Azure AI Associate with a proven track record in Machine Learning, NLP, and AI-driven healthcare systems.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-full md:w-1/2 px-8 md:px-24 text-right text-white"
      >
        <h2 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Bridging AI<br/>Research and<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Industry.</span>
        </h2>
      </motion.div>

    </div>
  );
}
