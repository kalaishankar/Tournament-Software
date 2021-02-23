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
          <p className="title">Tournaments</p>
          <p className="button">
          <a role="button" href="" className="btn-link">TOURNAMENTS</a>
          <a role="button" href=""class="btn-link1">LEAGUES</a>
          </p>
          </div>
          <div className="tab-box">
          <ul className="nav nav-tabs">
          <li className="active">
              <a data-toggle="tab" href="#recent" className = {toggleState === 1 ? "tab-data" : "tab"} onClick = {() => toggleTab(1)}>Recent</a>
          </li>
          <li>
              <a data-toggle="tab" href="#thisweek" className = {toggleState === 2 ? "tab-data" : "tab"} onClick = {() => toggleTab(2)}>This Week</a>
          </li>
          <li>
              <a data-toggle="tab" href="#upcoming" className = {toggleState === 3 ? "tab-data" : "tab"} onClick = {() => toggleTab(3)}>Upcoming</a>
          </li>
          <li>
              <a className ="dropdown-toggle" data-toggle="dropdown"  href="#more" className = {toggleState === 4 ? "tab-data" : "tab"} onClick = {() => toggleTab(4)}>More <span class="caret"></span></a>
          <ul className="dropdown-menu">
          <li>
              <a href="#">More visited</a>
          </li>                    
          </ul>
          </li>
          </ul>
          
          <div className="content-box1">
          <div className= {toggleState === 2 ? "tab-content2" : "content"}>
           <ul className="ullist-items">
         <li className="list-items">
         <div className="image-1">
         <a href="/sport/tournament?id=155AF153-93F7-4F25-93E8-74514B474468" className="media__img"><img src="//content.tournamentsoftware.com/images/club/event-no-photo.svg" class="media__img-element" alt="Smashville Outdoor Winter  Pickleball Championships 2021"></img></a>
         </div>
         <div Classname="link-box">
         <a href="/sport/tournament?id=155AF153-93F7-4F25-93E8-74514B474468" title="Smashville Outdoor Winter  Pickleball Championships 2021" class="media__link">
         <span className="nav-link">Smashville Outdoor Winter Pickleball Championships 2021</span>            </a>
         </div>
         </li>
         </ul>
         </div>
         </div>
         </div>
         </div>
        );
}


export default Tab