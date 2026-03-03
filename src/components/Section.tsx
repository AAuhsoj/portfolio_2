import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface SectionProps {
  id: string
  title?: string
  children: ReactNode
  className?: string
  fullWidth?: boolean
}

// 쫀득한 스프링 애니메이션 설정
const springTransition = {
  type: 'spring',
  damping: 25,
  stiffness: 120,
  mass: 0.8,
}

const titleVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...springTransition, delay: 0.1 },
  },
}

const contentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...springTransition, delay: 0.2 },
  },
}

export default function Section({
  id,
  title,
  children,
  className = '',
  fullWidth = false,
}: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 ${className}`}
    >
      <div className={fullWidth ? '' : 'section-container'}>
        {title && (
          <motion.h2
            className="section-title"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={titleVariants}
          >
            {title}
            <span className="text-accent-primary">.</span>
          </motion.h2>
        )}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={contentVariants}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
