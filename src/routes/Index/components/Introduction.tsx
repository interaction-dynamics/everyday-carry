import { forwardRef } from 'react'

export interface IntroductionProps {
  onClose: () => void
}

export default forwardRef(function Introduction(
  { onClose }: IntroductionProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div
      className='fixed inset-0 backdrop-blur-xl bg-white/30 transition-all flex flex-col gap-5 items-center justify-center text-center z-50'
      ref={ref}
    >
      <h1 className='text-3xl font-extrabold uppercase'>
        Discover my
        <br />
        Every Day Carry
      </h1>
      <p className='text-xl max-w-3xl text-black/80'>
        Thanks my EDC, I am more productive as a front-end developer and can
        focus on bringing more value to my customers.
      </p>
      <button
        className='rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900'
        onClick={onClose}
      >
        Discover
      </button>
    </div>
  )
})
