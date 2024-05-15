import { useState } from "react";
//import { useAuth } from "../store/auth";
//this is add coourse page
import {  toast } from 'react-toastify';
export const Service = () => {
  const [faculty, setFaculty] = useState({
   faculty_id:"",
   faculty_name:"",
   designation:"",
   branch:""
  });
  
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
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFaculty({
      ...faculty,
      [name]: value,
    });
    if (name === "faculty_name" && !/^[a-zA-Z]+$/.test(value)) {
      toast.error("name should contain only letters");
      return;
    }
    if (name === "designation" && !/^[a-zA-Z]+$/.test(value)) {
      toast.error("designation should contain only letters");
      return;
    }
    if (name === "branch" && !/^[a-zA-Z]+$/.test(value)) {
      toast.error("branch should contain only letters");
      return;
    }
   
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async(e) => {
    e.preventDefault();
    if ( !faculty.faculty_name || !faculty.designation ||!faculty.branch) {
      toast.error("All filds are Compulsory");
      return;
    }

    console.log(faculty);
    try {
      const response= await fetch( `${window.location.origin}/api/faculty`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(faculty),

      });
      if(response.ok){
        setFaculty({ faculty_id:"",
        faculty_name:"",
        designation:"",
        branch:""});
        const res_data= await response.json();
      console.log("response from server",res_data);
      toast.success("Faculty added successfully");
      }
    } catch (error) {
      toast.error("Faculty failed to add ");
    }
  };


  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading"><u>Faculty</u></h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/faculty.png" width="350px" height="500px" alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="faculty_id">faculty_id</label>
                <input
                  type="number"
                  name="faculty_id"
                  id="faculty_id"
                  autoComplete="off"
                  value={faculty.faculty_id}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="faculty_name">faculty_name</label>
                <input
                  type="text"
                  name="faculty_name"
                  id="faculty_name"
                  autoComplete="off"
                  value={faculty.faculty_name}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
              <label htmlFor="designation">designation</label>
                <input
                  type="text"
                  name="designation"
                  id="designation"
                  autoComplete="off"
                  value={faculty.designation}
                  onChange={handleInput}
                  required
                />
                
              </div>
              <div>
              <label htmlFor="branch">branch</label>
                <input
                  type="text"
                  name="branch"
                  id="branch"
                  autoComplete="off"
                  value={faculty.branch}
                  onChange={handleInput}
                  required
                />
                
              </div>

              <div>
                <button type="submit">Add Faculty</button>
              </div>
            </form>
          </section>
        </div>
        </section>
        </>
  );
};
