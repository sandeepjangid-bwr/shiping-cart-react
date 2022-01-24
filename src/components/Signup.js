import React from 'react';

const Signup = () => {

  const onChange = () => {

  }
  return <div className='container my-4'>
    <h2>Signup</h2>
    <form className='my-4'>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name='name' onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">Phone Number</label>
        <input type="number" className="form-control" id="number" name='number' minLength={10} onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name='password' onChange={onChange} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>;
};

export default Signup;
