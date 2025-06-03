import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(prev => (prev + 1) % placeholders.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-5 mr-18 flex justify-center">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="relative -top-2 rounded-[5.5rem] shadow-[0px_10px_45px_0px_#00000017]"
      >
        <Button
          borderRadius="1.1rem"
          duration={3000}
          className="bg-white border border-[#dad5d5db] flex items-center px-4 py-2"
        >
          <input
            type="text"
            placeholder={placeholders[placeholderIndex]}
            className="flex-1 bg-white p-2 text-black outline-none font-sfr placeholder:text-gray-400"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            disabled={!inputValue}
            className={`ml-2 rounded-3xl px-[34px] py-[9px] text-white border ${
              inputValue
                ? "bg-[#e11414] border-[#e11414] hover:bg-[#FF5656] cursor-pointer"
                : "bg-[#FFEEEE] border-[#FFEEEE] cursor-not-allowed"
            }`}
            style={{
              boxShadow: inputValue ? "inset 0px 4px 2px 0px #f19797" : "none",
            }}
          >
            Submit
          </button>
        </Button>
      </motion.div>
    </div>
  );
};

export default InputButton;
