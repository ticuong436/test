import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./userprofile.css"

export default function UserProfile(props) {

  let {name} = props

  return (
    <div className='user'>
        <div className='userTitleContainer'>
            <h1 className='userTitle'>Edit User</h1>
            <Link to="/newUser">
            <div className='userCreate'>Create</div>
            </Link>
            
        </div>
        <div className='userContainer'>
            <div className='userShow'>
                <div className='userTopTitle'>
                    <span className='userShowTitle'>Account Details</span>
                    <div className='userShowInfo'>
                            <span className="userShowUsername">
                                ID: 01
                            </span>
                        </div>
                        <div className='userShowInfo'>
                            <span className="userShowUsername">    
                               Họ và tên: Nguyễn Văn A
                            </span>
                        </div>
                        <div className='userShowInfo'>
                            <span className="userShowUsername">
                            Ngày sinh: 1/1/2022
                            </span>
                        </div>
                        <div className='userShowInfo'>
                            <span className="userShowUsername">
                            Gender: Nam
                            </span>
                        </div>
                        <div className='userShowInfo'>
                            <span className="userShowUsername">
                            Ngày tạo: 16/2/2022
                            </span>
                        </div>
                        <div className='userShowInfo'>
                            <span className="userShowUsername">
                            Role: User
                            </span>
                        </div>
                        
                    </div>
            </div>
            <div className='userUpdate'>
                <span className='userUpdateTitle'>Edit</span>
                <form className='userUpdateForm'>
                    <div className='userUpdateLeft'>
                        <div className="userUpdateItem">
                            <lable>Họ và Tên</lable>
                            <input type='text' placeholder='Nguyễn Văn A' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <lable>Ngày Sinh</lable>
                            <input type='text' placeholder='1/1/2022' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <lable>Giới Tính</lable>
                            <input type='text' placeholder='Nam' className='userUpdateInput'/>
                        </div>
                       
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateItem">
                                <lable>Ngày Tạo</lable>
                                <input type='text' placeholder='1/1/2021' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <lable>Role</lable>
                                <input type='text' placeholder='Admin' className='userUpdateInput'/>
                            </div>
                            <button className='submitBtn'>Update</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
}
