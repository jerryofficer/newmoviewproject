import React from "react";
import { NavLink } from "react-router-dom";
import { FaComment } from "react-icons/fa";

import { useEffect } from "react";

const Navbar = () => {
     





    return (
        <>
            {/* first page navbar */}
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/Navbar"></NavLink>
                        </li>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/Home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/Movies">Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/TvSeries">TV Series</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/MostPopular">Most Popular</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/TopAiring">Top Airing</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
            {/* first page 2 style */}
            

          

                    <div className="container1">
                    <div className="header">
                    <img src="./logo.png" width={165} height={40}></img><br></br>
                    {/* <input type="search" placeholder="Search anime..."></input>
                    <button style={{marginLeft:"10px",borderRadius:"10px"}}><img src="https://cdn-icons-png.flaticon.com/128/8669/8669664.png" width={"37px"} ></img></button> */}
                    <p>Top search:Solo leveling Season2:Aris.. Sakamoto Days,<br></br>
                        Solo leveling,one Piece,The Apothecary Diaries Se...<br></br>
                        Shangri-La Frontier,Shangri-La Frontier Season..<br></br>
                        Bogus Skill Fruitmaster...Frieren:Beyond Journey'sE...Blue Lock,..</p><br></br>
                    
                    <NavLink to="/Home"><button style={{ width: "200px", height: "50px", borderRadius: "10px", }}>Watch anime ▶ </button></NavLink>
                    
                </div>     
                
                <div className="jujustu"><img style={{ marginLeft: "30px" }} src="https://hianime.to/images/anw-min.webp?v=0.1" width={700}></img></div> 
     
     
             
    </div>

            
            {/* headling first page */}
            <div className="para">
            <div className="heading">
                <h3>
                    HiAnime.to - The best site to watch anime online for <br></br>Free</h3>
                    <p>Do you know that according to Google, the monthly search volume for anime related topics is up to<br></br> over 1 Billion times? Anime is famous worldwide and it is no wonder we've seen a sharp rise in the
                        <br></br> number of free anime streaming sites.<br></br><br></br>
                        Just like free online movie streaming sites, anime watching sites are not created equally, some are<br></br> better than the rest, so we've decided to build HiAnime.to to be one of the best free anime streaming
                        <br></br>site for all anime fans on the world.
                       
                    </p> <br></br><br></br>
                    <h3>1/ What is HiAnime.to?</h3>
                    <p>HiAnime.to is a free site to watch anime and you can even download subbed or dubbed anime in ultra <br></br>HD quality without any registration or payment. By having only one ads in all kinds, we are trying to <br></br>make it the safest site for free anime.</p>
                    <br></br><br></br>
                    <h3>2/ Is HiAnime.to safe?</h3>
                    <p>Yes we are, we do have only one Ads to cover the server cost and we keep scanning the ads 24/7 to<br></br> make sure all are clean, If you find any ads that is suspicious, please forward us the info and we will<br></br> remove it.</p>
                    <br></br><br></br>

                    <h3>3/ So what make HiAnime.to the best site to watch anime free online?</h3>
                    <p>Before building HiAnime.to, we've checked many other free anime sites, and learnt from them. We only <br></br>
                        keep the good things and remove all the bad things from all the competitors, to put it in our HiAnime<br></br>
                        website. Let's see how we're so confident about being the best site for anime streaming:</p>
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                    <p>© HiAnime.to. All rights reserved.</p>
            </div>
                

                <div className="Treding">
                    <h3>Trending Posts</h3>
                    
                    <div className="card border-primary mb-3 ms-6 bg-drak" style={{ maxWidth: "18rem" }}>
                        <h5 className="card-title">How do you feel about no. 7 ?</h5>
                            <div className="card-body text-drak">
                                <p className="card-text">
                                "It's not that bad of a number. Tho, I don't like the people who are into it. They're pretentious. For just a prime number it has all the societal and story telling weight attached.
                                </p>
                            </div>
                        </div>
                        <div className="card border-secondary mb-3" style={{ maxWidth: "18rem" }}>
                        <h5 className="card-title">F U Gege Akutami</h5>
                        <div className="card-body text-drak">
                                <p className="card-text">
                                I completed JJK manga and F U Gege🖕 for that shlte. As an abnormal😈 person, I love Sukuna so much. I absolutely adore his evilness and love the way he spreads terror among humans. F u Gege for ending him in a horrendous away like 💩. Even that other guy(spoiler) died cut in half🤡 horrendously. 1/10 deaths and not
                                </p>
                            </div>
                        </div>
                        <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
                        <h5 className="card-title">GUESS THE ANIME CHARCTER MID AND NO ITS NAME IS NOT DRAGON</h5>
                        <div className="card-body text-drak">
                                <p className="card-text">
                                ⠀⠀⠀⢀⣤⠆⠀⠀⢠⡞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡾⡇⠀⠀⠀⡿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠹⣆⠀⢠⠃⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡏⡏⠀⠘⡼⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                                </p>
                            </div>
                        </div>
                        <div className="card border-danger mb-3" style={{ maxWidth: "18rem" }}>
                        <h5 className="card-title">Danger card title</h5>
                        <div className="card-body text-drak">
                                <p className="card-text">
                                  Read title Rating will be based on Aizen sama's Prediction even this post is their doing.
                                </p>
                            </div>
                        </div>
                        
                        
                        
                   

                    
            </div>

     
            </div> 

        </>
    );
};

export default Navbar;
