import React from 'react';
import { SpinningText } from "@/components/magicui/spinning-text";

const RotatingCircle = () => {
  return (
    <div className="relative w-[160px] h-[160px] mx-auto">
      {/* Spinning text with custom styling */}
      <SpinningText 
        reverse 
        duration={4} 
        radius={5}
        className="text-[#e11414]  text-[17px] tracking-[0.9px]"
      >
        EXPERIENCES • EXPERIENCES • 
      </SpinningText>
      
      
    </div>
  );
};

export default RotatingCircle;