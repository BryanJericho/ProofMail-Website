import React from "react";

export const Test = () => {
  return (
    <div>
      <div className="absolute inset-0 overflow-hidden">
        {/* Blockchain Network Nodes - Subtle but Visible */}
        <div className="absolute top-10 left-10 w-64 h-64 border border-white/15 rounded-full animate-pulse">
          <div className="absolute inset-4 border border-cyan-300/20 rounded-full">
            <div className="absolute inset-4 border border-white/10 rounded-full"></div>
          </div>
        </div>
        <div
          className="absolute top-20 right-20 w-96 h-96 border border-cyan-400/18 rounded-full animate-ping"
          style={{ animationDuration: "4s" }}
        >
          <div className="absolute inset-8 border border-white/12 rounded-full"></div>
        </div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 border border-indigo-300/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          <div className="absolute inset-6 border border-cyan-200/15 rounded-full"></div>
        </div>

        {/* Hexagonal Grid Pattern - Subtle Accent */}
        <div
          className="absolute top-1/4 left-1/3 w-32 h-32 transform rotate-45 border border-white/18 animate-pulse bg-white/3"
          style={{ animationDelay: "2s" }}
        >
          <div className="absolute inset-2 border border-cyan-300/15 transform -rotate-45"></div>
        </div>
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 transform rotate-12 border border-cyan-300/22 animate-ping bg-cyan-400/5"
          style={{ animationDuration: "3s" }}
        >
          <div className="absolute inset-1 border border-white/15 transform -rotate-12"></div>
        </div>

        {/* Blockchain Connection Lines - Subtle */}
        <div
          className="absolute top-1/2 left-1/4 w-40 h-1 bg-gradient-to-r from-transparent via-white/18 to-transparent animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-28 h-1 bg-gradient-to-r from-transparent via-indigo-300/22 to-transparent animate-pulse transform rotate-45"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Crypto/Web3 Icons Background - Subtle Accent */}
        <div
          className="absolute top-1/6 right-1/4 w-16 h-16 border border-white/20 rounded-lg animate-ping transform rotate-45 bg-white/4"
          style={{ animationDuration: "2s" }}
        >
          <div className="absolute inset-2 bg-cyan-400/8 rounded-sm"></div>
        </div>
        <div
          className="absolute bottom-1/4 left-1/6 w-20 h-20 border border-cyan-300/25 rounded-full animate-pulse bg-cyan-500/6"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-300/35 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Digital Particles - Subtle Glow */}
        <div
          className="absolute top-1/6 left-3/4 w-3 h-3 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/6 right-3/4 w-2 h-2 bg-gradient-to-r from-white/35 to-cyan-300/35 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/6 w-4 h-4 bg-gradient-to-r from-indigo-400/25 to-cyan-400/25 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Additional Blockchain Network Visualization - Subtle */}
        <div
          className="absolute top-1/2 right-1/6 w-6 h-6 border border-white/22 rounded-full animate-pulse bg-white/4"
          style={{ animationDelay: "1.2s" }}
        >
          <div
            className="absolute inset-1 bg-cyan-400/20 rounded-full animate-ping"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>
        <div
          className="absolute bottom-1/6 left-1/3 w-8 h-8 border border-indigo-300/18 rounded-full animate-pulse bg-indigo-400/6"
          style={{ animationDelay: "2.8s" }}
        >
          <div className="absolute inset-1 border border-white/12 rounded-full"></div>
        </div>

        {/* Geometric Blockchain Pattern - Subtle */}
        <div
          className="absolute top-1/5 left-1/2 w-12 h-12 border border-cyan-300/20 transform rotate-12 animate-ping bg-cyan-400/5"
          style={{ animationDuration: "4s" }}
        >
          <div className="absolute inset-2 border border-white/15 transform -rotate-12"></div>
        </div>
      </div>
    </div>
  );
};
