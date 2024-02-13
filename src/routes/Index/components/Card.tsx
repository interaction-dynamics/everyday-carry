export default function Card({ title, x, y }) {
  return (
    <div
      className='absolute rounded-lg shadow backdrop-blur-md bg-white/40 py-2 px-3 z-50'
      style={{ top: y, left: x }}
    >
      <h2 className='font-semibold'>{title}</h2>
    </div>
  )
}
