import { useState } from "react";
//import { useAuth } from "../store/auth";
//this is add coourse page
import {  toast } from 'react-toastify';
export const Contact = () => {
  const [contact, setContact] = useState({
   course_code:"",
   course_name:"",
   credits:""
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

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log(contact);
    try {
      const response= await fetch( `${window.location.origin}/api/course`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(contact),

      });
      if(response.ok){
        setContact({course_code:"",
        course_name:"",
        credits:""});
        const res_data= await response.json();
      console.log("response from server",res_data);
      toast.success("Course added successfully");
      }
    } catch (error) {
      toast.error("course failed to add ");
    }
  };


  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading"><u>Courses</u></h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/coursenew.png" width="350px" height="300px" alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="course_code">course_code</label>
                <input
                  type="text"
                  name="course_code"
                  id="course_code"
                  autoComplete="off"
                  value={contact.course_code}
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
                  value={contact.course_name}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
              <label htmlFor="credits">credits</label>
                <input
                  type="number"
                  name="credits"
                  id="credits"
                  autoComplete="off"
                  value={contact.credits}
                  onChange={handleInput}
                  required
                />
                
              </div>

              <div>
                <button type="submit">Add Course</button>
              </div>
            </form>
          </section>
        </div>
        </section>
        </>
  );
};
