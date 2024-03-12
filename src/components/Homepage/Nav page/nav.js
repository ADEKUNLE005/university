import React from "react";
import { useState } from "react";
// import { withRouter } from "react-router-dom";
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import Admin from "../../../pages/Admin";

function Nav() {
  return (
    <div className="nav-container">
      <ShowNav />
      <div className="nav-box">
        <div className="nav-inner1">
          <div className="border">
            <div class="col-11 col-sm-9 col-md-5 col-lg-4 col-xxl-5 my-0 py-5 margin-alignment-left">
              <div class="ua-group">
                <div class="my-container ratio ratio-1x1 clipped-video-bg">
                  <video
                    autoplay="autoplay"
                    class="h-100"
                    height="100%"
                    loop="loop"
                    muted="muted"
                    playsinline=""
                    poster="https://www.ualberta.ca/homepage-archive/media-library/2023/02-february/46005-black-history-month-ua-web-still-f-1.jpg"
                    preload="auto"
                    width="100%"
                  >
                    <source
                      src="../../../../images/uni-vid.mp4"
                      type="video/mp4"
                    />
                  </video>{" "}
                  <svg id="clip-mask-svg" viewBox="0 0 1 1">
                    {" "}
                    <defs>
                      {" "}
                      <clipPath
                        clipPathUnits="objectBoundingBox"
                        id="video-clip-mask"
                      >
                        {" "}
                        <path d="M.39.62H.61L.5.28ZM.61,0,1,1H.72L.66.8H.34L.28,1H0L.39,0Z"></path>{" "}
                      </clipPath>{" "}
                    </defs>{" "}
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="ua-u-svg"
                  viewBox="0 0 100 100"
                >
                  {" "}
                  <defs></defs>{" "}
                  <g data-name="Layer 2" id="Layer_2">
                    {" "}
                    <g data-name="Layer 1" id="Layer_1-2">
                      {" "}
                      <path
                      //   class="A-clip-mask-path"
                      //   d="M.39.62H.61L.5.28ZM.61,0,1,1H.72L.66.8H.34L.28,1H0L.39,0Z"
                      //   transform="scale(100)"
                      ></path>{" "}
                      <path
                        class="cls-2"
                        d="M90.37.75v64.7a.66.66,0,0,1,0,.14c0,.06,0,.12,0,.19,0,1.06-.08,2.11-.17,3.12l0,.47a34.85,34.85,0,0,1-4.37,14.2,29.86,29.86,0,0,1-13.21,12c-4.93,2.37-12.33,3.86-20.3,4.11l-1.12,0-1,0h-.32l-1,0-1.11,0c-7.86-.24-15.45-1.78-20.3-4.11a29.92,29.92,0,0,1-13.21-12,34.55,34.55,0,0,1-4.38-14.2l0-.47c-.09-1-.15-2.06-.17-3.11,0-.1,0-.2,0-.3a1.41,1.41,0,0,1,0-.2V.75H32.56V63.21c.27,10.37,6.79,16.6,17.45,16.68,10.65-.07,17.17-6.3,17.43-16.69V.75H90.37m.5-.5H66.94v63C66.67,73.93,59.68,79.33,50,79.39S33.34,73.93,33.06,63.2V.25H9.14v65c0,.17,0,.33,0,.5,0,1.07.08,2.12.17,3.16l0,.46a34.83,34.83,0,0,0,4.45,14.41A30.31,30.31,0,0,0,27.23,96.05c5.32,2.56,13.13,3.93,20.5,4.16l1.12,0,1,0h.33l1,0,1.12,0c7.37-.23,15.18-1.6,20.5-4.16A30.23,30.23,0,0,0,86.2,83.82a35.27,35.27,0,0,0,4.44-14.41l0-.46c.09-1,.15-2.09.17-3.16,0-.12,0-.23,0-.34V.25Z"
                        transform="translate(0 -0.25)"
                      ></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-inner2">
          <p className="nav-p5">HONURING BLACK HISTORY MONTH</p>
          <p className="nav-p6">
            black history month is a time to honor , celebrate and learn abot
            the achvements and experiences of black canadians and black
            newcomers to canada{" "}
          </p>
          <button className="nav-btn">learn more</button>
        </div>
      </div>
      <div className="nav-box2">
        <p className="nav-p7">Study at the U of A</p>
        <p className="nav-p8">
          We are a top canadian university and one of the top 100 in the world.
          Find out what makes our student experience so rich, meaninful and
          life-changing. <Link>Explore our digital viewbook</Link>
        </p>
      </div>
    </div>
  );
}

export default Nav;

export function ShowNav() {
  const [showNavP2lbox, setShowNavP2lbox] = useState(false);

  const handleMouseOverCapture = () => {
    setShowNavP2lbox(true);
  };

  const handleMouseLeave = () => {
    setShowNavP2lbox(false);
  };
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <>
      <div className="nav-main">
        <div className="nav-innermain">
          <div className="nav-p-con">
            <div className="nav-p1" onClick={handleClick}>
              UNIVERSITY OF ATHLANTIS
            </div>
            <div
              className="nav-p2-box"
              onMouseOverCapture={handleMouseOverCapture}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={"/admin"}
                className={`nav-admin-link `}
              >
                {" "}
                <div
                  className={`nav-p2 ${Admin ? "show" : ""}`}
                  // onClick={navigate("/admin")}
                >
                  addmission + programs
                </div>
              </Link>
              {showNavP2lbox && (
                <div className={`nav-p2lbox ${showNavP2lbox ? "show" : ""}`}>
                  <ul className="ul-box">
                    <li className="l-p1">UNDERGRADUATE</li>
                    <li className="l-p2">programs</li>
                    <li className="l-p2">Admission Requirements</li>
                    <li className="l-p2">Tuition + scholarsghips</li>
                    <li className="l-p2">Deadlines</li>
                    <li className="l-p2">apply now</li>
                  </ul>
                  <ul className="ul-box">
                    <li className="l-p1">GRADUATE</li>
                    <li className="l-p2">programs</li>
                    <li className="l-p2">Tuition and Cost</li>
                    <li className="l-p2">deadlines</li>
                    <li className="l-p2">apply now</li>
                  </ul>
                  <ul className="ul-box">
                    <li className="l-p1">CONTINUING EDUCATION</li>
                    <li className="l-p2">Courses</li>
                    <li className="l-p2">programs</li>
                    <li className="l-p2">organized training</li>
                    <li className="l-p2">funding assistance</li>
                  </ul>

                  <ul className="ul-box2">
                    <li className="l-p1">INTERNATIONAL RECRUITMENT</li>
                    <li className="l-p1">MORE STUDY OPTIONS</li>
                    <li className="l-p2">Online learning</li>
                    <li className="l-p2">online on demand courses</li>
                    <li className="l-p2">English language school</li>
                    <li className="l-p2">open studies</li>
                    <li className="l-p2">inclusive education</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default withRouter(Nav);
