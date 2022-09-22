import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import events from '../utils/events'

const EventInfo = () => {
  const [eventDeets, setEventDeets]: any = React.useState(null)
  const { ename } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setEventDeets(
      events.find(
        (event) => event.title.toLowerCase() === ename?.replace(/-/g, ' ')
      ) as any
    )
  }, [ename])

  useEffect(() => {
    console.log(eventDeets)
  }, [eventDeets])

  return (
    <section className="card bg-transparent">
      {eventDeets && (
        <div className="">
          <img
            src="https://storage.googleapis.com/github-p-dex-921037.appspot.com/assets/dex365/images/ad961f2f-d639-40cb-aab5-2fe9d1eeb465.webp"
            alt="bg"
            className="img-shadow vw-100"
          />
          <div className="container col-10">
            <h1
              className="text-capitalize display-3 fw-bold"
              style={{ marginTop: '-40px', zIndex: '20' }}
            >
              {eventDeets.title}
            </h1>
            <div className="d-flex justify-content-between align-items-start mt-5">
              <div className="col-6">
                <h5 className="h5">{eventDeets.description}</h5>
                <h3 className="h3 my-3">Rules:</h3>
                <p>{eventDeets.rules.replace(/,/g, '\n')}</p>
                <button
                  className="btn btn-gradient rounded-pill px-3 py-1 mt-3 text-white"
                  onClick={() => navigate(`/register/${eventDeets.register}`)}
                >
                  Register!
                </button>
              </div>
              <div className="col-3 d-grid gap-3">
                <div>
                  <h5 className="h5">WHEN:</h5>
                  <h6 className="h6">tbd</h6>
                </div>
                <div>
                  <h5 className="h5">TYPE:</h5>
                  <h6 className="h6">Live</h6>
                </div>
                <div>
                  <h5 className="h5">WHERE:</h5>
                  <h6 className="h6">At LICET</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default EventInfo
