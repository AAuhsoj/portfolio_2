import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
}

export default function BlurText({
  text,
  className = '',
  delay = 0,
}: BlurTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  const words = text.split(' ')

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{
                opacity: 0,
                filter: 'blur(12px)',
                y: 10,
              }}
              animate={isVisible ? {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
              } : {}}
              transition={{
                duration: 0.6,
                delay: wordIndex * 0.1 + charIndex * 0.03,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  )
}
