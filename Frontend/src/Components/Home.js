import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import Footer from "./Footer"
import { FaBroadcastTower, FaRandom, FaComments } from "react-icons/fa";

// treading post

const post = [
  {
    category: "#General",
    timeAgo: "11 hours ago",
    title: "GUYS I MADE 15K + ZRC IN ONE DAYS",
    description: "Ik it's a small amount for you guys tho",
    author: { name: "INZO-- mallu", badge: "ANGELFISH" },
    avatar: "🟣", // Replace with an actual image URL if needed
    comments: 139,
  },
  {
    category: "#General",
    timeAgo: "10 hours ago",
    title: "🌟 Are 50% of Anime Fans Really Introverts? 🤔",
    description:
      "Why do so many anime fans prefer staying at home instead of going out? Is it because the outside world feels boring...",
    author: { name: "TOBI" },
    avatar: "🦊",
    comments: 85,
  },
  {
    category: "#General",
    timeAgo: "9 hours ago",
    title: "I AM SELLING AN ELF SLAVE ಠ_ಠ",
    description: "Let's start the bid ....... Lemme start 10$",
    author: { name: "Anonymous" },
    avatar: "⚫",
    comments: 77,
  },
];










// anime girl
const posts = [
  {
    username: "Uchiha Zoro...",
    rank: "STARFISH",
    time: "2 minutes ago",
    text: "Mmmm",
    category: "Throne of Seal 2nd Season",
    avatar: "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar-05.png",
  },
  {
    username: "Foxy",
    rank: "ANGELFISH",
    time: "2 minutes ago",
    text: "Bro the guy on the video said to track down  😆✌️.",
    category: "Demon Lord 2099",
    avatar: "https://cdn.noitatnemucod.net/avatar/100x100/spy_family/06.png",
  },
  {
    username: "Uchiha Zoro...",
    rank: "STARFISH",
    time: "2 minutes ago",
    text: "Done ✅",
    category: "Throne of Seal 2nd Season",
    avatar: "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar-05.png",
  },
  {
    username: "imspicyice",
    time: "2 minutes ago",
    text: "nvm uryu is getting character development",
    category: "Bleach",
    avatar: "https://cdn.noitatnemucod.net/avatar/100x100/conan/9.png",
  },
];



const PostCard = ({ post }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl text-white w-64 shadow-lg">
      <div className="flex items-center mb-2">
        <img src={post.avatar} alt="avatar" className="w-10 h-10 rounded-full mr-3" />
        <div>
          <p className="font-bold text-yellow-400">{post.username}</p>
          {post.rank && <p className="text-sm text-gray-400">{post.rank} - {post.time}</p>}
        </div>
      </div>
      <p className="mb-2">{post.text}</p>
      <p className="text-pink-400 text-sm flex items-center">
        📄 {post.category}
      </p>
    </div>
  );
};


  // popular
