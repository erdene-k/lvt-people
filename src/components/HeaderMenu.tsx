import React from 'react'
import { Outlet } from 'react-router-dom'

const HeaderMenu = () => {
  return (
    <div>  
        <header>
            <p>LVT</p>
        </header>
        <Outlet/>
     </div>
  )
}

export default HeaderMenu