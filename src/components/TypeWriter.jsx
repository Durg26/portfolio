import { useState, useEffect, useRef } from 'react'

export default function TypeWriter({ words, wait = 2000 }) {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const wordIndex = useRef(0)

  useEffect(() => {
    const current = wordIndex.current % words.length
    const fullText = words[current]

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(prev => fullText.substring(0, prev.length - 1))
      } else {
        setText(prev => fullText.substring(0, prev.length + 1))
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), wait)
        return
      }
      if (isDeleting && text === '') {
        setIsDeleting(false)
        wordIndex.current++
      }
    }, isDeleting ? 40 : 80)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, words, wait])

  return (
    <span>
      {text}<span className="typed-cursor">|</span>
    </span>
  )
}
