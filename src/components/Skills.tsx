"use client";

import { motion } from "framer-motion";

const techSkills = [
  "Python", "Machine Learning", "Data Science", "Data Collection", 
  "Data Processing", "Data Analysis", "Data Visualisation", 
  "Artificial Intelligence", "NumPy", "Pandas", "NLTK", 
  "Matplotlib", "sklearn", "TensorFlow", "Microsoft Office"
];

const digitalSkills = [
  { name: "Information and data literacy", level: "ADVANCED (6/6)" },
  { name: "Communication and collaboration", level: "ADVANCED (5/6)" },
  { name: "Digital content creation", level: "ADVANCED (6/6)" },
  { name: "Safety", level: "INTERMEDIATE (4/6)" },
  { name: "Problem solving", level: "ADVANCED (6/6)" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Competencies</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            A comprehensive overview of my technical toolkit and digital proficiencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Tech Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gray-500 inline-block" /> Core Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {techSkills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm hover:bg-white/10 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Digital Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gray-500 inline-block" /> Digital Skills Framework
            </h3>
            <div className="space-y-4">
              {digitalSkills.map((ds, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-300">{ds.name}</span>
                  <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">{ds.level}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
              <div className="flex gap-4">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex-1 text-center">
                  <div className="text-gray-400 text-xs mb-1">MOTHER TONGUE</div>
                  <div className="text-white font-bold tracking-wide">URDU</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex-1 text-center">
                  <div className="text-gray-400 text-xs mb-1">PROFICIENT</div>
                  <div className="text-white font-bold tracking-wide">ENGLISH</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
