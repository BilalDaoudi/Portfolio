import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiDatabase2Line,
  RiReactjsLine,
  RiTerminalBoxLine,
  RiPhpFill,
} from "@remixicon/react";
//   import { FaLaravel, FaPhp, FaKotlin } from "react-icons/fa";
import {
  RiFacebookCircleFill,
  RiTwitterXLine,
  RiLinkedinFill,
  RiGithubLine,
  RiCircleFill,
  RiDownloadLine,
} from "@remixicon/react";
import profile from "../../assets/images/about/profile.png";
import partner1 from "../../assets/images/client-logos/partner1.png";
import partner2 from "../../assets/images/client-logos/partner2.png";
import partner3 from "../../assets/images/client-logos/partner3.png";
import partner4 from "../../assets/images/client-logos/partner4.png";
import partner5 from "../../assets/images/client-logos/partner5.png";
import SlideUp from "../../utlits/animations/slideUp";

import bilaldaoudi from "../../assets/images/client-logos/bilaldaoudi.jpg";

const Hero = () => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">
                <img src={bilaldaoudi} alt="About Me" />
                <h2>Daoudi Bilal</h2>
                <p>I am a Web Developper in Marocco.</p>
                <div className="about-social text-center">
                  <ul>
                    <li>
                      <Link to="https://www.facebook.com/profile.php?id=100008463370690">
                        <RiFacebookCircleFill size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://x.com/bilaldaoudi591">
                        <RiTwitterXLine size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/in/bilaldaoudi/">
                        <RiLinkedinFill size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://github.com/BilalDaoudi">
                        <RiGithubLine size={20} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">
                <p>Hello There!</p>
                <h2>
                  I’m Bilal Daoudi, a web developer specializing in Laravel,
                  React.js, and MySQL, crafting robust and scalable web
                  solutions.
                </h2>
                <div className="adress-field">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i>
                        <RiCircleFill size={14} />
                      </i>{" "}
                      Available for Freelancing
                    </li>
                  </ul>
                </div>
                <div className="hero-btns">
                  <Link to="/contact" className="theme-btn">
                    Download CV{" "}
                    <i>
                      <RiDownloadLine size={16} />
                    </i>{" "}
                  </Link>
                </div>
              </div>
            </SlideUp>
            <SlideUp>
              <div className="about-content-part-bottom">
                <h2>Languages & Technologies I Work With</h2>
                <div className="company-list">
                  <div className="scroller">
                    <div className="scroller__inner">
                      <Marquee>
                        <div className="icon" style={{
                            display: "inline-block",
                            margin: "0 35px", 
                          }}>
                          <RiHtml5Line
                            size={40}
                            color="#E34F26"
                            title="HTML5"
                          />
                        </div>
                        <div className="icon" style={{
                            display: "inline-block",
                            margin: "0 35px", 
                          }}>
                          <RiCss3Line size={40} color="#1572B6" title="CSS3" />
                        </div>
                        <div className="icon" style={{
                            display: "inline-block",
                            margin: "0 35px", 
                          }}>
                          <RiJavascriptLine
                            size={40}
                            color="#F7DF1E"
                            title="JavaScript"
                          />
                        </div>
                        <div className="icon" style={{
                            display: "inline-block",
                            margin: "0 35px", 
                          }}>
                          <RiPhpFill size={40} color="#777BB4" title="PHP" />
                        </div>
                        <div className="icon" style={{
                            display: "inline-block",
                            margin: "0 35px", 
                          }}>
                          <RiReactjsLine
                            size={40}
                            color="#61DAFB"
                            title="React.js"
                          />
                        </div>
                        <div className="icon" style={{
                            display: "inline-block",
                            margin: "0 35px", 
                          }}>
                          <RiDatabase2Line
                            size={40}
                            color="#4479A1"
                            title="MySQL"
                          />
                        </div>
                        <div className="icon" style={{
                            display: "inline-block",
                            margin: "0 35px", 
                          }}>
                          <RiTerminalBoxLine
                            size={40}
                            color="#fff"
                            title="Command Line"
                          />
                        </div>
                        {/* <img src={partner1} alt="" />
                        <img src={partner2} alt="" />
                        <img src={partner3} alt="" />
                        <img src={partner4} alt="" />
                        <img src={partner5} alt="" />
                        <img src={partner1} alt="" /> */}
                      </Marquee>
                    </div>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
