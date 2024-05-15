import { useState } from "react";
//import { useAuth } from "../store/auth";
//this is add coourse page
import {  toast } from 'react-toastify';
export const Preferences = () => {
  const [faculty, setFaculty] = useState({
   faculty_id:"",
   faculty_name:"",
   course_code:"",
   course_name:"",
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
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log(faculty);
    try {
      const response= await fetch( `${window.location.origin}/api/user/prefer`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(faculty),

      });
      if(response.ok){
        setFaculty({ faculty_id:"",
        faculty_name:"",
        course_code:"",
        course_name:""});
        const res_data= await response.json();
      console.log("response from server",res_data);
      toast.success("Preferences added successfully");
      }
    } catch (error) {
      toast.error("Preferences failed to add ");
    }
  };


  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading"><u>Preferences</u></h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/prefer.png" width="350px" height="500px" alt="we are always ready to help" />
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
                <label htmlFor="course_code">course_code</label>
                <input
                  type="text"
                  name="course_code"
                  id="course_code"
                  autoComplete="off"
                  value={faculty.course_code}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="course_name">couse_name</label>
                <input
                  type="text"
                  name="course_name"
                  id="course_name"
                  autoComplete="off"
                  value={faculty.course_name}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <button type="submit">Add Preferences</button>
              </div>
            </form>
          </section>
        </div>
        </section>
        </>
  );
};
