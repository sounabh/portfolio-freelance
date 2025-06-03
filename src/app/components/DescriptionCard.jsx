import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const DescriptionCard = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Bishal is a Product Designer who turns complex problem sets into simple solutions. Ask me anything about him, I'll answer.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  const textWidth = Math.min(displayedText.length * 9, 454); // Adjust width based on characters

  return (
    <div className="relative">
      <motion.div
        className="bg-[#E9E9EB] rounded-[22px] font-sfr mx-auto flex items-center -mt-[45px] relative -left-[100px]"
        initial={{ width: 36 }}
        animate={{
          width: displayedText.length > 0 ? textWidth + 36 : 36, // padding left+right = 36
          minHeight: 44,
        }}
        transition={{
          duration: 0.15,
          ease: "easeOut",
        }}
      >
        <div className="px-[18px] py-[11px]">
          <p className="text-[16px] leading-[22px] tracking-[0.2px] text-black">
            {displayedText}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DescriptionCard;
