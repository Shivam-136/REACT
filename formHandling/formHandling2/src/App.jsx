import React, { useState } from 'react'

const App = () => {
  const [formValues, setFormValues] = useState({})
  const [Users, setUsers] = useState([])

  let handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)


    setUsers([...Users, formValues])
    setFormValues({})

  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name='name' type="text" placeholder='name' /><br /><br />
        <input onChange={handleChange} name='email' type="text" placeholder='email' /><br /><br />
        <input onChange={handleChange} name='mobile' type="text" placeholder='mobile' /><br /><br />
        <button>Submit</button>
      </form>


      {Users.map((User, index) => (
        <div key={index}>
          <p>Name: {User.name}</p>
          <p>Email: {User.email}</p>
          <p>Mobile: {User.mobile}</p>
        </div>
      ))}

    </div>
  )
}

export default App
