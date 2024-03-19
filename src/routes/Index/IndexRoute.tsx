import { useRef, useState } from 'react'
import Image from './components/Image'
import Introduction from './components/Introduction'
import { CSSTransition } from 'react-transition-group'

export default function IndexRoute() {
  const [introductionDisplayed, showIntroduction] = useState(true)

  const nodeRef = useRef(null)

  return (
    <div className='absolute h-full w-full'>
      <Image>
        <CSSTransition
          nodeRef={nodeRef}
          in={introductionDisplayed}
          timeout={1000}
          classNames='fade'
          unmountOnExit
        >
          <Introduction ref={nodeRef} onClose={() => showIntroduction(false)} />
        </CSSTransition>
      </Image>
    </div>
  )
}
