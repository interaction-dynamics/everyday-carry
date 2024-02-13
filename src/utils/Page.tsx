import { useParams, useSearchParams } from 'react-router-dom'
import Footer from './Footer.js'
import Github from './Github.js'
import Navigation from './Navigation.js'

export default function Page({ children, routes }) {
  const [urlSearchParams] = useSearchParams()

  if (urlSearchParams.get('demo')) return <>{children}</>

  return (
    <>
      <Navigation count={routes.length} />
      <Github />
      {children}
      <Footer />
    </>
  )
}
