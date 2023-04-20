import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const HeaderMenu = () => {
  return (
    <div>  
        <header className='headerNav'>
            <Link to='/dashboard'>Home</Link>
           <div className='sub-header'>
            <Link to='/jobs'>My Jobs</Link>
            <Link to='/bids'>My Bids</Link>
            <Link to='/login'>Login</Link>
           </div>
        </header>
        <Outlet/>
     </div>
  )
}

export default HeaderMenu