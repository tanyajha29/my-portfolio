import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import AnimatedBackground from "./components/animated_background";
import chatbotAnimation from "./assets/chatbot.json";

// --- Icon imports ---
import {
  FaBrain,
  FaDatabase,
  FaLaptopCode,
  FaShieldAlt,
  FaTools as FaGenericTool,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiPython,
  DiJava,
  DiPhp,
  DiNodejsSmall,
  DiReact,
  DiBootstrap,
  DiGit,
  DiGithubBadge,
  DiMysql,
  DiPostgresql,
  DiLinux,
  DiNpm,
  DiVisualstudio,
} from "react-icons/di";

import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiJupyter,
  SiAnaconda,
  SiPostman,
  SiCplusplus,
  SiSqlite,
  SiMlflow,
} from "react-icons/si";

// Skill icon map
const skillIcons = {
  HTML: <DiHtml5 className="text-4xl text-orange-500" />,
  CSS: <DiCss3 className="text-4xl text-blue-500" />,
  JavaScript: <DiJavascript1 className="text-4xl text-yellow-400" />,
  TypeScript: <SiTypescript className="text-4xl text-blue-600" />,
  Python: <DiPython className="text-4xl text-blue-400" />,
  "C++": <SiCplusplus className="text-4xl text-blue-700" />,
  Java: <DiJava className="text-4xl text-red-500" />,
  PHP: <DiPhp className="text-4xl text-indigo-500" />,
  React: <DiReact className="text-4xl text-cyan-400" />,
  "Node.js": <DiNodejsSmall className="text-4xl text-green-500" />,
  Express: <SiExpress className="text-4xl text-gray-400" />,
  Tailwind: <SiTailwindcss className="text-4xl text-teal-400" />,
  Bootstrap: <DiBootstrap className="text-4xl text-purple-600" />,
  "Framer Motion": <DiReact className="text-4xl text-purple-500" />,
  Pandas: <SiJupyter className="text-4xl text-orange-600" />,
  "scikit-learn": <FaBrain className="text-4xl text-orange-500" />,
  NumPy: <SiAnaconda className="text-4xl text-green-500" />,
  MLFlow: <SiMlflow className="text-4xl text-blue-400" />,
  "Data Analysis": <FaDatabase className="text-4xl text-purple-400" />,
  MySQL: <DiMysql className="text-4xl text-blue-400" />,
  PostgreSQL: <DiPostgresql className="text-4xl text-blue-600" />,
  SQLite: <SiSqlite className="text-4xl text-blue-700" />,
  Git: <DiGit className="text-4xl text-orange-600" />,
  GitHub: <DiGithubBadge className="text-4xl text-white" />,
  "VS Code": <DiVisualstudio className="text-4xl text-blue-500" />,
  Postman: <SiPostman className="text-4xl text-orange-500" />,
  Linux: <DiLinux className="text-4xl text-gray-400" />,
  npm: <DiNpm className="text-4xl text-red-600" />,
  OSINT: <FaGenericTool className="text-4xl text-gray-400" />,
};

