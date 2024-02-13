import Image from './components/Image'
import Pin from './components/Pin'
import PointOfInterest from './components/PointOfInterest'

export default function IndexRoute() {
  return (
    <div className='absolute h-full w-full'>
      <div className='absolute h-full w-full' id='card-content'></div>
      <Image>
        <PointOfInterest title='MacBook Pro 16"' description='World' />
      </Image>
    </div>
  )
}
