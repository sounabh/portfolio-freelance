import React from 'react'
import { motion } from 'framer-motion'

const Heading = () => {
  return (
    <div className="relative">
      <h1
        className="relative -top-[70px] font-apercu text-left max-w-full overflow-visible px-8 sm:pl-[150px] md:pl-[250px] lg:pl-[325px]"
      >
        {['I', 'd', 'e', 's', 'i', 'g', 'n'].map((letter, index) => (
          <motion.span
            key={index}
            className="font-medium relative inline-block"
            style={{
              fontFamily: 'Apercu, sans-serif',
              fontSize: '295px',
              lineHeight: '415px',
              letterSpacing: '-29px',
              left: index === 0 ? '-57px' : '0',
            }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: 'tween',
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
