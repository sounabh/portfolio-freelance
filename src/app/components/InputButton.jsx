import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { Button } from "../components/MovingBorder";

const InputButton = () => {
  const [inputValue, setInputValue] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
      
  const placeholders = [
    "What are you looking for?",
    "What brings you here today?",
    "How can I help you?",
    "What do you need assistance with?",
    "What's on your mind?",
    "What questions can I answer?",
    "How can I be of service?",
    "What information do you seek?",
    "How may I assist you today?"
  ];

  // Fixed placeholder cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(prev => (prev + 1) % placeholders.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [placeholders.length]); // Include placeholders.length in dependency array

  return (
    <div>
      {/* Production consistency styles */}
      <style>{`
        /* Force consistent positioning and prevent layout shifts */
        .input-button-container {
          position: relative !important;
          left: 300px !important;
          top: -8px !important;
        }

        /* Ensure font consistency */
        .input-button-container * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          box-sizing: border-box;
        }

        /* Prevent input field layout shifts */
        .input-button-container input {
          min-width: 0;
          width: 100%;
        }

        /* Stabilize button transitions */
        .submit-button {
          transition: all 0.2s ease-in-out;
          will-change: background-color, border-color;
        }
      `}</style>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8, // optional: delay to match other animations
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="input-button-container mt-14 flex justify-center w-fit rounded-[5.5rem]"
        style={{
          boxShadow: "0px 10px 45px 0px #00000017",
        }}
      >
        <Button
          borderRadius="1.5rem"
          duration={3000}
          className="bg-white border-[0.7] border-[#dad5d5db]"
        >
          <input
            type="text"
            placeholder={placeholders[placeholderIndex]}
            className="flex-1 rounded-md bg-white p-2 text-black outline-none font-sfr placeholder:text-gray-400"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            disabled={!inputValue}
            className={`submit-button rounded-3xl px-[34px] py-[9px] border text-white ml-2 ${
              inputValue
                ? "bg-[#e11414] border-[#e11414] hover:bg-[#FF5656] cursor-pointer"
                : "bg-[#FFEEEE] border-[#FFEEEE] cursor-not-allowed"
            }`}
            style={{
              boxShadow: inputValue
                ? "inset 0px 4px 2px 0px #f19797"
                : "none",
            }}
          >
            Submit
          </button>
        </Button>
      </motion.div>
    </div>
  )
}

export default InputButton