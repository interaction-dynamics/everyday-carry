import { createPortal } from 'react-dom'
import { useState } from 'react'
import Card from './Card'
import Pin from './Pin'
import useEventListener from '../hooks/useEventListener'
import { eventName } from './Image'

const MARGIN = 10

export default function PointOfInterest({ title, description }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setVisibility] = useState(false)

  const portalContainer = document.getElementById('card-content')

  const hideCard = () => {
    setVisibility(false)
  }

  useEventListener(eventName, hideCard)

  const onPinClick = ({ x, y, width }) => {
    if (isVisible) {
      hideCard()
    } else {
      setPosition({ x: x + width + MARGIN, y })
      setVisibility(true)
    }
  }

  return (
    <>
      <Pin x={500} y={500} onClick={onPinClick} />
      {isVisible &&
        createPortal(
          <Card title={title} x={position.x} y={position.y} />,
          portalContainer
        )}
    </>
  )
}
