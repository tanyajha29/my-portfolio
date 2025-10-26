import React from "react";
import { motion } from "framer-motion";

/*
  Single-file React component for Tanya Jha's portfolio.
  - Uses Tailwind CSS classes (Tailwind v3)
  - Place project images in public/images/
  - Place resume at public/TanyaJha_Resume.pdf
  - Edit the `projects` array below to update projects
  - Drop this file into src/ (e.g., src/App.jsx) and ensure index.css imports Tailwind directives
*/

const projects = [

  {
    title: "College Companion Website",
    desc: "Student assistant web app to manage attendance and career planning.",
    tech: ["React", "Node.js", "MySQL"],
    github: "#",
    demo: "#",
    image: "/images/college_companion.png",
  },
  {
    title: "Credit Card Fraud Detection",
    desc: "A Data warehousing and mining project to detect fraudulent credit card transactions trained by and ML model.",
    tech: ["Python", "pandas", "scikit-learn"],
    github: "#",
    demo: "#",
    image: "/images/finance.png",
  },
  {
    title: "Finance ML Project",
    desc: "Backtested trading strategies using yfinance and ML metrics.",
    tech: ["Python", "pandas", "scikit-learn"],
    github: "#",
    demo: "#",
    image: "/images/finance.png",
  },
];

const Nav = () => (
  <nav className="fixed w-full z-40 top-0 left-0 bg-white/60 backdrop-blur-md shadow-sm">
    <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">TJ</div>
        <span className="font-semibold text-gray-800">Tanya Jha</span>
      </div>
      <div className="hidden md:flex gap-6 text-gray-700 font-medium">
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#skills" className="hover:text-blue-600">Skills</a>
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>
    </div>
  </nav>
);

const GradientWaves = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 820" xmlns="http://www.w3.org/2000/svg" >
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#EEF2FF" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1">
          <stop offset="0%" stopColor="#DBEAFE" />
          <stop offset="100%" stopColor="#E9D5FF" />
        </linearGradient>
      </defs>

      <g opacity="0.9">
        <path fill="url(#g1)" d="M0,320 C240,400 360,240 720,300 C1080,360 1260,420 1440,340 L1440,820 L0,820 Z">
          <animate attributeName="d" dur="12s" repeatCount="indefinite" values="M0,320 C240,400 360,240 720,300 C1080,360 1260,420 1440,340 L1440,820 L0,820 Z; M0,360 C240,300 420,380 720,320 C1020,260 1200,300 1440,360 L1440,820 L0,820 Z; M0,320 C240,400 360,240 720,300 C1080,360 1260,420 1440,340 L1440,820 L0,820 Z" />
        </path>
      </g>

      <g opacity="0.75">
        <path fill="url(#g2)" d="M0,420 C300,380 420,460 720,420 C1020,380 1260,300 1440,360 L1440,820 L0,820 Z">
          <animate attributeName="d" dur="18s" repeatCount="indefinite" values="M0,420 C300,380 420,460 720,420 C1020,380 1260,300 1440,360 L1440,820 L0,820 Z; M0,360 C260,300 420,320 720,360 C1020,400 1260,460 1440,420 L1440,820 L0,820 Z; M0,420 C300,380 420,460 720,420 C1020,380 1260,300 1440,360 L1440,820 L0,820 Z" />
        </path>
      </g>
    </svg>
  </div>
);

const Hero = ({ name, title }) => (
  <header className="relative pt-24 pb-16">
    <GradientWaves />
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-2/3">
        <motion.h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Hi, I’m <span className="text-blue-600">{name}</span>
        </motion.h1>
        <motion.p className="text-lg text-gray-700 mb-6 max-w-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          {title}
        </motion.p>
        <div className="flex gap-4">
          <a href="#projects" className="inline-block px-5 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">View Projects</a>
          <a href="/my_resume.pdf" download className="inline-block px-5 py-3 border border-gray-200 rounded-full hover:bg-gray-100 transition">Download Resume</a>
        </div>
      </div>

      <div className="w-full md:w-1/3 flex justify-center md:justify-end">
        {/* Profile image placeholder - replace with your photo */}
        <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100 bg-white">
          <img src="/images/my_img.jpeg" alt="Tanya Jha" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </header>
);

const About = () => (
  <section id="about" className="py-16">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Completed a diploma from Government Polytechnic, Thane, and currently pursuing BE at Vidyalankar Institute of Technology. I enjoy building full-stack web applications, experimenting with machine learning models, and exploring cybersecurity concepts.
      </p>
      <p className="text-gray-700 leading-relaxed">
        I have also won a state-level technical paper presentation and keep learning new tools and technologies every day.
      </p>
    </div>
  </section>
);

const Skills = () => {
  const web = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js"];
  const ml = ["Python", "pandas", "scikit-learn", "numpy"];
  const tools = ["Git", "MySQL", "Linux", "Postman"];

  return (
    <section id="skills" className="py-12 bg-white/60">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Web & Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {web.map((s) => (
                <span key={s} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">{s}</span>
              ))}
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Machine Learning</h3>
            <div className="flex flex-wrap gap-2">
              {ml.map((s) => (
                <span key={s} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">{s}</span>
              ))}
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((s) => (
                <span key={s} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="py-16">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article key={i} whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow overflow-hidden">
            <div className="h-44 bg-gray-100">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-gray-600 mb-3 text-sm">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full">{t}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <a href={p.github} target="_blank" rel="noreferrer" className="text-sm text-gray-800 hover:text-blue-600">View Code</a>
                  {p.demo !== "/" && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm text-blue-600">Live</a>
                  )}
                </div>
                <a href="/" className="text-sm text-gray-500">More →</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

const Contact = ({ github, linkedin }) => (
  <section id="contact" className="py-16 bg-blue-600 text-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-3">Let’s build something together</h2>
      <p className="mb-6">I’m open to internships, freelance, and collaboration. Reach out via email or connect on LinkedIn.</p>
      <div className="flex items-center justify-center gap-4">
        <a href="mailto:tanyajha@example.com" className="px-5 py-3 bg-white text-blue-600 rounded-full font-medium">Email Me</a>
        <a href={github} target="_blank" rel="noreferrer" className="px-5 py-3 border border-white/30 rounded-full">GitHub</a>
        <a href={linkedin} target="_blank" rel="noreferrer" className="px-5 py-3 border border-white/30 rounded-full">LinkedIn</a>
      </div>
      <div className="mt-6">
        <a href="/my_resume.pdf" download className="inline-block px-6 py-2 bg-white text-blue-600 rounded-full font-semibold">Download Resume</a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-6 text-center text-sm text-gray-600">
    © {new Date().getFullYear()} Tanya Jha • Built with React & Tailwind
  </footer>
);

export default function PortfolioApp() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-slate-50 to-indigo-50 text-gray-800">
      <Nav />
      <main className="relative">
        <Hero name={"Tanya Jha"} title={"IT Student | Full stack web developer | cyber security enthusiast | ML model Developer"} />
        <About />
        <Skills />
        <ProjectsSection />
        <Contact github={"https://github.com/tanyajha29"} linkedin={"https://www.linkedin.com/in/tanya-jha-b2b72a2a0/"} />
      </main>
      <Footer />
    </div>
  );
}
