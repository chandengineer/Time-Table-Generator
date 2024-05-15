
import { NavLink,Outlet } from "react-router-dom";

export const User=()=>{
return (
    <>
    <header>
     <div className="container">
        <nav>
            <ul>
            <li>
             <NavLink to="/user/prefer">ADD_PREFERENCES</NavLink>
             </li>
                {/* <li> <NavLink to="/user/users">HISTORY</NavLink></li> */}
                <li><NavLink to="/user">HOME</NavLink></li>
            </ul>
        </nav>        
    </div> 
    </header>
    <Outlet/>
    <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
               
                <h1>Welcome to Faculty Panel</h1>
                <p>
                Experience a user-centric revolution with our User Panel,
                 meticulously crafted to enhance your interaction and
                  control within our platform. At KLE TECH, 
                  we prioritize your experience, offering an
                   intuitive interface and personalized features
                    that cater to your specific needs. 
                    Seamlessly navigate through functionalities, manage preferences,
                     and access personalized services with ease
                </p>
                <div className="btn btn-group">
                <NavLink to="/user/prefer">
                    <button className="btn">ADD_PREFERENCES</button>
                    </NavLink> 
                    {/* <NavLink to="/user/users">
                    <button className="btn secondary-btn">HISTORY</button>
                    </NavLink> */}
                </div>
              </div>
  
              {/* hero images  */}
              <div className="hero-image">
                <img
                  src="/images/info.png"
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