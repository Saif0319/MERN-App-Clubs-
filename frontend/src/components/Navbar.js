import { Link } from 'react-router-dom'

import React from 'react'

export const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Clubs</h1>
        </Link>
      </div>
    </header>
  )
}
