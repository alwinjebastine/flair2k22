import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import Home from './pages/Home'
import Events from './pages/Events'
import About from './pages/About'

export default function App() {
  return (
    <>
      <BaseLayout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </BaseLayout>
    </>
  )
}
