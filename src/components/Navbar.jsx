import React from 'react'
import prepSathiLogo from '../assets/prep_sathi_logo_white_transparent.png'

const Navbar =  () => {
  return (
    <div className="navbar bg-base-300 mb-5 fixed top-0 z-50">
      <button className="btn btn-ghost text-xl"><img src={prepSathiLogo} alt="" className='h-1/2' />Prep Sathi</button>
    </div>
  )
}

export default Navbar