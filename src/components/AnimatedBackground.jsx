import React from "react";
import { motion } from "framer-motion";

export default function GradientWaveBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated Gradient Layer */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-80"
        style={{ backgroundSize: "400% 400%" }}
      />

      {/* Wavy SVG Layer */}
      <svg
        className="absolute bottom-0 w-full h-40 opacity-80"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <motion.path
          animate={{
            d: [
              "M0,160L60,165.3C120,171,240,181,360,165.3C480,149,600,107,720,117.3C840,128,960,192,1080,213.3C1200,235,1320,213,1380,202.7L1440,192L1440,320L0,320Z",
              "M0,192L80,176C160,160,320,128,480,149.3C640,171,800,245,960,250.7C1120,256,1280,192,1360,160L1440,128L1440,320L0,320Z",
              "M0,160L60,165.3C120,171,240,181,360,165.3C480,149,600,107,720,117.3C840,128,960,192,1080,213.3C1200,235,1320,213,1380,202.7L1440,192L1440,320L0,320Z",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          fill="url(#gradient)"
        />
        <defs>
          <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
