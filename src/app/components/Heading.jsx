import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const Heading = () => {
  const letters = ['I', 'd', 'e', 's', 'i', 'g', 'n']

  return (
    <div className="relative">
      <h1 className="relative -top-[70px] text-left max-w-full overflow-visible px-8 sm:pl-[150px] md:pl-[250px] lg:pl-[355px] font-apercu">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className={clsx(
              'relative inline-block font-regular',
              'text-[325px] leading-[415px] tracking-[-35px]',
              index === 0 && '-left-[57px]'
            )}
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
