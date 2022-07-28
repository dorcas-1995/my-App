import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="navbar bg-light">
        <ul className=''navbar-nav>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/search">SEARCH</Link>
            </li>

        </ul>
    </nav>
  )
}


