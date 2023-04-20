import React from 'react'
import { Link } from 'react-router-dom';

function Listings() {
  return (
    <div>
        <h1>Listings Page</h1>
        <Link to="/">Home</Link>
        <br />
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Listings;