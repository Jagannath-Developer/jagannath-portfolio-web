import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderComponent() {
  return (
    <div className='conatiner shadow-sm'>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary border-color">
        <div className="container ">
          <Link className="navbar-brand fw-bold" to="/">AJ Studio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link menu_active active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  menu_active  " to="/skills">Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  menu_active  " to="/service">Service</Link>
              </li>
              <li className="nav-item menu_active">
                <Link className="nav-link  menu_active" to="/about">About</Link>
              </li>
              <li className="nav-item menu_active">
                <Link className="nav-link  menu_active" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
