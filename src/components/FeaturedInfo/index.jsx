import React from 'react'
import {ArrowDownwardOutlined} from '@material-ui/icons'
import "./featuredinfo.css"
export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className="featuredTitle">User</span>
            <div className='featuredContainer'>
                <span className="featuredTotal">20</span>
                <span className='featuredRate'>+10 <ArrowDownwardOutlined className='featuredIcon'/></span>
            </div>
            <span className='featureSub'>Compared to last month</span>
        </div>

        <div className='featuredItem'>
            <span className="featuredTitle">Admin</span>
            <div className='featuredContainer'>
                <span className="featuredTotal">20</span>
                <span className='featuredRate'>-2 <ArrowDownwardOutlined className='featuredIcon nagative'/></span>
            </div>
            <span className='featureSub'>Compared to last month</span>
        </div>

        <div className='featuredItem'>
            <span className="featuredTitle">Register</span>
            <div className='featuredContainer'>
                <span className="featuredTotal">20</span>
                <span className='featuredRate'>+10 <ArrowDownwardOutlined className='featuredIcon'/></span>
            </div>
            <span className='featureSub'>Compared to last month</span>
        </div>
    </div>
  )
}
