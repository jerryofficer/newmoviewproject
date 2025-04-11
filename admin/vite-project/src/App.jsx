import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Componets/Navbar/Navbar';
import Sidebar from './Componets/Sidebar/Sidebar';
import List from './Pages/Add/List/List';
import Add from './Pages/Add/Add';
import User from './Pages/Add/User/User';
import AdminLogin from './Componets/Login/Adminlogin';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(!!localStorage.getItem("adminToken"));

  return (
    <>
      {isAdmin ? (
        <>
          <Navbar setIsAdmin={setIsAdmin} /> {/* Pass setIsAdmin for Logout */}
          <hr />
          <div className="app-content">
            <Sidebar />
            <Routes>
              <Route path='/add' element={<Add />} />
              <Route path='/list' element={<List />} />
              <Route path='/user' element={<User />} />
              <Route path='*' element={<Navigate to="/list" />} /> {/* Redirect unknown routes */}
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path='/admin-login' element={<AdminLogin setIsAdmin={setIsAdmin} />} /> {/* Fix route name */}
          <Route path='*' element={<Navigate to="/admin-login" />} />
        </Routes>
      )}
    </>
  );
};

export default App;
