// (reg.no/roll no)*,
// name*,
// email id*,
// phone number(whatsapp)*,
// college_name*,
// department*,
// year(dropdown)*,
// event_name(dropdown)*,
// planned to bring your own laptop*
import * as React from 'react'
import { Checkbox, TextField, Autocomplete } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

export const Register = () => {
  return (
    <>
      <section className="d-flex justify-content-between bg-blue">
        <div className="col-4 d-none d-md-block">
          <img src="Bg.png" className="w-100" />
        </div>
        <div className="me-md-5 col-md-7 col-sm-12 text-center p-md-5">
          <div className="m-5">
            <div className="h3 mb-4">
              Take your technical journey with fun to a next step here! Register
              here and get your seats!
            </div>
            <hr />
            <form className="p-md-3">
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
                    label: { color: "white" },
                    li: { color: "white" },
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
                    <TextField {...params} label="events" placeholder='names'/>
                  )}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
const events = [
  { title: "Trade your theory" },
  { title: "Glitch in the matrix" },
  { title: "Merge Conflicts" },
  {title: "Stuck between pixels"},
  {title:"Last or Lost"},
  {title:"Masters of the Alog Land"},
  {title:"Murphys's Mirror"},
  {title:"house of the High Table"},
  {title:"Finger Stickin good"},
];