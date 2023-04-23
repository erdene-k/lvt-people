import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
const HeaderMenu = () => {
  return (
    <div>  
        <header className='headerNav'>
            <Link to='/dashboard'>
             <DashboardIcon sx={{width:50, height:50}}/> </Link> 
           <div className='sub-header'>
            <Link to='/jobs'>My Jobs <WorkIcon/></Link>
            <Link to='/bids'>My Bids <WorkspacesIcon/></Link>
            <Link to='/login'><ExitToAppIcon/></Link>
           </div>
        </header>
        <Outlet/>
     </div>
  )
}

export default HeaderMenu