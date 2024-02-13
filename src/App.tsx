import { HashRouter, Routes, Route, Link, Navigate } from 'react-router-dom'

import IndexRoute from './routes/Index/IndexRoute'

const App = () => {
  return (
    <div className='container fixed inset-0'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<IndexRoute />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
