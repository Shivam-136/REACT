import React, { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    naam: "",
    gmail: "",
    password: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name,   value } = e.target;

    
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  }

return (
  <div>

    <form onSubmit={handleSubmit}>
      <input
        type="text" name="naam" placeholder="Enter name" value={formData.naam} onChange={handleChange}/>
      <br /> <br />
      <input
        type="text" name="gmail" placeholder="Enter gmail" value={formData.gmail} onChange={handleChange} />
      <br /> <br />
       <input
          type="text"
          name="Mobile"placeholder="Enter Mobile" value={formData.Mobile} onChange={handleChange}
        />
        <br /><br />
        <button>Submit</button>
    </form>

    {submittedData && (
      <div>
        <h3>Output:</h3>
        <p>Name: {submittedData.naam}</p>
        <p>Email: {submittedData.gmail}</p>
        <p>Password: {submittedData.password}</p>
      </div>
    )}
  </div>
)
}
export default App
