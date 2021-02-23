import React from 'react'
import './Sidebar.css';
import { Sidebardata } from "./Sidebardata";

function Sidebar() {
    return (
        <div className="sidebar">
          <ul>
        <li className="text-list"><span class="glyphicon glyphicon-home"></span> Home</li>
        <li className="text-list">Tournaments</li>
        <li className="text-list">Leagues</li>
        <li className="text-list">Clubs</li>
        <li className="text-list">Players</li>
        <li className="text-list">Ranking</li>
        <li className="text-list">LiveScore</li>
        </ul>
        </div>
        
        );
}

export default Sidebar