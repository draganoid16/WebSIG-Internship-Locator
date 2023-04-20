import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
        <h1>Login Page</h1>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/listings'>Listings</Link>
    </div>
  )
}

export default Login;