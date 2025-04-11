import React from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'



const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="Sidebar-options">
      <NavLink to="/add" className="sidebar-option">
        <img src="https://cdn-icons-png.flaticon.com/128/14033/14033582.png"></img>
        <p>Add Items</p>
        </NavLink>
        
      <NavLink to="/list" className="sidebar-option">
        <img src="https://cdn-icons-png.flaticon.com/128/6998/6998796.png"></img>
        <p>List Items</p>
        </NavLink>
        
        <NavLink to="/user" className="sidebar-option">
          <img src="https://cdn-icons-png.flaticon.com/128/6998/6998796.png"></img>
          <p>User</p>
        </NavLink>




      </div>
      </div>
  )
}

export default Sidebar
