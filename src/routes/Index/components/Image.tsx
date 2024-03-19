import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import wallpaper from '../assets/wallpaper.png'
import PointOfInterest from './PointOfInterest'

export const eventName = 'image-click'

const WIDTH = 5712
const HEIGHT = 4284

const pins = [
  {
    x: 2500,
    y: 1500,
    title: 'Ipad Pro 11" + Apple pencil',
    description:
      'The perfect tool to brainstorm, read books, take notes, sign documents and even as a second monitor for my MacBook thanks to Sidecar.',
  },
  {
    x: 2800,
    y: 2300,
    title: 'Withings ScanWatch 2',
    description:
      'The perfect hybrid standard watch and smart watch. It has a very long battery life of 3 weeks, a very accurate ECG and SpO2 sensor, and a very good sleep tracker.',
  },
  // {
  //   x: 2800,
  //   y: 2300,
  //   title: 'Headphones Sony WH-1000XM4',
  //   description:
  //     'Perfect for calls and music. The noise cancellation is amazing to work and stay focused everywhere. It is very comfortable and the battery life is very good.',
  // },
  // {
  //   x: 2800,
  //   y: 2300,
  //   title: 'Orbitkey key organizer',
  //   description:
  //     'A very compact key organizer including a multitool and my gym badge.',
  // },
  // {
  //   x: 2800,
  //   y: 2300,
  //   title: 'Hydro Flask Water bottle',
  //   description:
  //     When working hard, it is important to stay hydrated. I always carry a water bottle with me.',
  // },
  // {
  //   x: 2800,
  //   y: 2300,
  //   title: 'Carbon Filber cardholder',
  //   description:
  //     'A very light, small and convenient wallet to carry my cards and some cash. It is also very beautiful and matches perfectly the rest of my gear.',
  // },
  // {
  //   x: 2800,
  //   y: 2300,
  //   title: 'Iphone 15 Pro Max',
  //   description:
  //     'Just a smartphone. But working with the Apple ecosystem. The large screen is perfect for reading books and watching videos. And with the latercase carbon fiber case, it is so beautiful and remains very light.',
  // },
  // {
  //   x: 2800,
  //   y: 2300,
  //   title: 'MacBook Pro 16" M1 Max',
  //   description:
  //     'The best laptop for developers and designers. It has a lot of power, a very good battery life, and all the ports you need.',
  // },
  {
    x: 3300,
    y: 1300,
    title: 'Notebook',
    description:
      'Sometimes the ipad is not good enough, or it just runs out of battery. A second option to take note is always a good idea. This one is very compact and has a very good paper quality.',
  },
  {
    x: 3400,
    y: 2100,
    title: 'AirPods Pro 2 (USB C)',
    description:
      'A practical way for calls and music. Thanks to Continuity, it works perfectly with all my Apple devices. The noise cancellation is amazing to work everywhere. With the latercase carbon fiber case, it is just perfect.',
    link: {
      '': 'https"//www.latercase.com/products/airpods-pro-2?variant=40803436682347',
      case: 'https://www.latercase.com/products/airpods-pro-2-case?variant=40803436682347',
    },
  },
  {
    x: 3550,
    y: 2600,
    title: 'Refillable spray vial',
    url: 'https://www.nomatic.com/collections/all-accessories/products/vial',
    description:
      'Initially used as a sanitizer spay, it is very practical to carry my favorite perfume. It is very small and light, easy to refill and has a lockable anti-leak nozzle.',
  },
  {
    x: 3900,
    y: 2000,
    title: 'Deejo 15g knife',
    description:
      'A very light and practical knife for everyday carry. It matches perfectly the rest of my gear thanks to the carbon fiber handle and the titanium black blade.',
  },
  {
    x: 4200,
    y: 1700,
    title: 'AirTag',
    description:
      "Since the first day, I don't move my equipment outside home without it.",
  },
]

export interface ImageProps {
  children?: React.ReactNode
}

export default function Image({ children }: ImageProps) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent(eventName))
  }

  const container = useRef<HTMLDivElement>()

  const [{ width, height }, setSize] = useState({
    width: WIDTH,
    height: HEIGHT,
  })

  const [ratio, setRatio] = useState(1)

  const computeWidth = () => {
    if (!container?.current) return

    const newSize =
      window.innerHeight / window.innerWidth > HEIGHT / WIDTH
        ? {
            width: (window.innerHeight * WIDTH) / HEIGHT,
            height: window.innerHeight,
          }
        : {
            width: window.innerWidth,
            height: (window.innerWidth * HEIGHT) / WIDTH,
          }

    setSize(newSize)

    const scrollTo = {
      top: Math.abs(window.innerHeight - newSize.height) / 2,
      left: Math.abs(window.innerWidth - newSize.width) / 2,
    }

    container.current.scrollTo(scrollTo)
  }

  useLayoutEffect(computeWidth, [])

  useEffect(() => {
    window.addEventListener('resize', computeWidth)
    return () => window.removeEventListener('resize', computeWidth)
  }, [])

  const ratioX = width / WIDTH
  const ratioY = height / HEIGHT

  return (
    <div className='absolute h-full w-full overflow-scroll' ref={container}>
      <img
        src={wallpaper}
        className='absolute'
        style={{
          width,
          height,
          maxWidth: width,
          maxHeight: height,
        }}
        onClick={handleClick}
      />
      {pins.map((pin, index) => (
        <PointOfInterest
          key={`${pin.x}-${pin.y}`}
          x={pin.x * ratioX}
          y={pin.y * ratioY}
          title={pin.title}
          description={pin.description}
          link={pin.link ?? ''}
        />
      ))}
      {children}
    </div>
  )
}
