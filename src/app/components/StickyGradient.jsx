"use client";
import React from 'react';

export default function GradientBlobAnimation() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Main animated gradient blob */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-[130vh] opacity-90">
          {/* Primary blob */}
          <div className="absolute top-[-20%] left-[-10%] w-[140%] h-[100%] rounded-full bg-gradient-to-br from-[#F39555] via-[#9089fc] to-[#5eead4] blur-3xl animate-pulse transform rotate-12 animate-spin-slow"></div>

          {/* Secondary blob */}
          <div className="absolute top-[-30%] right-[-15%] w-[120%] h-[90%] rounded-full bg-gradient-to-bl from-[#a78bfa] via-[#f472b6] to-[#60a5fa] blur-2xl animate-bounce-slow transform -rotate-45 animate-spin-reverse"></div>

          {/* Third blob */}
          <div className="absolute top-[-10%] left-[20%] w-[100%] h-[80%] rounded-full bg-gradient-to-tr from-[#f0abfc] via-[#c084fc] to-[#67e8f9] blur-3xl animate-float transform rotate-90"></div>
        </div>

        {/* Gradient fade to white at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/90 to-transparent z-10"></div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
          to {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(0deg) scale(1.1);
          }
          50% {
            transform: rotate(-180deg) scale(0.9);
          }
          to {
            transform: rotate(-360deg) scale(1.1);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          25% {
            transform: translateY(-15px) translateX(10px) scale(1.02);
          }
          50% {
            transform: translateY(-5px) translateX(-5px) scale(0.98);
          }
          75% {
            transform: translateY(-25px) translateX(15px) scale(1.03);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 8s ease-in-out infinite;
        }

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}



    {/*  <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[65%] rounded-full bg-gradient-to-br from-[#F28F4F] via-[#F08256] to-[#FAD3BC] blur-3xl  transform rotate-12 animate-spin-slow"></div>
*/}