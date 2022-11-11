import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
      <Link className='btn btn-outline-light' to="/">VYSR Human Resources Company</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav text-center d-flex justify-content-center">
          <li class="nav-item active">
            <Link className='btn btn-outline-light' to="/profile">My Profile</Link>
          </li>
          <li class="nav-item">
            <Link className='btn btn-outline-light' to="/user">User Details</Link>
          </li>
          <li class="nav-item">
            <Link className='btn btn-outline-light' to="/aboutus">About Us</Link>
          </li>
          <li class="nav-item">
            <Link className='btn btn-outline-light' to="/contact">Contact</Link>
          </li>
          <li class="nav-item">
            <Link className='btn btn-outline-light' to="/hire">Hire!</Link>
          </li>
          <li class="nav-item">
            
              <img src="C:\Users\RECEP KABAKCI\masaüstü\hrms-frontend\src\img\prof.jpg" alt="" />
            
          </li>

        </ul>
      </div>

    </nav>
  )
}
