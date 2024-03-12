import React from "react";
import "./head.css";
import Nav, { ShowNav } from "../../Homepage/Nav page/nav";
function Head() {
  return (
    <div className="head-main">
      <ShowNav />
      <div className="head-imgbox">
        <h1 class="head-para">Admissions + Programs</h1>
        <img
          alt="UA Admissions and Programs"
          class="head-img"
          height="162"
          src="https://www.ualberta.ca/media-library/admissions/ua_91_admissions.png"
          width="144"
        ></img>
      </div>
      <div className="head-box2">
        <div className="head2-inner1">
          <p>PROGRAM SEARCH</p>
          <div className="head-p2">
            Search from more than 400 diverse programs. Find your fit at the
            University of Alberta.
          </div>
        </div>
        <div className="head2-inner2">
          <input
            id="programSearch"
            placeholder="Search for a Program"
            type="text"
          />
          <div className="wrap-btn">
            <button className=" btn-view" id="programSearch-undergradButton">
              SEARCH UNDERGRADUATE PROGRAMS
            </button>
            <button className=" btn-view" id="programSearch-gradButton">
              SEARCH GRADUATE PROGRAMS
            </button>
            <button className="btn-view " id="programSearch-conedButton">
              SEARCH Continuing Education
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;
