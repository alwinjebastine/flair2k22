import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BaseLayout } from './components/BaseLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Register } from './pages/Register'
// import { Events } from './components/Events'
import { Contact } from './pages/Contact'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/scss/style.scss'
import Events from './components/Events'
import EventInfo from './pages/EventInfo'

const App = () => {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          {/* <Route path="/events/*" element={<Events />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/register/:rname" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events/:ename" element={<EventInfo />} />
        </Routes>
      </BaseLayout>
    </Router>
  )
}

export default App
