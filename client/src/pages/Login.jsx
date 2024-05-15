import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import {  toast } from 'react-toastify';


const URL=`${window.location.origin}/api/login`;
export const Login = () => {
  const [user, setUser] = useState({
  
    email: "",

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
    
  };
const navigate= useNavigate();
const {storeTokenInLS}=useAuth();
  // handle form on submit
  const handleSubmit = async(e) => {
    e.preventDefault();
    if ( !user.email  ||!user.password) {
      toast.error("Enter your registered email and password");
      return;
    }
   
    console.log(user);
    try {
      
     const response= await fetch(URL,{
      method:"POST",
      headers:{ 
        "Content-Type":"application/json",},
      body:JSON.stringify(user),
    });
    console.log("login form",response);
    if(response.ok){
      toast.success("Login successfull");
      const res_data=await  response.json();
      console.log("response from server",res_data);
      storeTokenInLS(res_data.token);
      //localStorage.setItem("token",res_data);
      
      setUser({email:"",password:""});
      navigate("/");
    }
    else{
      toast.error("Invalid Credentials");
    }

  } catch (error) {
      console.log("login",error);
  }
    
  };



  return (
    <>
      <section>
        <main>
          <div className="section-contact">
          <div className="contact-content container">
          <h1 className="main-heading">Login</h1>
        </div>
            <div className="container grid grid-two-cols">
              <div className="contact-img">
                <img
                  src="/images/login.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="400"
                />
              </div>
              {/* our main registration code  */}
              <div className="section-form">
                <form onSubmit={handleSubmit}>
                  
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
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />                  
              <div>
                <button type="submit">Login</button>
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