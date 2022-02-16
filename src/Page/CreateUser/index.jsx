import React from 'react'
import "./createUser.css"
export default function CreateUser() {
  return (
    <div className='newUser'>
        <h1 className='newUserTitle'>New User</h1>
        <form className='newUserForm'>
            <div className="newUserItem">
                <label >Họ và tên</label>
                <input type="text" placeholder='Nguyễn Văn A'/>
            </div>
            <div className="newUserItem">
                <label >Ngày Sinh</label>
                <input type="text" placeholder='06/09/2000'/>
            </div>
            <div className="newUserItem">
                <label >Giới Tính</label>
                <div className="newUserGender">
                <input type="radio" name="gender" id="male" value="nam"/>
                <label for="male">Nam</label>
                <input type="radio" name="gender" id="female" value="nữ"/>
                <label for="female">Nữ</label>
                <input type="radio" name="gender" id="others" value="khác"/>
                <label for="others">Khác</label>
                </div>
               
            
            </div>
            <div className="newUserItem">
                <label >Ngày Tạo</label>
                <input type="text" placeholder='16/2/2022'/>
            </div>
            <div className="newUserItem">
                <label >Role</label>
                <input type="text" placeholder='User'/>
            </div>
            <button className='newSubmit'>Submit</button>
        </form>

    </div>
  )
}
