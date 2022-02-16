import React from 'react'
import "./topbar.css"
import {NotificationsNoneOutlined, AccountCircleOutlined, SearchOutlined} from "@material-ui/icons"
export default function () {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
           
          
            <div className='right'>
            
                <div className='search'>
                    <input type="text" placeholder='Search'/> 
                    <SearchOutlined/>
                </div>
                <div className='icon-right'>
                    <NotificationsNoneOutlined />
                </div>
                <div className='icon-right'>
                    <a href='#'>
                    <AccountCircleOutlined/>
                    </a>
                   
                </div>
                
            </div>
        </div>
    </div>
  )
}
