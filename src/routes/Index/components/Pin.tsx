import clsx from 'clsx'
import React, { useRef, useState } from 'react'

export interface PinProps {
  className?: string
  children: React.ReactNode
  x: number
  y: number
  onClick: () => void
}

export default function Pin({ className, x, y, onClick, children }: PinProps) {
  const ref = useRef(null)

  const [isHover, setHover] = useState(false)

  return (
    <div className='relative h-6 w-6' style={{ top: y, left: x }}>
      <button
        ref={ref}
        className={clsx(
          'relative h-6 w-6 bg-white/60 backdrop-blur-md rounded-full transition-all border-white/60 ring-white/60 ring-0 ring-offset-0 hover:ring-4',
          className
        )}
        onClick={onClick}
      />
      {children}
    </div>
  )
}