// Three-column skill cards
const cardSkills = [
  {
    title: "Web Development",
    icon: <FaLaptopCode />,
    color: "border-purple-600/50",
    skills: ["React", "JavaScript", "Node.js", "Express", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "Machine Learning",
    icon: <FaBrain />,
    color: "border-cyan-600/50",
    skills: ["Python", "Pandas", "scikit-learn", "NumPy", "Data Analysis", "Viz"],
  },
  {
    title: "Tools & Core",
    icon: <FaGenericTool />,
    color: "border-orange-600/50",
    skills: ["Git", "GitHub", "MySQL", "SQLite", "Linux", "OSINT", "Postman"],
  },
];

// Project Data
const projects = [
  {
    title: "RecruitSafe",
    desc: "An intelligent recruitment security platform designed to detect and analyze suspicious job postings, recruitment scams, and potentially fraudulent hiring activity, helping candidates make safer decisions during the job search.",
    tech: ["React", "FastAPI", "Python", "AI/ML", "Cybersecurity"],
    github: "https://github.com/tanyajha29/RecruitSafe",
    image: "/images/recruitSafe.jpg",
    featured: true,
  },
  {
    title: "DiagramGenie",
    desc: "An AI-powered diagram generation platform that transforms natural-language descriptions into structured technical diagrams such as flowcharts, system architectures, ER diagrams, and other visual representations.",
    tech: ["React", "FastAPI", "AI", "Mermaid", "Full Stack"],
    github: "https://github.com/tanyajha29/Diagram_Genie/",
    demo: "https://diagram-genie-ten.vercel.app/",
    image: "/images/diagramGeniw.png",
  },
  {
    title: "DristiScan - AI Code Security Scanner",
    desc: "AI-assisted code security scanner that highlights insecure patterns, prioritizes remediation, and helps teams catch risks earlier in the development lifecycle.",
    tech: ["React", "FastAPI", "SAST", "OWASP"],
    github: "https://github.com/tanyajha29/Drishti-Scan",
    demo: "http://drishti-scan.vercel.app/",
    image: "/images/Dristi_scan.jpg",
  },
  {
    title: "College Companion Platform",
    desc: "Full-stack student productivity platform that streamlines attendance tracking, academic planning, reminders, and day-to-day campus workflows in one secure experience.",
    tech: ["React", "Node.js", "MySQL", "Secure Auth"],
    github: "https://github.com/tanyajha29/college-companion",
    image: "/images/college_companion.jpg",
  },
  {
    title: "Global Conflict Impact Intelligence Platform",
    desc: "RAG-powered intelligence platform that converts conflict-related reports into searchable summaries, trend signals, and faster decision support for analytical workflows.",
    tech: ["React", "FastAPI", "RAG", "PostgreSQL"],
    github: "https://github.com/sejaldhanve/Global-Risk-Intelligence",
    image: "/images/GRI.png",
  },
  {
    title: "FormOS - Intelligent Document Processing Platform",
    desc: "Document intelligence platform that uses OCR and AI extraction to transform unstructured forms into validated structured records with faster review turnaround.",
    tech: ["OCR", "OpenAI/Ollama", "AWS", "Docker"],
    github: "http://github.com/mansijadhav07/FormOS/",
    demo: "https://www.formos.online/",
    image: "/images/formOS.jpg",
  },
];

/* ---------- Page Components ---------- */

// Navbar with hamburger for mobile
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.2, ease: "easeInOut" } },
  };

  const MobileLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setIsOpen(false)}
      className="py-4 text-3xl font-semibold text-gray-200 transition-colors hover:text-cyan-400"
    >
      {children}
    </a>
  );

  return (
    <>
      <nav className="fixed left-0 top-0 z-40 w-full bg-slate-900/70 shadow-lg backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 sm:px-8">
          <div className="flex items-center gap-4">
            <a href="#hero">
              <img
                src="/images/my_img.jpeg"
                alt="Tanya Jha Profile"
                className="h-10 w-10 rounded-full border-2 border-cyan-400 object-cover shadow-xl transition-all hover:scale-105"
              />
            </a>
            <span className="hidden text-xl font-bold tracking-wider text-cyan-400 sm:block">Tanya Jha</span>
          </div>

          <div className="hidden items-center gap-6 font-medium text-gray-200 md:flex">
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-200 transition-colors hover:text-cyan-400"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileNavVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-30 flex h-screen w-full flex-col items-center justify-center bg-slate-900/95 backdrop-blur-lg md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-4 p-2 text-gray-300 transition-colors hover:text-cyan-400"
              aria-label="Close menu"
            >
              <FaTimes size={30} />
            </button>

            <nav className="flex flex-col items-center gap-6">
              <MobileLink href="#skills">Skills</MobileLink>
              <MobileLink href="#projects">Projects</MobileLink>
              <MobileLink href="#contact">Contact</MobileLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Hero section
const Hero = ({ name }) => {
  const [isHovered, setIsHovered] = useState(false);
  const roles = ["Full-Stack Developer", "Cybersecurity Enthusiast", "AI + DevSecOps Builder"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const roleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const pcImageVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        y: {
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    },
  };

  return (
    <header
      id="hero"
      className="relative flex min-h-screen items-start overflow-hidden bg-[#1a1a36] pt-20 text-center text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-500"
        style={{ backgroundImage: "url(/images/gradient_bg.jpg)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.4 : 0 }}
      />

      <motion.img
        src="/images/A_PC.png"
        alt="Developer PC Setup"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-lg opacity-90 xl:opacity-100"
        variants={pcImageVariants}
        animate="animate"
      />

      <div className="relative z-20 mx-auto max-w-6xl px-6">
        <motion.h1
          className="mb-6 text-5xl font-extrabold sm:text-6xl md:text-8xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-red-400 bg-clip-text text-transparent">
            {name}
          </span>
        </motion.h1>

        <div className="relative mx-auto flex h-12 w-full max-w-2xl items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentRoleIndex}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={roleVariants}
              className="absolute px-4 text-xl font-medium leading-snug tracking-wide text-cyan-300 sm:text-2xl md:text-3xl"
            >
              {roles[currentRoleIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

// Skills section
const Skills = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const IconBlock = ({ skillNames }) => (
    <div className="flex flex-wrap gap-4 pt-4">
      {skillNames.map((skill, index) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          className="rounded-lg bg-slate-700/50 p-2 shadow-md transition-colors hover:bg-slate-700"
          title={skill}
        >
          {skillIcons[skill] || <FaGenericTool className="text-4xl text-gray-400" />}
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="bg-[#0d0d1f] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-4xl font-extrabold text-cyan-400 sm:text-5xl">Skills & Tools</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {cardSkills.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className={`overflow-hidden rounded-2xl border ${card.color} bg-slate-800/70 p-8 shadow-xl transition-all hover:shadow-lg hover:shadow-cyan-500/10`}
            >
              <div className="mb-6 flex items-center gap-3">
                <span
                  className={`text-4xl text-white ${
                    card.title.includes("Web")
                      ? "text-purple-400"
                      : card.title.includes("Machine")
                      ? "text-cyan-400"
                      : "text-orange-400"
                  }`}
                >
                  {card.icon}
                </span>
                <h3
                  className={`text-2xl font-semibold ${
                    card.title.includes("Web")
                      ? "text-purple-300"
                      : card.title.includes("Machine")
                      ? "text-cyan-300"
                      : "text-orange-300"
                  }`}
                >
                  {card.title}
                </h3>
              </div>

              <IconBlock skillNames={card.skills} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RecruitSafeVisual = () => (
  <div className="relative h-full overflow-hidden rounded-[1.35rem] border border-cyan-300/15 bg-[#08192e]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(34,211,238,0.28),transparent_28%),radial-gradient(circle_at_84%_24%,rgba(168,85,247,0.22),transparent_28%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-60" />
    <div className="relative flex h-full items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-950/65 p-4 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <div className="h-2 w-24 rounded-full bg-cyan-300/80" />
            <div className="mt-2 h-2 w-16 rounded-full bg-purple-300/50" />
          </div>
          <div className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-200">
            Verified
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/10 p-4">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-cyan-200/30 bg-slate-950/70">
              <FaShieldAlt className="text-4xl text-cyan-200" />
            </div>
            <div className="mt-4 h-2 rounded-full bg-cyan-200/60" />
            <div className="mt-2 h-2 w-2/3 rounded-full bg-slate-400/40" />
          </div>
          <div className="space-y-3">
            {["Job source", "Recruiter identity", "Risk signals"].map((label, index) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-200">{label}</span>
                  <span className={index === 2 ? "text-xs text-amber-200" : "text-xs text-cyan-200"}>
                    {index === 2 ? "Review" : "Clear"}
                  </span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-slate-700">
                  <div
                    className={`h-full rounded-full ${index === 2 ? "w-2/3 bg-amber-300" : "w-5/6 bg-cyan-300"}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DiagramGenieVisual = () => (
  <div className="relative h-full overflow-hidden rounded-[1.35rem] border border-cyan-300/15 bg-[#101534]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(34,211,238,0.24),transparent_26%),radial-gradient(circle_at_18%_72%,rgba(168,85,247,0.22),transparent_30%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(34,211,238,0.08)_48%,transparent_49%)]" />
    <div className="relative flex h-full items-center justify-center p-6">
      <div className="relative h-52 w-full max-w-md rounded-2xl border border-white/10 bg-slate-950/55 p-5 shadow-2xl shadow-purple-500/10 backdrop-blur-sm">
        <div className="absolute left-[19%] top-[30%] h-px w-[28%] bg-cyan-300/60" />
        <div className="absolute right-[20%] top-[30%] h-px w-[25%] bg-purple-300/60" />
        <div className="absolute left-[50%] top-[41%] h-[24%] w-px bg-cyan-300/50" />
        <div className="absolute left-[30%] top-[68%] h-px w-[40%] bg-cyan-300/35" />
        {[
          ["Prompt", "left-[6%] top-[18%]", "border-cyan-300/30 text-cyan-100"],
          ["Flowchart", "left-[39%] top-[18%]", "border-purple-300/30 text-purple-100"],
          ["API", "right-[7%] top-[18%]", "border-cyan-300/30 text-cyan-100"],
          ["Mermaid", "left-[27%] bottom-[14%]", "border-cyan-300/30 text-cyan-100"],
          ["ERD", "right-[24%] bottom-[14%]", "border-purple-300/30 text-purple-100"],
        ].map(([label, position, color]) => (
          <div
            key={label}
            className={`absolute ${position} rounded-xl border ${color} bg-slate-900/90 px-4 py-3 text-xs font-bold shadow-lg shadow-cyan-950/50`}
          >
            {label}
          </div>
        ))}
        <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.75)]" />
          <span className="text-xs font-medium text-slate-300">AI diagram pipeline</span>
        </div>
      </div>
    </div>
  </div>
);

const ProjectVisual = ({ type }) => (type === "recruitsafe" ? <RecruitSafeVisual /> : <DiagramGenieVisual />);

// Projects
const ProjectsSection = () => (
  <section id="projects" className="relative overflow-hidden bg-slate-900/30 py-24">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_24%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(168,85,247,0.11),transparent_30%)]" />
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:54px_54px] opacity-40" />
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-12 max-w-3xl">
        <div className="mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-300 to-purple-400" />
        <h2 className="mb-4 text-4xl font-extrabold text-cyan-400 sm:text-5xl">Projects</h2>
        <p className="text-lg leading-relaxed text-slate-300">
          Selected projects across AI, cybersecurity, and full-stack development.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ delay: i * 0.12, duration: 0.58, ease: "easeOut" }}
            whileHover={{
              y: -6,
              boxShadow: p.featured
                ? "0 20px 46px rgba(34, 211, 238, 0.22)"
                : "0 18px 42px rgba(34, 211, 238, 0.16)",
            }}
            className={`group flex h-full flex-col overflow-hidden rounded-3xl border bg-slate-900/65 p-2.5 shadow-xl backdrop-blur-md transition-colors duration-300 ${
              p.featured
                ? "border-cyan-300/35 shadow-cyan-500/15 hover:border-cyan-300/65"
                : "border-cyan-400/20 shadow-cyan-500/10 hover:border-cyan-300/45"
            }`}
          >
            <div className="h-44 overflow-hidden rounded-2xl bg-slate-950/60 sm:h-48">
              <div className="h-full transition-transform duration-700 ease-out group-hover:scale-[1.035]">
                {p.visual ? (
                  <ProjectVisual type={p.visual} />
                ) : (
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                )}
              </div>
            </div>
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold leading-tight text-cyan-200 sm:text-2xl">{p.title}</h3>
                {p.featured && (
                  <span className="shrink-0 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100">
                    Featured
                  </span>
                )}
              </div>

              <p className="overflow-hidden text-sm leading-relaxed text-slate-300/85 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4]">
                {p.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.08] px-2.5 py-1 text-[11px] font-semibold text-cyan-100 shadow-sm shadow-cyan-950/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-5">
                <div className="flex items-center gap-4">
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex text-sm font-bold text-cyan-300 transition duration-300 hover:translate-x-1 hover:text-cyan-100"
                    >
                      View Code →
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-slate-400">Code available on request</span>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-pink-400 transition hover:text-pink-300"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

// Contact
const Contact = ({ github, linkedin }) => (
  <section id="contact" className="relative overflow-hidden bg-[#0b1220] py-24">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(168,85,247,0.14),transparent_34%)]" />
    <div className="relative z-10 mx-auto max-w-6xl px-6">
      <div className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-900/75 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
        <div className="grid items-center lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border-b border-cyan-300/15 bg-slate-950/40 p-8 sm:p-12 lg:border-b-0 lg:border-r">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Open channel</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">Let&apos;s build something meaningful.</h2>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">Have an idea, opportunity, or security problem worth exploring? I&apos;m always open to thoughtful collaborations.</p>
            <div className="mt-8 rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.06] p-3">
              <Lottie animationData={chatbotAnimation} loop autoplay aria-label="Animated chatbot illustration" className="mx-auto w-full max-w-xs" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">Contact details</p>
            <div className="mt-6 grid gap-3">
              <a href="mailto:jhatanya211@gmail.com" className="contact-row"><span>Email</span><strong>jhatanya211@gmail.com</strong></a>
              <div className="contact-row"><span>Location</span><strong>Kalyan, Maharashtra, India</strong></div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:jhatanya211@gmail.com" className="contact-primary">Email Me</a>
              <a href={github} target="_blank" rel="noreferrer" className="contact-secondary">GitHub</a>
              <a href={linkedin} target="_blank" rel="noreferrer" className="contact-secondary">LinkedIn</a>
            </div>
            <a href="/Tanya_Resume.pdf" download className="mt-8 inline-flex text-sm font-bold text-cyan-300 transition hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Download Resume (PDF) →</a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-slate-800 bg-[#0d0d1f] py-6 text-center text-sm text-slate-500">
    (c) {new Date().getFullYear()} Tanya Jha - Designed for a pro-level look
  </footer>
);

/* ----------------------------------------------------
Main App Component
---------------------------------------------------- */

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <AnimatedBackground />
      <Nav />
      <main>
        <Hero name="Tanya Jha" />
        <Skills />
        <ProjectsSection />
        <Contact
          github="https://github.com/tanyajha29"
          linkedin="https://www.linkedin.com/in/tanya-jha-b2b72a2a0/"
        />
      </main>
      <Footer />
    </div>
  );
}
