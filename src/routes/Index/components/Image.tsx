import wallpaper from '../assets/wallpaper.png'

export const eventName = 'image-click'

export default function Image({ children }) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent(eventName))
  }

  return (
    <svg className='absolute h-full w-full' onClick={handleClick}>
      <image href={wallpaper} className='w-full' x={0} y={0} />
      {children}
    </svg>
  )
}
