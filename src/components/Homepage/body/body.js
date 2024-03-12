import React from "react";
import "./body.css";
import { Link } from "react-router-dom";
function Body() {
  return (
    <div className="body-main">
      <div className="body-box">
        <div className="ph-con">
          <PhotoCard
            para1={"Undergraduate Studies"}
            src={"../../../../images/Image10.png"}
          />
          <p className="b-p1">
            your journey strts here. choose from more than 200 programs options
            check the admission reqirements and apple online{" "}
          </p>
        </div>
        <div className="ph-con">
          <PhotoCard
            para1={"Graduate Studies"}
            src={"./../../../../images/imageb.png"}
          />
          <p className="b-p1">
            more than 500 graduate programs, 250 specializations and 300
            research areas - find out how to take your education to the next
            level{" "}
          </p>
        </div>
        <div className="ph-con">
          <PhotoCard
            para1={"Continuing Education"}
            src={"../../../../images/Image9.png"}
          />
          <p className="b-p1">
            Grow you career partime or online with our 200+ courses and 40+
            programs
          </p>
        </div>
      </div>
      <div className="btn-con">
        <div className="b-btnbox">
          <button className="b-btn1">Search programs</button>
          <button className="b-btn2">Begin Application</button>
        </div>
        <div className="b-btnbox">
          <button className="b-btn1">Search programs</button>
          <button className="b-btn2">Begin Application</button>
        </div>
        <div className="b-btnbox">
          <button className="b-btn1">Search programs</button>
          <button className="b-btn2">Seaarch Courses</button>
        </div>
      </div>
      <div className="body-box3">
        <div className="b3-inner1">
          <p className="b-p8">Indigenous Initiatives</p>
          <p className="b-p9">
            Explore this portal to learn about inspiring Indigenous-led work in
            the teaching, learning, research and community engagement spaces of
            the university.
          </p>
          <button className="b-btn3">Learn more</button>
        </div>
        <div className="b3-innerbox2">
          <img
            src="../../../../images/imagei.png"
            alt="uni"
            className="b-img1"
          />
        </div>
      </div>
      <div className="featured-main">
        <p className="f-p1">Featured Stories</p>
        <div className="fi=box">
          <div className="fi-inner1">
            <div className="fi-pbox">
              <button className="fi-btn">Society + culture</button>
              <Link className="fi-l">Nigeria Litmus Test For Democracy</Link>
            </div>
          </div>
          <div className="fi-inner2">
            <div className="fii-1">
              <div className="fi-pbox">
                <button className="fi-btn">Research</button>
                <Link className="fi-l">Inspired By Women's Resistance</Link>
              </div>
            </div>
            <div className="fii-2">
              <div className="fi-pbox">
                <button className="fi-btn">Society + culture</button>
                <Link className="fi-l">Reclaiming BBlack History Month</Link>
              </div>
            </div>
          </div>
          <button className="f-btn2">All News</button>
        </div>
      </div>
    </div>
  );
}

export function PhotoCard({ para1, src }) {
  return (
    <div className="ph-main">
      <img src={src} alt="" className="img" />
      <div className="ph-c">{para1}</div>
    </div>
  );
}

export default Body;
