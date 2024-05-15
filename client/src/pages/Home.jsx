import { NavLink } from "react-router-dom";
export const Home = () => {
    return (
      <>
        <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                
                <h1>Welcome to Time-Table Generator Tool </h1>
                <p>
                "Revolutionize your scheduling experience with our state-of-the-art timetable generator. 
                Seamlessly designed to harness the power of advanced algorithms, it effortlessly crafts efficient schedules by intelligently analyzing teacher workloads,
                 laboratory availability, and classroom assignments.
                  Say goodbye to manual planning hassles and embrace precision and convenience in optimizing your educational or organizational timetable with our cutting-edge solution."
                </p>
                <h1>Get Started Today</h1>
                <br></br><br></br>
                {/* <div className="btn btn-group">
                  <NavLink to="/register">
                    <button className="btn">start now</button>
                  </NavLink>
                </div> */}
              </div>
  
              {/* hero images  */}
              <div className="hero-image">
                <img
                  src="/images/time.png"
                  alt="coding together"
                  width="400"
                  height="500"
                />
              </div>
            </div>
          </section>
        </main>
  
        {/* 2nd section */}
        <section className="section-analytics">
            <div className="container grid grid-four-cols">
            <div className="div1">
    <h2>Efficient Scheduling</h2>
    <p>Revolutionize your time management with our advanced timetable generator, ensuring optimal utilization of resources.</p>
</div>
<div className="div1">
    <h2>100%</h2>
    <p>Automation</p>
    <p>Experience full automation in timetable creation, saving you valuable time and effort.</p>
</div>
<div className="div1">
    <h2>Seamless Integration</h2>
    <p>Integrate easily with existing systems for a smooth transition into our intuitive timetable management solution.</p>
</div>
<div className="div1">
    <h2>Customizable</h2>
    <p>Adapt the timetable generator to fit the unique needs of your educational institution or organization effortlessly.</p>
</div>

            </div>
        </section>

  
       
      </>
    );
  };