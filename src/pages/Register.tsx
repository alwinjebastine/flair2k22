// (reg.no/roll no)*,
// name*,
// email id*,
// phone number(whatsapp)*,
// college_name*,
// department*,
// year(dropdown)*,
// event_name(dropdown)*,
// planned to bring your own laptop*

import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useParams } from 'react-router-dom'
import events from '../utils/events'

interface EDeets {
  title: string
  description: string
  href: string
  rules: string
  register: string
  image: any
}

export const Register = () => {
  const { rname } = useParams()
  const [eventDeets, setEventDeets] = useState<EDeets>({
    title: '',
    description: '',
    href: '',
    rules: '',
    register: '',
    image: '',
  })

  useEffect(() => {
    setEventDeets(
      events.find(
        (event) => event.title.toLowerCase() === rname?.replace(/-/g, ' ')
      ) as any
    )
  }, [rname])

  useEffect(() => {
    console.log(eventDeets)
  }, [eventDeets])

  return (
    <>
      <section className="container d-flex justify-content-center align-items-center w-100 my-5">
        <Card
          className="bg-dark all-text-white mt-5 rounded-curve shadow-white p-3 text-center z-10"
          style={{ minWidth: '18rem', maxWidth: '80vw' }}
        >
          <CardContent>
            <h4 className="h4 text-gradient mb-4">
              Take your technical journey with fun to a next step here! Register
              here and get your seats!
            </h4>
            <hr />
            {/* <form className="d-flex flex-column justify-content-center align-items-center">
              <div className="w-75">
                <div className="my-4 text-start d-grid gap-2">
                  <label className="form-label">Register Number</label>
                  <input
                    type="text"
                    className="form-control bg-transparent"
                    required
                  />
                </div>
                <div className="my-4 text-start d-grid gap-2">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control bg-transparent"
                    required
                  />
                </div>
                <div className="my-4 text-start d-grid gap-2">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control bg-transparent"
                    required
                  />
                </div>
                <div className="my-4 text-start d-grid gap-2">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control bg-transparent"
                    required
                  />
                </div>
                <div className="my-4 text-start d-grid gap-2">
                  <label className="form-label">College Name</label>
                  <input
                    type="text"
                    className="form-control bg-transparent"
                    required
                  />
                </div>
                <div className="my-4 text-start d-grid gap-2">
                  <label className="form-label">Your Department</label>
                  <input
                    type="text"
                    className="form-control bg-transparent"
                    required
                  />
                </div>
                <div className="my-4 text-start d-grid gap-2">
                  <label className="form-label">
                    Select Your number of choices
                  </label>
                  <Autocomplete
                    sx={{
                      label: { color: 'white' },
                      li: { color: 'white' },
                      '& label.Mui-focused': {
                        color: 'white',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'white',
                        },
                        '&:hover fieldset': {
                          borderColor: 'white',
                        },
                      },
                    }}
                    multiple
                    id="checkboxes-tags-demo"
                    options={events}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.title}
                    renderOption={(props, option, { selected }) => (
                      <li {...props}>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                        />
                        {option.title}
                      </li>
                    )}
                    renderInput={(params) => (
                      <TextField {...params} label="Events" />
                    )}
                  />
                </div>
                <button className="btn btn-gradient rounded-pill px-3 mt-2">
                  Register!
                </button>
              </div>
            </form> */}

            <iframe
              // src="https://docs.google.com/forms/d/e/1FAIpQLSew4B6yXGAZeZLBHRspzsp_QeeB1Nn4jr7VC6DD17_DAj1UbQ/viewform?embedded=true"
              src={`${eventDeets?.register}/viewform/?embedded=true`}
              // width="500"
              style={{ minHeight: '2000px' }}
              className="w-100"
            >
              Loading…
            </iframe>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
