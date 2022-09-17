import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BaseLayout } from './components/BaseLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Events } from './pages/Events'
import { Register } from './pages/Register'
import './assets/scss/style.scss'

export const App = () => {
  return (
    <BaseLayout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </BaseLayout>
  )
}
