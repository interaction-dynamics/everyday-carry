import { forwardRef } from 'react'
import clsx from 'clsx'
import { XCircleIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export interface CardProps {
  title: string
  description: string
  onClose: () => void
  link: string | Record<string, string>
}

export default forwardRef(function Card(
  { title, onClose, description, link }: CardProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div
      className={clsx(
        'fixed md:absolute rounded-t-2xl md:rounded-2xl shadow backdrop-blur-md bg-white/60 p-10 md:p-3 z-30 w-full bottom-0 right-0 left-0 md:top-[-12px] md:right-[-12px] md:bottom-auto md:left-auto',
        title.length > 22 ? 'md:w-80' : 'md:w-64'
      )}
      onClick={event => event.stopPropagation()}
      ref={ref}
    >
      <div className='flex'>
        <h2 className='text-xl md:text-base font-bold flex-1 text-slate-800'>
          {title}
        </h2>
        <button
          className='absolute top-3 right-3 cursor-pointer ml-3 text-slate-600 hover:text-slate-800'
          onClick={onClose}
        >
          <XCircleIcon className='w-10 h-10 md:w-6 md:h-6 ' />
        </button>
      </div>
      <div className='text-md md:text-sm font-medium text-slate-800 my-2'>
        {description}
      </div>
      <div className='flex flex-col relative top-2 md:top-auto gap-2 md:gap-1'>
        {typeof link === 'string' || !link ? (
          <button className='text-lg md:text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center group'>
            Discover
            <ChevronRightIcon className='ml-0.5 group-hover:ml-1 transition-all w-4 h-4 mt-0.5' />
          </button>
        ) : (
          Object.entries(link).map(([key, value]) => (
            <button
              className='text-lg md:text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center group'
              key={key}
            >
              Discover {key}
              <ChevronRightIcon className='ml-0.5 group-hover:ml-1 transition-all w-4 h-4 mt-0.5' />
            </button>
          ))
        )}
      </div>
    </div>
  )
})
