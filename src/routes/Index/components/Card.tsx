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
  console.log('title', title, typeof link)

  return (
    <div
      className={clsx(
        'absolute rounded-2xl shadow backdrop-blur-md bg-white/60 p-3 z-30',
        title.length > 22 ? 'w-80' : 'w-64'
      )}
      style={{ top: -12, right: -12 }}
      onClick={event => event.stopPropagation()}
      ref={ref}
    >
      <div className='flex'>
        <h2 className='text-base font-bold flex-1 text-slate-800'>{title}</h2>
        <button
          className='absolute top-3 right-3 cursor-pointer ml-3 text-slate-600 hover:text-slate-800'
          onClick={onClose}
        >
          <XCircleIcon className='w-6 h-6 ' />
        </button>
      </div>
      <div className='text-sm font-medium text-slate-800 my-2'>
        {description}
      </div>
      <div className='flex flex-col gap-1'>
        {typeof link === 'string' || !link ? (
          <button className='text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center group'>
            Discover
            <ChevronRightIcon className='ml-0.5 group-hover:ml-1 transition-all w-4 h-4 mt-0.5' />
          </button>
        ) : (
          Object.entries(link).map(([key, value]) => (
            <button
              className='text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center group'
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
