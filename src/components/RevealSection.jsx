import useReveal from '../hooks/useReveal'

export default function RevealSection({ children, className = '', as: Tag = 'div', ...props }) {
  const [ref, visible] = useReveal()

  return (
    <Tag ref={ref} className={`reveal${visible ? ' visible' : ''} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
