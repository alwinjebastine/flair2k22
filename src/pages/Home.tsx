import Events from '../components/Events'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className="snap-container">
      <section id="home">
        <Hero />
      </section>
      {/* <section className=" mt-5" id="events">
        <Events />
      </section> */}
    </div>
  )
}

export { Home }
