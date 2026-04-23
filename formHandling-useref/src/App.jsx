import React from 'react'

const App = () => {

   let handalSubmit = (e)=>{
    e.preventDefault();

    
   }
  
  return (
    <div>
      <h1>Form Handling</h1>

      <form onSubmit={handalSubmit}>
        
        <div>
          <label htmlFor="name">Name</label>  <br />
          <input name="name" id='name' type="text" placeholder='Name' />
        </div>

        <br />

        <div>
          <label htmlFor="email">Email</label> <br />
          <input name="email" id='email' type="text" placeholder='Email' />
        </div>

        <br />

        <div>
          <label htmlFor="password">Password</label> <br />
          <input name="password" id='password' type="password" placeholder='Password' />
        </div>

        <br />

        <div>
          <button type="submit">Submit</button>
        </div>

      </form>

    </div>
  )
}

export default App