const animeData = {
  "Top Airing": [
    { title: "One Piece", cc: 1122, mic: 1108, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg" },
    { title: "Solo Leveling    :", cc: 6, mic: 4, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/65f92e6e315a931ef872da4b312442b8.jpg" },
    { title: "Shangri-La Frontier ", cc: 18, mic: 15, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/0fc66f9879a3a4a15408c325e1677e17.jpg" },
    { title: "Sakamoto Days", cc: 6, mic: 6, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/2bbe7ece956bbefc6f385a7a447c182c.jpg" },
    { title: "Dragon Ball Daima", cc: 17, mic: 5, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/2cbe94bcbf18f0f3c205325d4e234d16.jpg" }
  ],
  "Most Popular": [
    { title: "One Piece", cc: 1122, mic: 1108, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg" },
    { title: "Naruto: Shippuden", cc: 500, mic: 500, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9cbcf87f54194742e7686119089478f8.jpg" },
    { title: "Bleach", cc: 366, mic: 366, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bd5ae1d387a59c5abcf5e1a6a616728c.jpg" },
    { title: "Black Clover", cc: 170, mic: 170, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/f58b0204c20ae3310f65ae7b8cb9987e.jpg" },
    { title: "Jujutsu Kaisen 2nd Season", cc: 23, mic: 23, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b51f863b05f30576cf9d85fa9b911bb5.png" }
  ],
  "Most Favorite": [
    { title: "One Piece", cc: 1122, mic: 1108, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg" },
    { title: "Naruto: Shippuden", cc: 500, mic: 500, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b3da1326e07269ddd8d73475c5dabf2c.jpg" },
    { title: "Bleach", cc: 366, mic: 366, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/82402f796b7d84d7071ab1e03ff7747a.jpg" },
    { title: "Black Clover", cc: 170, mic: 170, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/db2f3ce7b9cab7fdc160b005bffb899a.png" },
    { title: "Jujutsu Kaisen 2nd Season", cc: 23, mic: 23, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/f58b0204c20ae3310f65ae7b8cb9987e.jpg" }
  ],
  "Latest Completed": [
    { title: "One Piece", cc: 1122, mic: 1108, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/712f1651b5c455687cc23972fe67796b.jpg" },
    { title: "Naruto: Shippuden", cc: 500, mic: 500, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/8ed3a4df2e8f22be9916959c96e5e3e2.jpg" },
    { title: "Bleach", cc: 366, mic: 366, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/8bbe3d0785392e3ca5b179e0d281e434.jpg" },
    { title: "Black Clover", cc: 170, mic: 170, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/367b656aca089dcdde4d739120dd3a65.jpg" },
    { title: "Jujutsu Kaisen 2nd Season", cc: 23, mic: 23, type: "TV", image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/54a508b91dfb45cf97343263d3d282c3.jpg" }
  ]
};





const Home = () => {


  const [dataa, setdata] = useState([]);

  useEffect(() => {
    const abc = async () => {
      await fetch("https://newmoviewproject.onrender.com/movie", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then((response) => response.json())
        .then((data) => {
          setdata(data)


        }).catch((error) => {
          console.timeLog("error", error)
        })
    }
    abc()


  }, [])








  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideRef = useRef(null);
  const transitionTimeoutRef = useRef(null);


  const items = [
    {
      img: "https://i.pinimg.com/736x/c2/99/69/c2996982155e90f6e1817552257c2ba9.jpg",
      author: "#2 Sportlight",
      title: "Jujutsu Kaisen",
      topic: " ",
      description: "HiAnime is the best site to watch Jujutsu Kaisen 2nd Season SUB online, or you can even watch Jujutsu Kaisen 2nd Season DUB in HD quality. You can also find MAPPA anime on HiAnime website.",
    },
    {
      img: "https://i.pinimg.com/736x/fe/6c/e6/fe6ce65813e3b362ef13992c3f4c5001.jpg",
      author: "#4 Sportlight",
      title: "Death note",
      topic: "",
      description: "Death Note , which belonged to the shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name "
    },
    {
      img: "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/46d8e6d3fcd4a016ff5e90f0281eae76.jpg",
      author: "#1 Sportlight",
      title: "Demon Slayer",
      topic: "",
      description: "Adaptation of the Hashira Training Arc. The Hashira, the Demon Slayer Corps' highest ranking swordsmen and members. The Hashira Training",

    },
    {
      img: "	https://i.pinimg.com/736x/09/c8/af/09c8afd84adc0ce2ad37108deb06c860.jpg ",
      author: "#3 Sportlight",
      title: "One Piece",
      topic: "",
      description: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and execution of",

    },
  ];



  const timeRunning = 3000;
  const timeAutoNext = 7000;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    clearTimeout(autoSlideRef.current);
    autoSlideRef.current = setTimeout(nextSlide, timeAutoNext);
  };

  useEffect(() => {
    autoSlideRef.current = setTimeout(nextSlide, timeAutoNext);
    return () => clearTimeout(autoSlideRef.current);
  }, []);

  function logout() {
    
    localStorage.clear()
    
    window.location.reload()
  }

  return (
    <>
      <div className='Home'>
        <nav className="navbar1">
          <div className="nav-left">
            
            
            <h1 className="logo">
              <NavLink to="/Navbar"><img src="./logo.png" width={165} height={40}></img></NavLink>  
            </h1>
            {/* <input type="text" placeholder="Search anime..." className="search-bar" />
            <button className="filter-btn">Filter</button> */}
          </div>


         
            <div className="nav-link">
              <div className="flex ">
                <FaRandom size={20} />
              <NavLink to="https://play.google.com/store/games?hl=en"><span>Download</span></NavLink>  
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
           
          
          
            
            <button className="login-btn" onClick={logout}>Logout</button>
          </div>
          
        </nav>
      </div>

        {/* <slider></slider>  */}
       
        <div className='slider'>
        <div className="carousel">
          <div className="list">
            {items.map((item, index) => (
              <div
                key={index}
                className={`item ${index === currentIndex ? "active" : ""}`}
                style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
              >
                <img src={item.img} alt={item.title} />
                <div className="content">
                  <div className="author">{item.author}</div>
                  <div className="title">{item.title}</div>
                  <div className="topic">{item.topic}</div>
                  <div className="des">{item.description}</div>
                  <div className="buttons1">
                    <button><NavLink to="/Watch">Watch Now ▶</NavLink></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="arrows">
            <button onClick={prevSlide} id="prev">
              &lt;
            </button>
            <button onClick={nextSlide} id="next">
              &gt;
            </button>
          </div>
          <div className="thumbnail">
            {items.map((item, index) => (
              <div
                key={index}
                className={`item ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              >
                <img src={item.img} alt={item.title} />
                
              </div>
            ))}
          </div>
        </div>
      </div>

{/*       
      <crad section></crad> */}
      <h1 style={{ color:" #FFBADE"}}>Trending</h1>
      <div className="Movies" style={{ padding: "20px", textAlign: "center" }}>
       
        <div
          className="section1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          {[
            "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
            "https://cdn.noitatnemucod.net/thumbnail/300x400/100/8ed3a4df2e8f22be9916959c96e5e3e2.jpg",
            "https://cdn.noitatnemucod.net/thumbnail/300x400/100/a8b56a7589ff9edb6c86977c31e27a06.jpg",
            "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b8169841c47c010d664f293fcec036fb.jpg",
            "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b87a9e986e6e403ffddb520d24f5040a.jpg",
            "https://cdn.noitatnemucod.net/thumbnail/300x400/100/4c339e5c8107dbda621c214e351f7164.jpg",
          ].map((src, index) => (
            <div
              key={index}
              className="card"
              style={{
                width: "100%",
                maxWidth: "180px",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={src}
                className="card-img-top"
                alt="Movie"
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          ))}
        </div>
      </div>

{/*       
      <share></share> */}
      
        <div className='luffy'>
          <img src='https://i.pinimg.com/originals/b8/66/15/b866150a9b1a36ab2e58d87909df5bc3.gif'></img>
      </div>
      
      <div className='share'>
        <p><span style={{ color:" #FFBADE " ,fontWeight:"900"}}>Share HiAnime</span><br>
        </br>to your friends</p>
        
        <p>458K<br></br>
        share</p>
        <div className='btn-luffy'>
          <NavLink to="https://web.telegram.org/k/"><button style={{ color: "white", background: "#0088cc", border:"#0088cc" }}><img src='https://cdn-icons-png.flaticon.com/128/2504/2504941.png' width={"15px"}></img>Share</button></NavLink>   
          <NavLink to="https://x.com/?lang=en"><button style={{ color: "white", background: "black", border: "black",marginLeft:"40px" }} ><img src='https://cdn-icons-png.flaticon.com/128/5969/5969020.png' width={"15px"}></img>Tweet</button></NavLink>  
          <NavLink to="https://www.reddit.com/"><button style={{ color: "white", background: "orange", border: "#FF4500" ,marginLeft:"40px"}}><img src='https://cdn-icons-png.flaticon.com/128/3670/3670226.png' width={"15px"}></img>Share</button></NavLink> 
         
      
        </div>
      </div>
      

      {/* <anime section1> */}
      <div className='cutegirl'>
      <div className='girl'>
        <img src='https://hianime.to/images/discussion.png' ></img>
      </div>
 
        <div className="mm">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
        
      </div>

      {/* <most popular> */}

      <div className="top">
        {Object.entries(animeData).map(([category, animeList]) => (
          <div key={category} className="bg-gray-800 p-4 rounded-xl shadow-md">
            <h2 className="text-pink-400 text-xl font-bold mb-4">{category}</h2>
            <ul>
              {animeList.map((anime, index) => (
                <li key={index} className="mb-2 border-b border-gray-700 pb-2 flex items-center">
                  <NavLink to="/Watch">  <img src={anime.image} alt={anime.title} className="topmost" /></NavLink>
                  <div>
                    <span className="font-semibold">{anime.title}</span>
                    <div className="text-sm text-gray-400">
                      CC: {anime.cc} | Mic: {anime.mic} | 
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      
    
      {/* <card></card> */}



      

      <div>
        <div className='homecard'>
          <h1 style={{ color: "#FFBADE", marginLeft: "20px" }}>Latest Episode</h1>
        </div>


        <div className="movies-container">
          {dataa.length === 0 ? (
            <p>Loading movies...</p>
          ) : (
            dataa.map((movie, index) => (
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
                  <p className="movie-meta">Movie • {movie.moviemeta}m</p>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
      

      

      {/* <treading post></treading> */}

      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 style={{ color: " #FFBADE", marginLeft: "20px" }} className="text" >Trending Posts</h2>
          <NavLink style={{ color: "rgb(237, 8, 126)", marginLeft: "20px",fontSize:"20px" }} to="/Feedback" className="text-blue-400 text-sm hover:underline">
            View more &gt;
          </NavLink>
        </div>
        {post.map((post, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg mb-4">
            <div className="text-blue-400 text-sm">{post.category} • {post.timeAgo}</div>
            <h3 className="font-bold mt-1">{post.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{post.description}</p>
            <div className="flex items-center mt-2">
              <span className="mr-2">{post.avatar}</span>
              <span className="text-sm font-semibold">{post.author.name}</span>
              {post.author.badge && (
                <span className="ml-2 bg-gray-700 text-xs px-2 py-1 rounded-full">
                  {post.author.badge}
                </span>
              )}
              <div className="ml-auto text-gray-400 text-sm">💬 {post.comments}</div>
            </div>
          </div>
        ))}
      </div>
      
      
      
      
    




        <br></br><br></br>
      

<Footer></Footer>

    </>
  )
}

export default Home