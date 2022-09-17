// (reg.no/roll no)*,
// name*,
// email id*,
// phone number(whatsapp)*,
// college_name*,
// department*,
// year(dropdown)*,
// event_name(dropdown)*,
// planned to bring your own laptop*

import { Form, Input, Select, Debug, FormState } from 'informed';

const submitHandler = ({ values }: FormState) => console.log(values)

export const Register = () => {
  return (
    <>
    <section className="d-flex vh-resp justify-content-between">
    <div className="col-4 d-none d-md-block"><img src="Bg.png" className="w-100"/></div>
    <div className="me-md-5 col-md-7 col-sm-12 text-center p-md-5">
      <div className='m-5'>
      <div className='h3 mb-4'>Take your technical journey with fun to a next step here! Register here and get your seats!</div>
      <hr />
      <form className='p-md-3'>
        <div className="my-4 text-start d-grid gap-2">
          <label className='form-label'>Register Number</label>
          <input type="text" className="form-control bg-transparent" required/>
        </div>
        <div className="my-4 text-start d-grid gap-2">
          <label className='form-label'>Name</label>
          <input type="text" className="form-control bg-transparent" required/>
        </div>
        <div className="my-4 text-start d-grid gap-2">
          <label className='form-label'>Email</label>
          <input type="email" className="form-control bg-transparent" required/>
        </div>
        <div className="my-4 text-start d-grid gap-2">
          <label className='form-label'>Phone Number</label>
          <input type="tel" className="form-control bg-transparent" required/>
        </div>
        <div className="my-4 text-start d-grid gap-2">
          <label className='form-label'>College Name</label>
          <input type="text" className="form-control bg-transparent" required/>
        </div>
        <div className="my-4 text-start d-grid gap-2">
          <label className='form-label'>Your Department</label>
          <input type="text" className="form-control bg-transparent" required/>
        </div>
      </form>
      </div>
    </div>
    </section>
    </> 
  )
}
