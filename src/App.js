import Home from './pages/Home'

export default function App() {
  return (
    <>
      <BaseLayout>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/events" element={<BlogRoutes />} />
            <Route path="/about" element={<Services />} />
          </Routes>
        </Router>
      </BaseLayout>
    </>
  )
}
