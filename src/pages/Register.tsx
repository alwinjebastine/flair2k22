// (reg.no/roll no)*,
// name*,
// email id*,
// phone number(whatsapp)*,
// college_name*,
// department*,
// year(dropdown)*,
// event_name(dropdown)*,
// planned to bring your own laptop*

import { Checkbox, TextField, Autocomplete } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

export const Register = () => {
  return (
    <>
      <section className="container d-flex justify-content-center align-items-center w-100 my-5">
        <Card
          className="bg-dark all-text-white mt-5 rounded-curve shadow-white w-50 p-3 text-center"
          style={{ minWidth: '18rem' }}
        >
          <CardContent>
            <h4 className="h4 text-gradient mb-4">
              Take your technical journey with fun to a next step here! Register
              here and get your seats!
            </h4>
            <hr />
            <form className="d-flex flex-column justify-content-center align-items-center">
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
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
export const events = [
  { title: 'Trade your theory' },
  { title: 'Glitch in the matrix' },
  { title: 'Merge Conflicts' },
  { title: 'Stuck between pixels' },
  { title: 'Last or Lost' },
  { title: 'Masters of the Alog Land' },
  { title: "Murphys's Mirror" },
  { title: 'house of the High Table' },
  { title: 'Finger Stickin good' },
]
