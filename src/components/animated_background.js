import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-20">
      {/* Neon Gradient Waves Layer */}
      <div className="absolute w-full h-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 opacity-30 blur-3xl bg-[length:400%_400%] animate-gradient-xy"></div>

      {/* Floating Blinking Dots */}
      <div className="relative w-full h-full">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400 rounded-full opacity-60 animate-pulse"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              filter: "blur(2px)",
              boxShadow: "0 0 8px rgba(0,255,255,0.6)",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
