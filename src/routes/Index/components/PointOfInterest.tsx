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
  onShow?: (b: boolean, height?: number) => void
}

export default function PointOfInterest({
  title,
  description,
  x,
  y,
  link,
  onShow = () => {},
}: PointOfInterestProps) {
  const [isCardVisible, setCardVisibility] = useState(false)

  useEventListener(eventName, (event: CustomEvent) => {
    if (event?.detail?.x !== x || event?.detail?.y !== y) {
      setCardVisibility(false)
      onShow(false, 0)
    }
  })

  const nodeRef = useRef(null)

  const timeout = 200

  return (
    <Pin
      x={x}
      y={y}
      onClick={() => {
        window.dispatchEvent(new CustomEvent(eventName, { detail: { x, y } }))

        setCardVisibility(true)
        onShow(true)

        let counter = 0
        const interval = setInterval(() => {
          onShow(
            true,
            nodeRef.current?.getBoundingClientRect().height - 30 ?? 0
          )

          counter++
          if (counter >= 200) {
            clearInterval(interval)
          }
        }, 1)
      }}
      className={'z-20'}
    >
      <CSSTransition
        nodeRef={nodeRef}
        in={isCardVisible}
        appear
        timeout={timeout}
        classNames='appear'
        unmountOnExit
      >
        <Card
          ref={nodeRef}
          title={title}
          onClose={() => {
            setCardVisibility(false)
            onShow(false, 0)
          }}
          description={description}
          link={link}
        />
      </CSSTransition>
    </Pin>
  )
}
