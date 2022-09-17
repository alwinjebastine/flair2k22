import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BaseLayout } from './components/BaseLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Register } from './pages/Register'
import './assets/scss/style.scss'

const App = () => {
  return (
    <BaseLayout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </BaseLayout>
  )
}

export default App
