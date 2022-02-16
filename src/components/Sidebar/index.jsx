import React from 'react'
import "./sidebar.css"
import {HomeOutlined, PersonOutlineOutlined} from "@material-ui/icons"
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className="sidebarMenu">
          <h3 className='sideTitle'>Dashboard</h3>
          <ul className='sidebarList'>
          <Link to="/">
              <li className="sidebarListItem ">
                <HomeOutlined/>
                Home
                
              </li>
            </Link>
            <Link to="/signin">
            <li className="sidebarListItem">
              <PersonOutlineOutlined/>
              User Profile
            </li>
            </Link>
           
            <Link to="/user">
            <li className="sidebarListItem">
              <HomeOutlined/>
              User Management
              
            </li>
            </Link>
          </ul>
        </div>
        
      </div>

    </div>
  )
}
