import { useRef } from 'react'

export default function Pin({ x, y, onClick }) {
  const ref = useRef(null)

  return (
    <circle
      ref={ref}
      cx={x}
      cy={y}
      r={15}
      fill='currentColor'
      className='text-white/50 hover:text-white cursor-pointer transition-colors duration-300 ease-in-out'
      onClick={event => {
        onClick(ref.current.getBoundingClientRect())
        event.stopPropagation()
        event.preventDefault()
      }}
    />
  )
}
