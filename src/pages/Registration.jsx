//(reg.no/roll no)*,name*,email id*,phone number(whatsapp)*,college_name*,department*,year(dropdown)*,event_name(dropdown)*,planned to bring your own laptop*,
import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed'

const onSubmit = ({ values }) => console.log(values)

const Register = () => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        name="rno"
        label="Register Number/Roll No"
        type="number"
        required="id no required"
      />
      <Input
        name="name"
        label="Name"
        placeholder="your Name"
        required="name required"
      />
      <Input
        name="email"
        type="email"
        label="Email ID"
        required="id required"
      />
      <Input
        name="phone"
        label="Phone Number(whatsapp)"
        formatter="+91 ##### #####"
      />
      <Input
        name="collegename"
        label="College Name"
        required="college name required"
      />
      <Input
        name="department"
        label="Department"
        placeholder="name of your department"
        requied="department required"
      />
      <Select name="Year" label="Year">
        <option value="ms">I YEAR</option>
        <option value="m3">II YEAR</option>
        <option value="mx">III YEAR</option>
        <option value="my">IV YEAR</option>
      </Select>
      <Select name="event" label="Events name">
        <option value="ms">I YEAR</option>
        <option value="m3">II YEAR</option>
        <option value="mx">III YEAR</option>
        <option value="my">IV YEAR</option>
      </Select>
      <button type="submit">Submit</button>
      <Debug />
    </Form>
  )
}

export default Register
