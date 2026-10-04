import ScrollyCanvas from "@/components/ScrollyCanvas";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      {/* Scroll-Linked Animation Section */}
      <ScrollyCanvas />
      
      {/* CV Sections */}
      <div id="about" className="scroll-mt-20">
        <Experience />
        <Education />
        <Skills />
      </div>
      
      {/* Simple Footer */}
      <footer className="relative z-20 py-8 text-center text-gray-500 border-t border-white/10 bg-[#121212]">
        <p>&copy; {new Date().getFullYear()} Zain Ul Hassan Awan. All rights reserved.</p>
      </footer>
    </main>
  );
}
