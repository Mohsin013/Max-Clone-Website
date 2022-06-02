import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>Navbar
        <div>
            <Link to="signin/*">Sigin</Link>
        </div>
    </div>
  )
}

export default Navbar