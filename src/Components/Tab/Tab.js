import { useState } from "react";
import React from 'react'
import './Tab.css';


function Tab () {

        const [toggleState, setToggleState] = useState(1);
        const toggleTab = (index) => {
            setToggleState(index);
        }
    return (
          <div className="flex-box">
          <div className="header-text">
          <h2 className="head-title">Tournaments</h2>
          <p className="button-box">
          <a  href="/find/tournament" className="btn-link">TOURNAMENTS</a>
          <a  href="find/league" className="btn-link1">LEAGUES</a>
          </p>
          </div>
          <div className="tab-box">
              <ul className="tab-content">
              <li className={toggleState === 1 ? "link":""}
              onClick={() => toggleTab(1)}>
              <a href="#Tabrecent" className="link" >Recent</a></li>
              <li className={toggleState === 2 ? "link":""}
              onClick={() => toggleTab(2)}><a href="#Tabthisweek" className="link">This Week</a></li>
              <li className={toggleState === 3 ? "link":""}
              onClick={() => toggleTab(3)}><a href="#Tabupcoming" className="link">Upcoming</a></li>   
              <li className={toggleState === 4 ? "link":""}
              onClick={() => toggleTab(4)}><a href="#Tabmore" className="link">More</a><span class="glyphicon glyphicon-triangle-bottom"></span>
              <ul className="sub-menu">
                  <li className="menu1"><a href="#">Most Visited</a></li>
              </ul>
              </li>
              </ul>
          </div>
          <div className={toggleState===1 ? "content-box1":"box"}>

          </div>
          <div className={toggleState===2 ? "content-box2":"box"}> 
          <ul className="ullist">
              <li className="list-item">
                  <div className="media">
                  <div className="media-wrapper">
                  <a href="/sport/tournament?id=DA0E5913-714E-4409-A11C-DEC0A95CBF9F" class="media-img">
                  <img src="//content.tournamentsoftware.com/images/club/9510347F-6137-4C2C-BE27-C22B956476F7.jpg" className="media-img1" alt="JWS-Testturnier 1-2019 B-RLT NRW  U11-U19"></img>
                  </a>
                 <div className="content">
                  <h4 className="title">
                  <a href="/sport/tournament?id=DA0E5913-714E-4409-A11C-DEC0A95CBF9F" title="JWS-Testturnier 1-2019 B-RLT NRW  U11-U19" className="media-link">
                  <span class="nav-link__value">JWS-Testturnier 1-2019 B-RLT NRW  U11-U19</span>           
                  </a>
                  </h4> 
                  </div> 
                  </div>
                  </div>  
              </li>
          </ul>
          </div> 
          <div className={toggleState===3 ? "content-box3":"box"}>

          </div>
          <div className={toggleState===4 ? "content-box4":"box"}>

          </div>
          </div>

        );
}


export default Tab