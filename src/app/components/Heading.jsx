import React from 'react'
import { motion } from "framer-motion";

const Heading = () => {
  return (
    <div>
        <h1       
        className="relative -top-[70px] font-apercu text-left max-w-[100vw] overflow-visible"       
        style={{ left: '325px' }}     
      >       
        {['I', 'd', 'e', 's', 'i', 'g', 'n'].map((letter, index) => (         
          <motion.span           
            key={index}           
            className="font-medium text-[295px] leading-[415px] tracking-[-29px] relative font-apercu text-left inline-block"           
            style={{ left: index === 0 ? '-57px' : '0' }}           
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{             
              duration: 0.5,             
              delay: index * 0.2, // Faster letter animation
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "tween"
            }}         
          >           
            {letter}         
          </motion.span>       
        ))}     
      </h1>
    </div>
  )
}

export default Heading
