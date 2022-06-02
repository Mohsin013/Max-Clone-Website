import React from 'react'
import NavbarTop from './NavbarTop'
import NavbarSecond from './NavbarSecond'
const Navbar = () => {
  return (
    <div className="bg-white sticky z-10">
      <NavbarTop />
      <NavbarSecond />
    </div>
  )
}

export default Navbar