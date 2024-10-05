import React from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  
  const langue = useSelector((data) => data.langue);
  const home = useSelector((data) => data.home);
  return (
    <>
      <Header />
      <section className="home-section section active" id="home">
        <div className="effect-wrap">
          <div className="effect effect-1">
            <i className="fab fa-python" style={{ color: '#3776AB', opacity: 0.4 }}></i>
          </div>
          <div className="effect effect-2">
            <i className="fab fa-php" style={{ color: '#4F5D95', opacity: 0.4 }}></i>
          </div>
          <div className="effect effect-3">
            
          <i className="fab fa-js-square" style={{ color: 'orange', opacity: 0.4 }}></i>
          </div>

          <div className="effect effect-4">
            <i className="fab fa-react" style={{ color: 'blue', opacity: 0.4 }}></i>
          </div>
          <div className="effect effect-5">
            <div></div>
            <i className="fab fa-bootstrap" style={{ color: '#007BFF', opacity: 0.4 }}></i>
            <div></div>
          </div>
        </div>
        <div className="container">
          <div className="row full-screen align-items-center ">
            <div className="home-img">
              <div className="img-box inner-shadow">
                <img src="/img/bilal.jpg" className="outer-shadow" alt="" />
              </div>
            </div>
            <div className="home-text">
              <p>{home[langue][0]}</p>
              <h2>{home[langue][1]}</h2>
              <h1>{home[langue][2]}</h1>
              <Link
                to={"/about"}
                href="#about"
                className="link-item btn-1 outer-shadow hover-in-shadow"
              >
                {home[langue][3]}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
