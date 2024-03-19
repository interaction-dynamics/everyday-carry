import { HashRouter, Routes, Route, Link, Navigate } from 'react-router-dom'

import IndexRoute from './routes/Index/IndexRoute'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<IndexRoute />} />
      </Routes>
    </HashRouter>
  )
}

export default App
