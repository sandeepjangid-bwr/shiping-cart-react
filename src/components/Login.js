import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

const Login = (props) => {
  let navigate = useNavigate();

  const [credential, setCredential] = useState({ email: "", password: "" })

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const respone = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credential.email, password: credential.password })
    })

    const json = await respone.json();
    console.log(json)

    if (json.success) {
      localStorage.setItem('authToken', json.authToken);
      props.showAlert("Login Successfully", "success")
      navigate('/')
    }
    else {
      props.showAlert("Invalid Email or Password", "danger")
    }

  }

  const onChange = (ev) => {
    setCredential({ ...credential, [ev.target.name]: ev.target.value })
  }

  return <div className='container my-5'>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={credential.email} onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name='password' value={credential.password} onChange={onChange} />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>;
};

export default Login;
