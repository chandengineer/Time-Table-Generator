import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import {  toast } from 'react-toastify';

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;


    setUser({
      ...user,
      [name]: value,
    });
    if (name === "username" && !/^[a-zA-Z]+$/.test(value)) {
      toast.error("Username should contain only letters");
      return;
    }
    if (user.phone.length>10){
      toast.error("phone number must be of digits ");
      return;
    }
  };
const navigate= useNavigate();
const {storeTokenInLS}=useAuth();
  // handle form on submit
  const URL=`${window.location.origin}/api/register`;
  const handleSubmit =async (e) => {
    e.preventDefault();
    if (!user.username || !user.email || !user.phone ||!user.password) {
      toast.error("All filds are Compulsory");
      return;
    }
    if (!user.email.endsWith("@gmail.com")) {
      toast.error("Please enter a valid Gmail address");
      return;
    }
    
    console.log(user);
    try {
      const response=await fetch(URL,{
      method:"POST",
      headers :{
        "Content-Type":"application/json",
            },
            body:JSON.stringify(user),
    });
    console.log(response);
    if(response.ok){
      toast.success("Registration successfull");
      const res_data= await response.json();
      console.log("response from server",res_data);
      //localStorage.setItem("token",res_data);
      storeTokenInLS(res_data.token);
     
      setUser({username:"",email:"",phone:"",password:""});
      navigate("/");
        }
    
      
    } catch (error) {
      console.log("register",error);
    }
    
  };



  return (
    <>
      <section>
        <main>
          <div className="section-contact">
          <div className="contact-content container">
          <h1 className="main-heading"> Registration</h1>
           </div>
            <div className="container grid grid-two-cols">
              <div className="contact-img">
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="400"
                />
              </div>
              {/* our main registration code  */}
              <div className="section-form">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>               
              <div>
                <button type="submit">Register</button>
              </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};