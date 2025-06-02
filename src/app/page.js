"use client";
import React, { useEffect, useRef, useState } from "react";

import RotatingCircle from "./components/RotatingCircle";
import { motion } from "framer-motion";
import DescriptionCard from "./components/DescriptionCard";
import InputButton from "./components/InputButton";
import Heading from "./components/Heading";


const Page = () => {
  
  return (
    <div className="min-h-screen w-screen bg-white overflow-x-hidden overflow-y-hidden px-6 py-12 relative">
      {/* Keyframes injected correctly in JSX */}
      <style>{`
        @keyframes scalePulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.8); }
        }

        @keyframes scalepulse2{
         0% { transform: scale(1); }
          100% { transform: scale(1.8); }
        }
        
        .spin-custom {
          animation: scalePulse 17s linear infinite alternate;
        }
          .spin-custom2 {
          animation: scalePulse2 17s linear infinite alternate;
          }
      `}</style>

      {/* Background blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[24%] h-[45%] rounded-full 
        bg-gradient-to-br from-[#d4ba13] via-[#e75f29] to-[#e86c2a] 
        blur-3xl spin-custom" />

      <div className="absolute top-[-30%] left-[26%] w-[45%] h-[45%] rounded-full 
        bg-gradient-to-br from-[#d94930] via-[#e11a1a] to-[#e66037] 
        blur-3xl spin-custom" />

      <div className="absolute top-[-25%] right-[-15%] w-[25%] h-[45%] rounded-full 
        bg-gradient-to-br from-[#e1ba1c] via-[#ca7f07] to-[#f06253] 
        blur-3xl spin-custom" />

      {/* 'I design' heading */}
    <Heading></Heading>

      {/* Rotating Circle Component with Inner Circle */}
      <motion.div
        className="relative -top-[204px]"
        style={{ left: "395px" }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.4, // Start after "I design" completes (7 letters * 0.2 = 1.4s)
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {/* Container for the rotating circle - this will be our reference point */}
        <div className="relative">
          {/* Rotating circle (already rotating on its own) */}
          <RotatingCircle />

          {/* Inner red dot positioned at the center of the rotating circle */}
          <motion.div
            className="absolute top-0 left-[680px] transform -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#e11414]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{
              opacity: { delay: 1.6, duration: 0.3 }, // Appears shortly after the circle
              rotate: { repeat: Infinity, duration: 5, ease: "linear" }
            }}
          />
        </div>
      </motion.div>

      {/* Description Card */}
     <DescriptionCard></DescriptionCard>



      {/* Input + Button */}
   
<InputButton></InputButton>





      {/* Bottom Navigation */}
      <div
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white 
          w-[400px] py-[18px] px-[30px] rounded-t-[16px] border border-[#e6e6e6] 
          flex items-center justify-center z-50"
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