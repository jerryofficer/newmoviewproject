import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaBroadcastTower, FaRandom, FaComments } from "react-icons/fa";
import "./Watch.css"
import Footer from './Footer';

const Watch = () => {
  return (
    <>
    
      <div className='Home'>
        <nav className="navbar1">
          <div className="nav-left">


            <h1 className="logo">
              <NavLink to="/Navbar"><img src="https://hianime.to/images/logo.png?v=0.1" width={165} height={40}></img></NavLink>
            </h1>
            
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
      <br></br>

      

      {/* play video */}
        <div className='video-link'>
        <iframe
          width="1100"
          height="515"
          src="https://www.youtube.com/embed/OzozVJp_8zc?autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <div className='watchvideo'>
          <img src='https://i.pinimg.com/736x/5d/97/04/5d9704656e50b00cf8d4aaf83a76e1a9.jpg'></img>
          <h5>Demon Slayer: Kimetsu no Yaiba -To the</h5>
          <p> <br></br>Swordsmith Village- is a feature-length
            cut <br></br>of Episodes 10 and 11 of the Entertainment<br></br> District Arc along with the 
            extended Episode 1 <br></br>of the upcoming Swordsmith Village Arc</p><br></br>
          <p>HiAnime is the best site to watch Demon Slayer: <br></br>
            Kimetsu no Yaiba Swordsmith Village Arc SUB<br></br> online, or you can even watch Demon Slayer: <br></br>Kimetsu no Yaiba Swordsmith Village Arc DUB <br></br>in HD quality. You can also find ufotable<br></br>
            anime on HiAnime website</p>
     </div>


      </div>
      
      {/* luffy */}
       <div className='luffimgm'>
                    <div className='luffy1'>
                      <img src='https://i.pinimg.com/originals/b8/66/15/b866150a9b1a36ab2e58d87909df5bc3.gif'></img>
                  </div>
                  
                  <div className='Sharemm'>
                    <p><span style={{ color:" #FFBADE " ,fontWeight:"900"}}>Share HiAnime</span><br>
                    </br>to your friends</p>
                    
                    <p>458K<br></br>
                    share</p>
                    <div className='btn-luffy'>
                      <NavLink to="https://web.telegram.org/k/"><button style={{ color: "white", background: "#0088cc", border:"#0088cc" ,marginLeft:"40px"}}><img src='https://cdn-icons-png.flaticon.com/128/2504/2504941.png' width={"15px"}></img>Share</button></NavLink>   
                      <NavLink to="https://x.com/?lang=en"><button style={{ color: "white", background: "black", border: "black",marginLeft:"40px" }} ><img src='https://cdn-icons-png.flaticon.com/128/5969/5969020.png' width={"15px"}></img>Tweet</button></NavLink>  
                      <NavLink to="https://www.reddit.com/"><button style={{ color: "white", background: "orange", border: "#FF4500" ,marginLeft:"40px"}}><img src='https://cdn-icons-png.flaticon.com/128/3670/3670226.png' width={"15px"}></img>Share</button></NavLink> 
                     
                  
                    </div>
            </div>
            </div>

      <br></br><br></br><br></br>
      <br></br><br></br><br></br>
    
    <Footer></Footer>
    </>
  )
}

export default Watch