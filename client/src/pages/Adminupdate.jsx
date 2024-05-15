import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const Adminupdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const params=useParams();
  console.log("params single user",params);

// const {user} =useAuth();
// const [userData, setUserData] = useState(true);
//  if (userData && user) {
//     setData({
//       username: user.username,
//       email: user.email,
//       message: "",
//     });
//     setUserData(false);
//   }
  // lets tackle our handleInput

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setData({
   ...data,
   [name]:value,
    });
  };

  // handle fomr getFormSubmissionInfo
 
//   const getsingleuserdata=async()=>{
//     try {
            
//         const response= await fetch(`http://localhost:5000/api/admin/users/${params.id}`,{
//             method:"GET",
//         });
//         const data=await response.json();
//         console.log(`users after delete  ${data}`);
//         setData(data);
//         // if(response.ok){
//         //     getallusersdata();
//         //     toast.success("User deleted successfully");
//         // }
//     }catch (error) {
//             console.log(error); 
//         }
//   };
  const handleSubmit = async(e) => {
    e.preventDefault();
try {
    const response=await fetch(`${window.location.origin}/api/admin/users/update/${params.id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
    }   
    );
    if(response.ok){
    toast.success("Updated Succefully");
    }
    else{
        toast.error("Failed to Update ");
    }
} catch (error) {
    console.log(error);
}
};

// useEffect(()=>{
//   getsingleuserdata();
// },[]);
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading"><u>Update user data</u></h1>
        </div>
   

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={data.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">phone</label>
                <input 
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={data.phone}
                  onChange={handleInput}
                  required

                />
              </div>

              <div>
                <button type="submit">Update</button>
              </div>
            </form>
          </section>
        
        </section>
        </>
  );
};
