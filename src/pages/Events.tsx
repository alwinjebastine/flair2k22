import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import events from '../utils/events'
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
                <div className="container d-md-flex justify-content-start align-items-center">
                  <div className="col-md-4">
                    <img
                      src="https://storage.googleapis.com/github-p-dex-921037.appspot.com/assets/dex365/resources/0d9ec20a-0905-4fe1-9578-86bf1c2a025b.png"
                      alt="event_1"
                      className="img-fluid rounded-3 w-100"
                      style={{ maxWidth: '300px' }}
                    />
                  </div>
                  <div className="col-md-8 align-self-start p-md-3 py-3">
                    <h3 className="h4 fw-bold text-gradient">{event.title}</h3>
                    <p className='lh-base'>{event.description}</p>
                    <div className="text-md-end text-center mt-3">
                      <button
                        className="btn btn-gradient rounded-pill px-3 mt-md-5 text-white"
                        onClick={() =>
                          navigate(
                            `/register/${event.title
                              .toLowerCase()
                              .replace(/ /g, '-')}`
                          )
                        }
                      >
                        Register!
                      </button>
                      <button
                        className="btn btn-gradient rounded-pill px-3 mt-md-5 text-white ms-3"
                        onClick={() =>
                          navigate(
                            `${event.title.toLowerCase().replace(/ /g, '-')}`
                          )
                        }
                      >
                        More Info!
                      </button>
                    </div>
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
