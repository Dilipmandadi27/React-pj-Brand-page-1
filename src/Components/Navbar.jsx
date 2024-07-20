import React from 'react'
import Brand from './../assets/brand_logo.svg'

function Navbar() {
  return (
<nav className='Navbar-section'>
    <div className='Brand-logo'>
       <img className='logo' src={Brand} alt="brand-logo" />
    </div>
    <div className='Navigations'>
        <a className='active' href="#">Menu</a>
        <a href="#">Location</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </div>
    <div className='Nav-btn'>
        <button >Login</button>
    </div>
</nav>
  )
}

export default Navbar
