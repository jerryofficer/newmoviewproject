import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaBroadcastTower, FaRandom, FaComments } from "react-icons/fa";
import { useState,useEffect } from 'react';

const TopAiring = () => {





  const [dataa, setdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const abc = async () => {
      await fetch("https://newmoviewproject.onrender.com/movie ", {
        method: "GET",
        headers: {
          "Content-Type":"application/json",
        }
      })
        .then((response) => response.json())
        .then((data) => {
          setdata(data)
          
        
        }).catch((error) => {
        console.timeLog("error",error)
      })
    }
    abc()


  }, [])
  
  //search

  const all = dataa.filter(movie =>
    movie.movieTitle.toLowerCase().includes(searchTerm.toLowerCase())
  )



  return (
  
    <>
      <div className='Home'>
        <nav className="navbar1">
          <div className="nav-left">


            <h1 className="logo">
              <NavLink to="/Navbar"><img src="https://hianime.to/images/logo.png?v=0.1" width={165} height={40}></img></NavLink>
            </h1>
            <input type="text" placeholder="Search anime..." className="search-bar"
              value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}/>
            <button className="filter-btn">Filter</button>
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
      {/*       
            <share></share> */}

      <div className='luffimg'>
      <div className='luffy1'>
        <img src='https://i.pinimg.com/originals/b8/66/15/b866150a9b1a36ab2e58d87909df5bc3.gif'></img>
      </div>

      <div className='Sharemm'>
        <p><span style={{ color: " #FFBADE ", fontWeight: "900" }}>Share HiAnime</span><br>
        </br>to your friends</p>

        <p>458K<br></br>
          share</p>
        <div className='btn-luffy'>
          <NavLink to="https://web.telegram.org/k/"><button style={{ color: "white", background: "#0088cc", border: "#0088cc", marginLeft: "40px" }}><img src='https://cdn-icons-png.flaticon.com/128/2504/2504941.png' width={"15px"}></img>Share</button></NavLink>
          <NavLink to="https://x.com/?lang=en"><button style={{ color: "white", background: "black", border: "black", marginLeft: "40px" }} ><img src='https://cdn-icons-png.flaticon.com/128/5969/5969020.png' width={"15px"}></img>Tweet</button></NavLink>
          <NavLink to="https://www.reddit.com/"><button style={{ color: "white", background: "orange", border: "#FF4500", marginLeft: "40px" }}><img src='https://cdn-icons-png.flaticon.com/128/3670/3670226.png' width={"15px"}></img>Share</button></NavLink>


        </div>
        </div>
      </div>




      

       <div className="movies-container">
        {all.length === 0 ? (
                <p>Loading movies...</p>
              ) : (
            all.map((movie, index) => (
                  <div className="movie-card" key={index}>
                    {/* Movie Poster */}
                    <div className="movie-poster">
                      <NavLink to="/Watch"><img src={movie.image} alt={movie.movieTitle} /></NavLink> 
                      <span className="badge age-restriction">18+</span>
                      <span className="badge cc">CC 1</span>
                    </div>
      
                    {/* Movie Details */}
                    <div className="movie-info">
                      <h3 className="movie-title">{movie.movieTitle}</h3>
                      <p className="movie-description">{movie.moviedescription}</p>
                      <p className="movie-meta">Movie • {movie.moviemeta}m</p>
                    </div>
                  </div>
                ))
              )}
            </div>
      


    
    </>
  )
}

export default TopAiring