"use client";
import React from "react";
import { motion } from "framer-motion";

import RotatingCircle from "./components/RotatingCircle";
import DescriptionCard from "./components/DescriptionCard";
import InputButton from "./components/InputButton";
import Heading from "./components/Heading";

// Reusable Motion Wrapper
const FadeInMotion = ({ children, delay = 0.8 }) => (
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.8,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    }}
  >
    {children}
  </motion.div>
);

const Page = () => {
  return (
    <div className="min-h-screen w-screen bg-white overflow-x-hidden overflow-y-hidden px-6 py-17 relative">
      {/* Keyframes injected correctly in JSX */}
      <style>{`
        @keyframes scalePulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.7); }
        }

        .spin-custom {
          animation: scalePulse 18s linear infinite alternate;
        }
      `}</style>

      {/* Background blobs */}
      <div
        aria-hidden="true"
        className="absolute top-[-20%] left-[-10%] w-[24%] h-[45%] rounded-full bg-gradient-to-br from-[#eacd10] via-[#f05b20] to-[#e06421] blur-3xl spin-custom"
      />

      <div
        aria-hidden="true"
        className="absolute top-[-30%] left-[26%] w-[45%] h-[45%] rounded-full bg-gradient-to-br from-[#d13014] via-[#FF0200] to-[#ea5224] blur-3xl spin-custom"
      />

      <div
        aria-hidden="true"
        className="absolute top-[-25%] right-[-15%] w-[26%] h-[45%] rounded-full bg-gradient-to-br from-[#deb616] via-[#e29212] to-[#f16b5c] blur-3xl spin-custom"
      />

      {/* Heading */}
      <Heading />

      {/* Rotating Circle with Inner Dot */}
      <FadeInMotion delay={1.4}>
        <div className="relative flex justify-center -mt-[204px]">
          <div className="relative -right-[415px]">
            <RotatingCircle />
            {/* Inner red dot in center */}
            <motion.div
              className="absolute top-0 right-[30px] transform -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FF0200]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{
                opacity: { delay: 1.6, duration: 0.3 },
                rotate: { repeat: Infinity, duration: 5, ease: "linear" },
              }}
            />
          </div>
        </div>
      </FadeInMotion>

      {/* Description Card */}
      <DescriptionCard />

      {/* Input + Button */}
      <FadeInMotion delay={2.3}>
        <div className="flex justify-center mt-6">
          <InputButton />
        </div>
      </FadeInMotion>

      {/* Bottom Navigation */}
      <div
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white w-[400px] py-[18px] px-[30px] rounded-t-[16px] border border-[#e6e6e6] flex items-center justify-center z-50"
        style={{
          boxShadow: "0px -2px 12px 0px #0000000d",
        }}
      >
        <nav className="flex gap-6 font-sfr text-[14px] leading-[20px]">
          <a
            href="#case-studies"
            className="text-black hover:text-gray-400 transition-colors flex items-center gap-1"
          >
            <span className="text-[16px]">📖</span>
            <span className="relative top-[1px]">Case Studies</span>
          </a>
          <a
            href="#about"
            className="text-black hover:text-gray-400 transition-colors flex items-center gap-1"
          >
            <span className="text-[15px] relative top-0.5">😎</span>
            <span className="relative top-[2px]">About</span>
          </a>
          <a
            href="#contact"
            className="text-black hover:text-gray-400 transition-colors flex items-center gap-1"
          >
            <span className="text-[16px] relative top-0.5">💌</span>
            <span className="relative top-[1px]">hello@bishal.cc</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Page;
