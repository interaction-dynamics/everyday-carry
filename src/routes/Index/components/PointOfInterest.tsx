import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import { useRef, useState } from 'react'
import Card from './Card'
import Pin from './Pin'
import useEventListener from '../hooks/useEventListener'
import { eventName } from './Image'

const MARGIN = 10

export interface PointOfInterestProps {
  title?: string
  description?: string
  x: number
  y: number
  link?: string | Record<string, string>
}

export default function PointOfInterest({
  title,
  description,
  x,
  y,
  link,
}: PointOfInterestProps) {
  const [isCardVisible, setCardVisibility] = useState(false)

  useEventListener(eventName, (event: CustomEvent) => {
    if (event?.detail?.x !== x || event?.detail?.y !== y)
      setCardVisibility(false)
  })

  const nodeRef = useRef(null)

  return (
    <Pin
      x={x}
      y={y}
      onClick={() => {
        window.dispatchEvent(new CustomEvent(eventName, { detail: { x, y } }))
        setCardVisibility(v => !v)
      }}
      className={'z-20'}
    >
      <CSSTransition
        nodeRef={nodeRef}
        in={isCardVisible}
        appear
        timeout={200}
        classNames='alert'
        unmountOnExit
      >
        <Card
          ref={nodeRef}
          title={title}
          onClose={() => setCardVisibility(false)}
          description={description}
          link={link}
        />
      </CSSTransition>
    </Pin>
  )
}
