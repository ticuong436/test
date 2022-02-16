import React, { useState } from 'react'
import useFormValidate from '../../Hook/useFormValidate'
import './signin.css'
export default function Signin() {
  let [err, setErr] = useState()
  let {form, inputchange, error, check}  = useFormValidate({
    name:'',
    date:'',
    gender:'',
    username:'',
    password:'',
  },{
    rule:{
      name:{
        require: true,
        
      },
      date:{
        require:true,
      },
      gender:{
        require:true,
      },
      username:{
        require:true,
      },
      password:{
        required: true,
                min: 6,
                max: 32,
      },
      confirmpassword: {
        required: true,
        match: 'password'
    }
    },
    message:{
      
        name:{
          require: 'Họ và tên không được để trống',
          
        },
        date:{
          require:'Ngày sinh không được để trống'
        },
        gender:{
          require:'Giới tính không được để trống',
        },
        username:{
          require:'Username không được để trống'
        },
        password: {
          required: 'Vui Lòng nhập Password',

      },
      confirmpassword: {
          required: 'Vui Lòng nhập Password',
          match: 'Không hớp với mật khẩu đã nhập'

      }
    }
  })
  return (
    <>
    <div className='userSignin'>
      <div className='signin'>
        <form className='signinForm'>
        <span>Login</span>
        <div className="signinItem">
                                <lable>Username</lable>
                                <input  type='text' placeholder='Username' className='signupInput'/>
                            </div>
                            <div className="signinItem">
                                <lable>Password</lable>
                                <input type='password' placeholder='Password' className='signupInput'/>
                            </div>
                            <button className='btnSignin'>Đăng nhập</button>
        </form>
      </div>
      <div className='signup'>
       
           <form className='signupForm'>
           <span className='signupTitle'>Register</span>
              <div className='userUpdateLeft'>
                        
                        <div className="signupItem">
                            <lable>Họ và Tên</lable>
                            <input type='text' placeholder='Nguyễn Văn A' className='signupInput'/>
                        </div>
                        <div className="signupItem">
                            <lable>Ngày Sinh</lable>
                            <input type='text' placeholder='1/1/2022' className='signupInput'/>
                        </div>
                        <div className="signupItem">
                            <lable>Giới Tính</lable>
                            <input type='text' placeholder='Nam' className='signupInput'/>
                        </div>
                        <div className="signupItem">
                            <lable>Username</lable>
                            <input type='text' placeholder='password' className='signupInput'/>
                        </div>
                        <div className="signupItem">
                            <lable>Password</lable>
                            <input type='password' placeholder='password' className='signupInput'/>
                        </div>
                        <div className="signupItem">
                            <lable>Nhập lại Password</lable>
                            <input type='password' placeholder='password' className='signupInput'/>
                        </div>
                    </div>
                    <div className="signupRight">
                        <div className="signupItem">
                                <lable>Ngày Tạo</lable>
                                <input type='text' placeholder='1/1/2021' className='signupInput'/>
                            </div>
                            <div className="signupItem">
                                <lable>Role</lable>
                                <input type='text' placeholder='Admin' className='signupInput'/>
                            </div>
                    </div>     
                    <button className='btnSignup'>Đăng Kí</button> 
              </form>     
      </div>
    </div>
    
</>
  )
}
