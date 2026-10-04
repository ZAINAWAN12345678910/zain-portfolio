"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Lab Engineer",
    company: "National Excellence Institute",
    location: "Islamabad, Pakistan",
    date: "05/01/2026 – Current",
    description: [
      "Conducting lab sessions for Programming Fundamentals, Object-Oriented Programming, and Operating Systems.",
      "Helping students understand core concepts such as OOP principles, problem solving, and basic data structures.",
      "Assisting students during coding practice and debugging in C++ and Java.",
      "Preparing lab tasks, quizzes, and evaluating student performance."
    ]
  },
  {
    id: 2,
    role: "Admission Officer & Computer Teacher",
    company: "Step Academy",
    location: "Islamabad, Pakistan",
    date: "15/01/2026 – Current",
    description: [
      "Taught basic computer science and programming concepts to beginner students.",
      "Guided students regarding course selection and academic planning.",
      "Managed student admissions and maintained academic records.",
      "Communicated with students and parents to support their learning progress."
    ]
  },
  {
    id: 3,
    role: "Data Science Intern",
    company: "Stella Technology",
    location: "Islamabad, Pakistan",
    date: "01/08/2025 – 31/10/2025",
    description: [
      "Worked on healthcare-related NLP and data science projects involving conversational and translation models.",
      "Enhanced hands-on skills in data preprocessing, model training, evaluation, and deployment."
    ]
  },
  {
    id: 4,
    role: "Online Python Instructor",
    company: "Cyberseez",
    location: "Islamabad, Pakistan",
    date: "01/05/2024 – 31/08/2025",
    description: [
      "Taught Python programming to beginner and intermediate-level students through online sessions.",
      "Developed structured course materials and guided students through practical exercises and projects."
    ]
  },
  {
    id: 5,
    role: "Computer Teacher",
    company: "Noor-ul-Ilm Academy",
    location: "Islamabad, Pakistan",
    date: "01/09/2023 – 30/09/2025",
    description: [
      "Taught programming, databases, and web development to students of classes 9 to 12.",
      "Created lesson plans and conducted practical labs for hands-on understanding."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-20 w-full min-h-screen bg-[#121212] py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            A timeline of my professional journey in AI, Data Science, and Education.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-[8.5rem] top-2 w-3 h-3 rounded-full bg-gray-500 border-4 border-[#121212] z-10" />
              <div className="hidden md:block absolute left-[8.85rem] top-2 bottom-[-3rem] w-px bg-white/10" />
              
              <div className="md:grid md:grid-cols-[1fr_3fr] gap-8">
                <div className="mb-4 md:mb-0 text-gray-400 font-mono text-sm pt-1 md:text-right">
                  {exp.date}
                </div>
                <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-6 md:p-8 hover:bg-white/10 transition-colors duration-500">
                  <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                  <div className="text-gray-400 mb-4 font-medium">{exp.company} • {exp.location}</div>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  {/* Hover glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-400/20 to-white/20 rounded-[20px] blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 -z-10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
