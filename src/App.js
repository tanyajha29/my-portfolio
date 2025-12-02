import React, { useCallback, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedBackground from "./components/animated_background";

// --- UPDATED ICON IMPORTS (Added FaBars, FaTimes) ---
import { 
    FaBrain, 
    FaDatabase, 
    FaLaptopCode, 
    FaTools as FaGenericTool,
    FaBars, // For hamburger icon
    FaTimes // For close icon
} from 'react-icons/fa'; 

// --- Di Icons ---
import { 
    DiHtml5, DiCss3, DiJavascript1, DiPython, DiJava,  DiPhp,
    DiNodejsSmall, DiReact, 
    DiBootstrap,DiGit, DiGithubBadge, 
    DiMysql, DiPostgresql,  DiLinux, DiNpm, DiVisualstudio,
} from 'react-icons/di'; 

// --- Si Icons ---
import { 
    SiTailwindcss, SiTypescript, SiExpress, 
    SiJupyter, SiAnaconda, 
    SiPostman, 
    SiCplusplus, 
    SiSqlite, SiMlflow,
} from 'react-icons/si'; 
// ----------------------------------------

const skillIcons = {
    // Languages
    "HTML": <DiHtml5 className="text-4xl text-orange-500"/>,
    "CSS": <DiCss3 className="text-4xl text-blue-500"/>,
    "JavaScript": <DiJavascript1 className="text-4xl text-yellow-400"/>,
    "TypeScript": <SiTypescript className="text-4xl text-blue-600"/>,
    "Python": <DiPython className="text-4xl text-blue-400"/>,
    "C++": <SiCplusplus className="text-4xl text-blue-700"/>,
    "Java": <DiJava className="text-4xl text-red-500"/>,
    "PHP": <DiPhp className="text-4xl text-indigo-500"/>,
    // Frameworks & Libraries (Web)
    "React": <DiReact className="text-4xl text-cyan-400"/>,
    "Node.js": <DiNodejsSmall className="text-4xl text-green-500"/>,
    "Express": <SiExpress className="text-4xl text-gray-400"/>, 
    "Tailwind": <SiTailwindcss className="text-4xl text-teal-400"/>, 
    "Bootstrap": <DiBootstrap className="text-4xl text-purple-600"/>,
    "Framer Motion": <DiReact className="text-4xl text-purple-500"/>,
    // Data Science / ML Libraries
    "Pandas": <SiJupyter className="text-4xl text-orange-600"/>, 
    "scikit-learn": <FaBrain className="text-4xl text-orange-500"/>, 
    "NumPy": <SiAnaconda className="text-4xl text-green-500"/>, 
    "MLFlow": <SiMlflow className="text-4xl text-blue-400"/>, 
    "Data Analysis": <FaDatabase className="text-4xl text-purple-400" />,
    // Databases
    "MySQL": <DiMysql className="text-4xl text-blue-400"/>,
    "PostgreSQL": <DiPostgresql className="text-4xl text-blue-600"/>,
    "SQLite": <SiSqlite className="text-4xl text-blue-700"/>,
    // Tools & Core
    "Git": <DiGit className="text-4xl text-orange-600"/>,
    "GitHub": <DiGithubBadge className="text-4xl text-white"/>,
    "VS Code": <DiVisualstudio className="text-4xl text-blue-500"/>,
    "Postman": <SiPostman className="text-4xl text-orange-500"/>,
    "Linux": <DiLinux className="text-4xl text-gray-400"/>,
    "npm": <DiNpm className="text-4xl text-red-600"/>,
    "OSINT": <FaGenericTool className="text-4xl text-gray-400"/>, 
};
// ------------------------------------------

// --- DATA STRUCTURE FOR THE 3-CARD LAYOUT ---
const cardSkills = [
    {
        title: "Web Development",
        icon: <FaLaptopCode />,
        color: "border-purple-600/50",
        skills: ["React", "JavaScript", "Node.js", "Express", "HTML", "CSS", "Tailwind"]
    },
    {
        title: "Machine Learning",
        icon: <FaBrain />,
        color: "border-cyan-600/50",
        skills: ["Python", "Pandas", "scikit-learn", "NumPy", "Data Analysis", "Viz"]
    },
    {
        title: "Tools & Core",
        icon: <FaGenericTool />,
        color: "border-orange-600/50",
        skills: ["Git", "GitHub", "MySQL", "SQLite", "Linux", "OSINT", "Postman"]
    },
];
// ------------------------------------------

// --- Project Data ---
const projects = [
  {
    title: "College Companion Website",
    desc: "Student assistant web app to manage attendance and career planning.",
    tech: ["React", "Node.js", "MySQL"],
    github: "https://github.com/tanyajha29/college-companion",
    demo: "#",
    image: "/images/college_companion.png",
  },
  {
    title: "CryptX",
    desc: "A containerized, full-stack data platform for market or security intelligence, leveraging Docker forconsistent deployment and PostgreSQL for scalable data storage.",
    tech: ["Python", "Gunicorn", "PostgreSQL", "Docker"],
    github: "https://github.com/tanyajha29/CryptX",
    demo: "#",
    image: "/images/cryptX.jpeg",
  },
  
  {
    title: "Heart Guard",
    desc: "ML model to predict heart disease risk from health data.",
    tech: ["Python", "Pandas", "SQLite"],
    github: "https://github.com/tanyajha29/Heart_disease_Predictor",
    demo: "#",
    image: "/images/Heart_guard.jpg",
  },
  {
    title: "Credit Fraud Prediction",
    desc: "A Data warehousing and Mining project to predict credit card frauds.",
    tech: ["MLFlow", "Python", "SQLite"],
    github: "https://github.com/tanyajha29/credit_fraud_dbt",
    demo: "#",
    image: "/images/Credit_Fraud.png",
  },
   {
    title: "TaskFlow",
    desc: "A clean and modern task‑management web app built with Node.js, Express, MongoDB, and EJS.",
    tech: ["Node.js", "Express", "MongoDB (Mongoose)", "EJS templating"],
    github: "https://github.com/tanyajha29/Crypt",
    demo: "#",
    image: "/images/taskFlow.jpeg",
  },
];

/* ---------- Page Components ---------- */

// --- UPDATED NAV: Shorter height, Hamburger Menu ---
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const mobileNavVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
        exit: { opacity: 0, x: "100%", transition: { duration: 0.2, ease: "easeInOut" } }
    };

    const MobileLink = ({ href, children }) => (
        <a 
            href={href} 
            onClick={() => setIsOpen(false)} 
            className="text-3xl font-semibold text-gray-200 hover:text-cyan-400 transition-colors py-4"
        >
            {children}
        </a>
    );

  return (
    <>
        <nav className="fixed w-full z-40 top-0 left-0 bg-slate-900/70 backdrop-blur-sm shadow-lg">
            {/* CHANGED: py-3 to py-2 for shorter navbar */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <a href="#hero">
                <img
                    src="/images/my_img.jpeg" 
                    alt="Tanya Jha Profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400 shadow-xl transition-all hover:scale-105"
                />
                </a>
                <span className="text-xl font-bold text-cyan-400 tracking-wider hidden sm:block">
                Tanya Jha
                </span>
            </div>

            {/* --- Desktop Links --- */}
            {/* CHANGED: hidden md:flex and gap-6 */}
            <div className="hidden md:flex items-center gap-6 text-gray-200 font-medium">
                <a href="#about" className="hover:text-cyan-400 transition">About</a>
                <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
                <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
                <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
            </div>

            {/* --- Hamburger Button --- */}
            <div className="md:hidden">
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="text-gray-200 hover:text-cyan-400 transition-colors p-2"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            </div>
        </nav>

        {/* --- Mobile Menu Overlay --- */}
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="mobile-menu"
                    variants={mobileNavVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 w-full h-screen bg-slate-900/95 backdrop-blur-lg z-30 flex flex-col items-center justify-center md:hidden"
                >
                    <button 
                        onClick={() => setIsOpen(false)} 
                        className="absolute top-4 right-6 text-gray-300 hover:text-cyan-400 transition-colors p-2"
                        aria-label="Close menu"
                    >
                        <FaTimes size={30} />
                    </button>
                    
                    <nav className="flex flex-col items-center gap-6">
                        <MobileLink href="#about">About</MobileLink>
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

// --- UPDATED HERO: pt-20, responsive fonts, responsive buttons ---
const Hero = ({ name }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const roles = [
    "Web Developer",
    "ML Explorer",
    "Cybersecurity Enthusiast",
  ];
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
      
      className="min-h-screen relative pt-20 flex items-start overflow-hidden text-center text-white bg-[#1a1a36]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-500"
        style={{ backgroundImage: 'url(/images/gradient_bg.jpg)' }} 
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.4 : 0 }} 
      />
      <motion.img
        src="/images/A_PC.png" 
        alt="Developer PC Setup"
        className="absolute bottom-0 inset-x-0 mx-auto w-full max-w-lg opacity-90 xl:opacity-100 z-10 pointer-events-none"
        variants={pcImageVariants}
        animate="animate"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <motion.h1
          
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-red-400">{name}</span> 
        </motion.h1>

        <div className="relative h-12 w-full mx-auto max-w-lg flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentRoleIndex} 
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={roleVariants}
              // CHANGED: Added text-xl sm:text-2xl for mobile
              className="absolute text-xl sm:text-2xl md:text-3xl font-medium text-cyan-300 tracking-wide"
            >
              {roles[currentRoleIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>
        
       
      </div>
    </header>
  );
};

// --- UPDATED ABOUT: Responsive fonts ---
const About = () => (
  <section id="about" className="py-24 bg-slate-900/30"> 
    <div className="max-w-4xl mx-auto px-6">
      {/* CHANGED: text-4xl sm:text-5xl */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 mb-6">About Me</h2>
      {/* CHANGED: text-lg sm:text-xl */}
      <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
        I am a passionate and driven Information Technology student currently pursuing my Bachelor of Engineering at Vidyalankar Institute of Technology, having completed a Diploma from Government Polytechnic, Thane.
      </p>
      <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
        I enjoy designing and developing <b> full-stack web applications </b>, experimenting with <b>machine learning</b> models, and exploring the ever-evolving field of <b>cybersecurity</b>. With a strong curiosity for technology, I continuously learn new tools, frameworks, and concepts to enhance my skills and stay ahead in the tech domain.
      </p>
      <p className="text-lg font-medium text-purple-400 leading-relaxed">
        I have also won a state-level technical paper presentation and keep learning new tools and technologies every day.
      </p>
    </div>
  </section>
);


// --- UPDATED SKILLS: Responsive fonts ---
const Skills = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                ease: "easeOut"
            }
        })
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
                    className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors shadow-md"
                    title={skill} // Tooltip on hover
                >
                    {skillIcons[skill] || <FaGenericTool className="text-4xl text-gray-400"/>}
                </motion.div>
            ))}
        </div>
    );

    return (
        <section id="skills" className="py-24 bg-[#0d0d1f]"> 
            <div className="max-w-6xl mx-auto px-6">
                {/* CHANGED: text-4xl sm:text-5xl */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 mb-12">Skills & Tools</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {cardSkills.map((card, i) => (
                        <motion.div 
                            key={card.title} 
                            custom={i}
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{ once: true, amount: 0.3 }} 
                            variants={cardVariants} 
                            className={`p-8 bg-slate-800/70 rounded-2xl shadow-xl overflow-hidden border ${card.color} transition-all hover:shadow-lg hover:shadow-cyan-500/10`}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className={`text-4xl text-white ${card.title.includes("Web") ? 'text-purple-400' : card.title.includes("Machine") ? 'text-cyan-400' : 'text-orange-400'}`}>
                                    {card.icon}
                                </span>
                                <h3 className={`text-2xl font-semibold ${card.title.includes("Web") ? 'text-purple-300' : card.title.includes("Machine") ? 'text-cyan-300' : 'text-orange-300'}`}>
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
// -----------------------------------------------------------------

// --- UPDATED PROJECTS: Responsive fonts ---
const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-slate-900/30"> 
    <div className="max-w-6xl mx-auto px-6">
      {/* CHANGED: text-4xl sm:text-5xl */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 mb-12"> Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.article 
            key={i} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 255, 255, 0.2)" }} 
            className="bg-slate-800/70 rounded-2xl shadow-xl overflow-hidden border border-slate-700/50"
          >
            <div className="h-48 bg-slate-700/40">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-3">{p.title}</h3>
              <p className="text-gray-400 mb-4 text-base leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-purple-700/30 text-purple-200 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-4 items-center">
                  <a href={p.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition">
                    View Code →
                  </a>
                  {p.demo !== "#" && p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm font-medium text-pink-400 hover:text-pink-300 transition">
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

// --- UPDATED CONTACT: Responsive buttons ---
const Contact = ({ github, linkedin }) => {
  return (
    <section id="contact" className="py-24 flex items-center justify-center overflow-hidden bg-[#0d0d1f]">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-slate-800/70 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-cyan-500/10 text-center border border-slate-700/50">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-cyan-400">Let's build something together</h2>
          <p className="mb-8 text-lg sm:text-xl text-gray-300">
            I’m open to internships, freelance work, and collaborations. Reach out via email or connect on social platforms.
          </p>

          {/* CHANGED: Added flex-col sm:flex-row, items-center, gap-4, w-full, sm:w-auto */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10">
            <a 
              href="mailto:tanyajha@example.com" 
              className="w-full sm:w-auto text-center px-7 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 font-semibold"
            >
              Email Me
            </a>
            <a 
              href={github} 
              target="_blank" 
              rel="noreferrer" 
              className="w-full sm:w-auto text-center px-6 py-3 border border-gray-400 text-gray-200 rounded-full hover:bg-white/10 transition font-semibold"
            >
              GitHub
            </a>
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="w-full sm:w-auto text-center px-6 py-3 border border-gray-400 text-gray-200 rounded-full hover:bg-white/10 transition font-semibold"
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700/50">
            <h3 className="text-xl sm:text-2xl font-semibold text-purple-400 mb-4">Quick Contact Details</h3>
            <p className="text-base sm:text-lg text-gray-300 mb-2">@
              <span className="font-bold text-cyan-300">Email:</span> jhatanya211@gmail.com
            </p>
            <p className="text-base sm:text-lg text-gray-300">
              <span className="font-bold text-cyan-300">Location:</span> Kalyan, Maharashtra, India
            </p>
          </div>

          <div className="mt-8">
            <a href="/Tanya_Resume.pdf" download className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-bold shadow-md hover:scale-[1.02] transition">
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-6 text-center text-sm text-slate-500 bg-[#0d0d1f] border-t border-slate-800">
    © {new Date().getFullYear()} Tanya Jha • Designed for a Pro-Level look
  </footer>
);

/* ----------------------------------------------------
Main App Component
---------------------------------------------------- */

export default function App() {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); 
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative text-white overflow-x-hidden min-h-screen">
      
      {/* NOTE: You are loading two backgrounds. 
        <AnimatedBackground /> and <Particles />. 
        This might impact performance. You can comment one out if you prefer.
      */}
      <AnimatedBackground />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#0d0d1f" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            number: { value: 80 },
            color: { value: "#00ffff" },
            links: {
              enable: true,
              color: "#00ffff",
              distance: 120,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: "out",
            },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
          },
          detectRetina: true,
        }}
        className="fixed inset-0 -z-10" 
      />

      {/* Portfolio Content */}
      
      <Nav />
      <main>
        <Hero
          name="Tanya Jha"
        />
        <About />
        <Skills />
        <ProjectsSection />
        <Contact
          github="https://github.com/tanyajha18"
          linkedin="https://linkedin.com/in/tanyajha18"
        />
      </main>
      <Footer />
    </div>
  );
}