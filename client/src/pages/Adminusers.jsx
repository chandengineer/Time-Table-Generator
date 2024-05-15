import { useState } from "react";
import { useEffect } from "react"
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router-dom";
const URL=`${window.location.origin}/api/admin/users`;
export const Adminusers=()=>{
const [users,setUsers]=useState([]);

    const getallusersdata=async()=>{
        try {
            const response= await fetch(URL,{
                method:"GET",
            });
            const data=await response.json();
            console.log(`users ${data}`);
            setUsers(data);

            
        } catch (error) {
            console.log(error);
            
        }
    }
    //deleting user 
    const deleteuser=async(id)=>{
        try {
            
        const response= await fetch(`${window.location.origin}/api/admin/users/delete/${id}`,{
            method:"DELETE",
        });
        const data=await response.json();
        console.log(`users after delete  ${data}`);
        if(response.ok){
            getallusersdata();
            toast.success("User deleted successfully");
        }
    }catch (error) {
            console.log(error); 
        }
    };
   useEffect(()=>{
    getallusersdata();
   },[]  );
    return <>
    <section className="admin-users-section">
        <div className="container">
            <h1>REPORT-TABLE</h1>
            </div>
    <div className="container admin-users">
        <table>
            <thead>
                <tr>
                    <td>FACULTY ID </td>
                    <td>FACULTY NAME</td>
                    <td>COURSE CODE</td>
                    <td>COURSE NAME</td>
                    
                </tr>
            </thead>
            <tbody>
            {users.map((curUser,index)=>{
     return( <tr key={index}>
        <td>{curUser.faculty_id}</td>
        <td>{curUser.faculty_name}</td>
        <td>{curUser.course_code}</td>
        <td>{curUser.course_name}</td>
        
        <td><NavLink to="/admin/update">Edit</NavLink></td>
        <td><button onClick={()=>deleteuser(curUser._id)}>Delete</button></td>
     </tr>);
          })}
            </tbody>
        </table>
   
</div>
    </section>
    </>
}