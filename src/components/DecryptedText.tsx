import { useEffect, useState, useRef } from 'react'

interface DecryptedTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*'

export default function DecryptedText({
  text,
  className = '',
  delay = 0,
  speed = 50,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [isStarted, setIsStarted] = useState(false)
  const iterationRef = useRef(0)

  useEffect(() => {
    const startTimer = setTimeout(() => setIsStarted(true), delay * 1000)
    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!isStarted) return

    iterationRef.current = 0

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iterationRef.current) {
              return text[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )

      if (iterationRef.current >= text.length) {
        clearInterval(interval)
      }

      iterationRef.current += 1 / 3
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, isStarted])

  return (
    <span className={`font-mono ${className}`}>
      {displayText || text.replace(/./g, ' ')}
    </span>
  )
}
