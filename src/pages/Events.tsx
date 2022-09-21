import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { events } from './Register'
import EventInfo from './EventInfo'

export const Events = () => {
  return (
    <Routes>
      <Route path="/" element={<EventsBase />} />
      <Route path="/:ename" element={<EventInfo />} />
    </Routes>
  )
}

export const EventsBase = () => {
  const navigate = useNavigate()

  return (
    <section
      className="container d-flex justify-content-center align-items-center my-5 card"
      style={{ background: 'transparent' }}
    >
      <div className="w-75 mt-5">
        <h2 className="h2 fw-bold">Events</h2>
        {events.map((event, i) => {
          return (
            <div key={i} className="d-grid gap-3">
              <hr />
              <div className="d-md-flex justify-content-center align-items-center">
                <img
                  src="https://storage.googleapis.com/github-p-dex-921037.appspot.com/assets/dex365/resources/0d9ec20a-0905-4fe1-9578-86bf1c2a025b.png"
                  alt="event_1"
                  className="img-fluid rounded-3 w-100"
                  style={{ maxWidth: '300px' }}
                />
                <div className="align-self-start p-3">
                  <h3 className="h4 fw-bold text-gradient">{event.title}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas architecto at provident voluptate ex rem, magnam
                    dicta incidunt aut obcaecati quia! Repudiandae sunt vel eos
                    in molestias aliquam eligendi atque.
                  </p>
                  <div className="text-md-end text-center">
                    <button
                      className="btn btn-gradient rounded-pill px-3 py-1 mt-3"
                      onClick={() => navigate('trade-your-theory')}
                    >
                      More Info!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
