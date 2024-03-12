import React from "react";
import "./campus.css";
import { Link } from "react-router-dom";
function Campus() {
  return (
    <div className="cam-main">
      <div>
        <div class="c-col">
          <p class="c-p1">
            <span class="c-p2">Our Campuses</span> The University of Alberta is
            a busy place — 41,000 students at five separate campus locations.
            Learn about each of the unique campuses that make up the fifth
            largest university in Canada.
          </p>
          <a class="campus-visit" href="campus-life/our-campuses/index.html">
            Visit our Campuses
          </a>
        </div>
        <div className="c-photo">
          <img
            src="../../../../images/imagec.png"
            alt="img"
            className="c-img"
          />
          <img
            src="../../../../images/imaged.png"
            alt="img"
            className="c-img"
          />
          <img
            src="../../../../images/imageh.png"
            alt="img"
            className="c-img"
          />
        </div>
      </div>
      <div className="c-box2">
        <div className="cb2-in1"></div>
        <div className="cb2-in2">
          <p>
            The University of Alberta is located in one of the northernmost
            major cities in the world. Edmonton is a city with one million
            residents and one of Canada’s strongest local economies.
          </p>
          <p>
            Like the university, Edmonton is a place where people come together
            to build, create and change things for the better. It is a place
            where good ideas have a strong chance to become reality.
          </p>
        </div>
      </div>
      <div className="c-box3">
        <div className="cb3-in1">
          <p className="cb3-para">UPCOMING EVENTS</p>
          <div className="cb3-imgbox">
            <div className="cb3-inner">
              <img
                src="../../../../images/cbimg1.jpg"
                alt=""
                className="cb3-img"
              />
              <p className="cb3-p1"> FEB. 28 - 29</p>
              <Link className="cb3-Link">PAN-AFRICA SYMPOSIUM</Link>
            </div>
            <div className="cb3-inner">
              <img
                src="../../../../images/cbimg2.jpg"
                alt=""
                className="cb3-img"
              />
              <p className="cb3-p1"> march 6 , 12pm</p>

              <Link className="cb3-Link">
                Biomedical Engineering Distinguished Speaker Series
              </Link>
            </div>
            <div className="cb3-inner">
              <img
                src="../../../../images/cbimg3.jpg"
                alt=""
                className="cb3-img"
              />
              <p className="cb3-p1"> MARCH. 11 - 12</p>
              <Link className="cb3-Link">Pride Week</Link>
            </div>
          </div>
          <button className="cb3-btn">ALL EVENTS</button>
        </div>
        <div className="cb3-in2">
          <p className="cb3-para">WEATHER</p>
        </div>
      </div>
    </div>
  );
}

export default Campus;
