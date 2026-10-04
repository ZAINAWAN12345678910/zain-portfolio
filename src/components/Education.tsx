"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    degree: "BACHELOR OF SCIENCE IN ARTIFICIAL INTELLIGENCE",
    institution: "University of Wah",
    location: "Wah Cantt, Pakistan",
    date: "02/09/2021 – 20/08/2025",
    level: "EQF level 6",
    details: "Machine Learning, Deep Learning, Natural Language Processing (NLP), Data Science, Computer Vision, Neural Networks, Database Systems, Operating Systems, Software Engineering."
  },
  {
    id: 2,
    degree: "INTERMEDIATE IN PRE-ENGINEERING",
    institution: "Federal College of Science and Commerce",
    location: "Attock, Pakistan",
    date: "05/09/2019 – 10/09/2021",
    level: "EQF level 4",
    details: "Core Subjects: Mathematics, Physics, Chemistry. Key Skills: Analytical Thinking, Mathematical Analysis, Problem Solving, Scientific Reasoning, Quantitative Aptitude."
  },
  {
    id: 3,
    degree: "MATRICULATION (WITH BIOLOGY)",
    institution: "Jinnah Public School",
    location: "Attock, Pakistan",
    date: "05/03/2017 – 10/04/2019",
    level: "EQF level 3",
    details: "Core Subjects: Biology, Chemistry, Physics, Mathematics. Key Skills: Foundations of Life Sciences, Basic Laboratory Practices, Scientific Reasoning, Fundamental Mathematics."
  }
];

export default function Education() {
  return (
    <section id="education" className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            My academic background laying the foundation for AI and Computer Science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-6 hover:bg-white/10 transition-colors duration-500"
            >
              <div className="text-gray-400 font-mono text-xs mb-2 uppercase tracking-widest">{edu.date}</div>
              <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
              <div className="text-gray-300 font-medium mb-4">{edu.institution}</div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {edu.details}
              </p>
              <div className="text-xs font-mono text-gray-500 bg-white/5 inline-block px-3 py-1 rounded-full border border-white/10">
                {edu.level}
              </div>

              {/* Hover glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-gray-400/20 to-white/20 rounded-[20px] blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
