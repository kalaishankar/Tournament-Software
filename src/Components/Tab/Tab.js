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
          <h2 className="title">Tournaments</h2>
          <p className="button">
          <a role="button" href="/find/tournament" className="btn-link">TOURNAMENTS</a>
          <a role="button" href="find/league" className="btn-link1">LEAGUES</a>
          </p>
          </div>
          <div className="tab-box">
              <ul>
              <li>Recent</li>
              <li>This Week</li>
              <li>Upcoming</li>   
              <li>More</li>
              </ul>
          </div>
          <div className="content-box"> 
          <ul className="ullist">
              <li className="list-item">
                  <div className="media">
                  <a href="/sport/tournament?id=DA0E5913-714E-4409-A11C-DEC0A95CBF9F" class="media__img">
                  <img src="//content.tournamentsoftware.com/images/club/9510347F-6137-4C2C-BE27-C22B956476F7.jpg" class="media__img-element" alt="JWS-Testturnier 1-2019 B-RLT NRW  U11-U19"></img>
                  </a>

                  </div>
              </li>
          </ul>
          </div> 

          
         </div>

        );
}


export default Tab