import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='nav'>
    <h2>Navbar</h2>
    <input ></input>
    <div className='link-nav'>
      <Link to={'/'} >Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/product'}>Product</Link>
      <Link to={'/contact'}>Contack</Link>
    </div>
    </div>
    </>
  )
}

export default Navbar