import React from 'react'
import './Sidebar.css';


function Sidebar() {
    return (
        <div className="nav-bar">
        <div className="logo-img">
        <h1 className="logo">
        <a className="logo__link" href="/">
        <img src="//static.tournamentsoftware.com/Content/images/themes/tournamentsoftware/logo.svg?v=20190212130100" id="logo--desktop" alt="Tournamentsoftware.com"></img>
        <span className="logo__name">Tournamentsoftware.com</span>
        </a>
        </h1>
        </div>
        <div className="sidebar">
        <ul>
          <li className="text-list">
              <a href="#" className="sidebar_link">
                  <span class="icon"><i class="glyphicon glyphicon-home"></i></span>
                  <span class="title">Home</span>
               </a>
            </li>   
          <li className="text-list">
              <a href="#"  className="sidebar_link">
                  <span class="icon"><i class="fa fa-shield" aria-hidden="true"></i></span>
                  <span class="title">Tournaments</span>
               </a>
           </li>
           <li className="text-list">
              <a href="#" className="sidebar_link">
                  <span class="icon"><i class="fa fa-trophy"></i></span>
                  <span class="title">Leagues</span>
               </a>
           </li>
           <li className="text-list">
              <a href="#" className="sidebar_link"  >
                  <span class="icon"><i class="glyphicon glyphicon-flag"></i></span>
                  <span class="title">Clubs</span>
               </a>
           </li>
           <li className="text-list">
              <a href="#"  className="sidebar_link">
                  <span class="icon"><i class="fa fa-group"></i></span>
                  <span class="title">Players</span>
               </a>
           </li>
           <li className="text-list">
              <a href="#"  className="sidebar_link">
                  <span class="icon"><i class="fa fa-line-chart"></i></span>
                  <span class="title">Ranking</span>
               </a>
           </li>
           <li className="text-list">
              <a href="#"  className="sidebar_link">
                 <span class="icon"><i class="fa fa-rss"></i></span>
                  <span class="title">LiveScore</span>
               </a>
           </li>
        </ul>
        </div>
        </div>
        
        );
}

export default Sidebar