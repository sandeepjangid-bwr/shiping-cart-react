import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

const Signup = (props) => {
  let navigate = useNavigate();

  const [credential, setCredential] = useState({ name: "", email: "", password: "" })

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const respone = await fetch(`http://localhost:5000/api/auth/signup`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credential.name, email: credential.email, password: credential.password })
    })

    const json = await respone.json();
    console.log(json)

    if (json.success) {
      localStorage.setItem('token', json.authToken);
      navigate('/login')
      props.showAlert("Account Created", "success")
    }
    else {
      props.showAlert("Invalid Email", "danger")
    }
  }

  const onChange = (ev) => {
    setCredential({ ...credential, [ev.target.name]: ev.target.value })
  }

  return <div className='container my-4'>
    <h2>Signup</h2>
    <form className='my-4' onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name='name' onChange={onChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">Phone Number</label>
        <input type="number" className="form-control" id="number" name='number' minLength={10} onChange={onChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name='password' onChange={onChange} required minLength={6} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>;
};

export default Signup;
