
import { NavLink,Outlet } from "react-router-dom";

export const Admin=()=>{
return (
    <>
    <header>
     <div className="container">
        <nav>
            <ul>
            <li>
             <NavLink to="/admin/faculty">ADD_FACULTY</NavLink>
             </li>
              <li>
                <NavLink to="/admin/course">ADD_COURSES</NavLink>
                 </li>
                <li> <NavLink to="/admin/users">HISTORY</NavLink></li>
                <li><NavLink to="/admin">HOME</NavLink></li>
            </ul>
        </nav>        
    </div> 
    </header>
    <Outlet/>
        <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
               
                <h1>Welcome to Admin Panel</h1>
                <p>
                Empowering organization with our sophisticated Admin Panel,
                 a centralized hub for seamless management and control. At KLE TECH,
                  we offer a comprehensive suite of administrative tools designed to streamline operations,
                   enhance efficiency, and provide unparalleled insights.
                    From user management to data administration, our Admin Panel is crafted to meet the dynamic demands of your organization, ensuring a robust and user-friendly experience. 
                </p>
                <div className="btn btn-group">
                <NavLink to="/admin/faculty">
                    <button className="btn">ADD_FACULTY</button>
                    </NavLink> 
                    <NavLink to="/admin/course">
                    <button className="btn secondary-btn">ADD_COURSES</button>
                    </NavLink>
                </div>
              </div>
  
              {/* hero images  */}
              <div className="hero-image">
                <img
                  src="/images/home.png"
                  alt="coding together"
                  width="400"
                  height="500"
                />
              </div>
            </div>
          </section>
        </main>
  
          
    </>
);
};