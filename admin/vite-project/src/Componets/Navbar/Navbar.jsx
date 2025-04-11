import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();




    const handleLogout = () => {
        localStorage.removeItem("adminToken"); // Remove admin token
        navigate("/adminlogin"); // Redirect to login page
        window.location.reload(); // Refresh page to reflect logout
    };

  return (
      <>
          <div className='navbar'>
              <div className='logo'>
                  
            <img
                  src={assets.logo} alt="" />
              </div>

              <div className='profile'>
                  
                  <img
                      src={assets.download} alt=""
                      onClick={() => setShowLogout(!showLogout)} // Toggle Logout Dropdown
                      style={{ cursor: "pointer", width: "50px", borderRadius: "50%" }} />
                  

                  {showLogout && (
                      <div className="logout-dropdown" onClick={handleLogout}>
                          Logout
                      </div>
                  )}


              </div>
      </div>
      </>
  )
}

export default Navbar



