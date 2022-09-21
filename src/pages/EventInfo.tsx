import React from 'react'
import { useParams } from 'react-router-dom'

const EventInfo = () => {
  const { ename } = useParams()

  return (
    <section className="card bg-transparent">
      <div className="">
        <img
          src="https://storage.googleapis.com/github-p-dex-921037.appspot.com/assets/dex365/images/ad961f2f-d639-40cb-aab5-2fe9d1eeb465.webp"
          alt="bg"
          className="img-shadow opacity-75"
        />
        <div className="container col-10">
          <h1
            className="text-capitalize display-3 fw-bold"
            style={{ marginTop: '-40px', zIndex: '20' }}
          >
            {ename?.replace('-', ' ')}
          </h1>
          <div className="d-flex justify-content-between align-items-start mt-5">
            <div className="col-6">
              <h5 className="h5">
                With over 80 sessions diving into key themes across Cloud,
                Security, AI, and the global GitHub Community, we{`'`}ll have
                something for everyone at this year{`'`}s Universe. Hear from
                industry experts on how to secure your start-up{`'`}s software
                development cycle, the future of AI, and much, much more. Stay
                tuned for a full line-up of sessions soon.
              </h5>
              <button className="btn btn-gradient rounded-pill px-3 py-1 mt-3 text-white">
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
    </section>
  )
}

export default EventInfo
