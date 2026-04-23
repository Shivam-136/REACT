import React, { useRef } from 'react'


const App = () => {
  const formRef = useRef({})

  let handalSubmit = (e) => {
    e.preventDefault();

    let { name, email, password } = formRef.current;

    let data = {
      name: name.value,
      email: email.value,
      password: password.value
    }

    console.log(data);
  }
    return (
      <div>
        <h1>Form Handling</h1>

        <form onSubmit={handalSubmit}>

          <div>
            <label htmlFor="name">Name</label>  <br />
            <input
              ref={(e) => (formRef.current.name = e)}
              id='name'
              type="text"
              placeholder='Name' />
          </div>

          <br />

          <div>
            <label htmlFor="email">Email</label> <br />
            <input
              ref={(e) => (formRef.current.email = e)}

              id='email'
              type="text"
              placeholder='Email' />
          </div>

          <br />

          <div>
            <label htmlFor="password">Password</label> <br />
            <input
              ref={(e) => (formRef.current.password = e)}
              id='password'
              type="password"
              placeholder='Password' />
          </div>

          <br />

          <div>
            <button>Submit</button>
          </div>

        </form>

      </div>
    )
  }


export default App