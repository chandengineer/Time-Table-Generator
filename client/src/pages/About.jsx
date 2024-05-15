export const About = () => {
    return (
      <>
        <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                <p>Welcome to chand world</p>
                <h1>Why choose us ?</h1>
                <p>
                  Are you ready to take your business to the next level with
                  cutting-edge IT solutions? </p>
                  <p>Look no further! At Thapa Technical,
                  we specialize in providing innovative IT services and solutions
                  tailored to meet your unique needs.</p>
                  <div className="btn btn-group">
                  <a href="/contact">
                    <button className="btn">connect now</button>
                  </a>
                  <a href="/service">
                    <button className="btn secondary-btn">learn more</button>
                  </a>
                </div>
                
                
              </div>
  
              {/* hero images  */}
              <div className="hero-image">
                <img
                  src="/images/about.png"
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
                    <h2>50+</h2>
                    <p>Registered companies</p>
                </div>
                <div className="div1">
                    <h2>100,00</h2>
                    <p>Happy clients</p>
                </div>
                <div className="div1">
                    <h2>500+</h2>
                    <p>Well known developers</p>
                </div>
                <div className="div1">
                    <h2>24/7</h2>
                    <p>Services</p>
                </div>
            </div>
        </section>

  
       
      </>
    );
  };