import React, { Component } from 'react'
import { Link } from 'react-router'


const NavigationBar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Title</Link>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/signup">Sign up</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
