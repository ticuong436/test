import "./userlist.css"
import {DataGrid} from "@material-ui/data-grid"
import {DeleteOutlineOutlined} from "@material-ui/icons"
import { useEffect, useState } from "react";
import { userRows } from "../../userData";
import { Link } from "react-router-dom";
import UserProfile from "../UserProfile";

  
  
export default function UserList() {
    const[data,setData]=useState(userRows)
    const handleDelete = (id) =>  {
        setData(data.filter(item=>item.id !== id))
    }
    const [filter, setFilter] = useState('')
   

    function search(e){
        setFilter(e.target.value)
    }
    const [submit, setSubmit] = useState('')
    function onSubmit(){
        setSubmit(filter)
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Tên', width: 130 },
        { field: 'age', headerName: 'Ngày sinh', width: 180 },
        { field: 'gender', headerName: 'Giới tính', width: 130 },   
        { field: 'action', headerName: 'Action', width: 150 , renderCell:(params)=>{
           
            return(
                <>
                <Link to={"/user/"+params.row.id}>
                   {/* <div className="abc" style={{display:'none'}}><UserProfile {...params.row}/> </div> */}
                <button className="userListEdit">Edit</button>
                </Link>
                
                <DeleteOutlineOutlined className="userListDelete" onClick={()=>{handleDelete(params.row.id)}}/>
                </>
            )
        }},  
      ];
  return (
      <>
      <div className="userWrapper">
        <div className="search">
            <input type="text" placeholder="search" onChange={search}/>
            <button onClick={onSubmit}>Search</button>
        </div>
        <div className="createUser">
            <Link to="/newUser">
            <div className="buttonCreate">Create User</div>
            </Link>
           
        </div>
      </div>
      
      
    <div style={{ height: 500, width: '100%' }}>
    <DataGrid
      rows={data}
      columns={columns}
      pageSize={7}
      filterModel={{
        items: [
          { columnField: 'name',        
            operatorValue: 'contains', 
            value: submit },
        ],
      }}
      disableSelectionOnClick
      
      checkboxSelection
    />
    
  </div>
  
  </>
  )
}
