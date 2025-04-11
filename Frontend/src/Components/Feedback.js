import React, { useState, useEffect } from 'react';
import "./Feedback.css"
import { NavLink } from 'react-router-dom';
import { FaBroadcastTower, FaRandom, FaComments } from "react-icons/fa";
import Footer from './Footer';

const Feedback = () => {

  // Load feedback from localStorage or initialize an empty array
  const [feedbackList, setFeedbackList] = useState(() => {
    const savedFeedback = localStorage.getItem('feedbackList');
    return savedFeedback ? JSON.parse(savedFeedback) : [];
  });

  const [formData, setFormData] = useState({ name: '', feedback: '' });

  useEffect(() => {
    localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
  }, [feedbackList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.feedback.trim()) {
      const newFeedback = {
        name: formData.name,
        feedback: formData.feedback,
        timestamp: new Date().toLocaleString(), // Adds timestamp
      };
      setFeedbackList([newFeedback, ...feedbackList]);
      setFormData({ name: '', feedback: '' }); // Reset form after submission
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <>
      
      <div className='Home'>
        <nav className="navbar1">
          <div className="nav-left">


            <h1 className="logo">
              <NavLink to="/Navbar"><img src="https://hianime.to/images/logo.png?v=0.1" width={165} height={40}></img></NavLink>
            </h1>
            {/* <input type="text" placeholder="Search anime..." className="search-bar" />
            <button className="filter-btn">Filter</button> */}
          </div>



          <div className="nav-link">
            <div className="flex ">
              <FaRandom size={20} />
              <NavLink to="https://hianime.to/app-download"><span>Download</span></NavLink>
            </div>
            <div className="flex">
              <FaComments size={20} />
              <NavLink to="/Feedback"> <span>Feedback</span></NavLink>
            </div>
          </div>


          <div className="nav-right">
            <a href="https://web.telegram.org/k/"><img src='https://cdn-icons-png.flaticon.com/128/2111/2111646.png' width={"40px"}></img></a>
            <a href="https://www.reddit.com/r/HiAnimeZone/?rdt=34049"><img src='https://cdn-icons-png.flaticon.com/128/3670/3670226.png' width={"40px"}></img></a>
            <a href="https://discord.com/invite/hianime"><img src='https://cdn-icons-png.flaticon.com/128/3670/3670157.png' width={"40px"}></img></a>
            <a href="https://x.com/?lang=en"><img src='https://cdn-icons-png.flaticon.com/128/3670/3670151.png' width={"40px"}></img></a>

            
            <NavLink to="/"><button className="login-btn">Login</button></NavLink>
          </div>

        </nav>
      </div>

    <div className="feedback-container">
      <h2>Submit Your Feedback</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          rows="4"
          value={formData.feedback}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      <div className="submitted-feedback">
        <h3>Recent Feedback</h3>
        <ul>
          {feedbackList.map((item, index) => (
            <li key={index}>
              <strong>{item.name}:</strong> {item.feedback}
              <br />
              <small>{item.timestamp}</small>
            </li>
          ))}
        </ul>
      </div>
      </div>
      <br></br> <br></br>
      <Footer></Footer>
    </>
    
  );
};

export default Feedback;


