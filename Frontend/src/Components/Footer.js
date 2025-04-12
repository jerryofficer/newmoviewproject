import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
      <>
          <footer className="bg-gray-900 text-white py-6">
              <div className="text-center">
                  <h2 className="text-lg font-semibold"><NavLink to="/Navbar"><img src="./logo.png" width={165} height={40}></img></NavLink>  </h2>
                  <p className="text-sm text-gray-400">
                      Searching anime ordered by alphabet name A to Z.
                  </p>
              </div>
              <div className="container mx-auto text-center">
                  {/* Social Icons */}
                  <div className="flex justify-center space-x-4 mb-4">
                      <a href="#" className="text-gray-400 hover:text-white">
                          <img src='https://cdn-icons-png.flaticon.com/128/2111/2111646.png' width={"40px"}></img>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white">
                          <img src='https://cdn-icons-png.flaticon.com/128/3670/3670226.png' width={"40px"}></img>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white">
                          <img src='https://cdn-icons-png.flaticon.com/128/3670/3670157.png' width={"40px"}></img>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white">
                          <img src='https://cdn-icons-png.flaticon.com/128/3670/3670151.png' width={"40px"}></img>
                      </a>
                  </div>

                  {/* A-Z Navigation */}
                 

                  <div className="flex justify-center flex-wrap space-x-2">
                      {["All", "#", "0-9", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((letter) => (
                          <button
                              key={letter}
                              className="bg-dark-700 text-drak px-3 py-1 rounded hover:bg-gray-600 transition"
                          >
                              {letter}
                          </button>
                      ))}
                  </div>

                  {/* Disclaimer */}
                  <p className="text-gray-500 text-sm mt-4">
                      HiAnime does not store any files on our server, we only link to the
                      media which is hosted on 3rd party services.
                  </p>
                  <p className="text-gray-600 text-xs mt-2">
                      © HiAnime.to. All rights reserved.
                  </p>
              </div>
          </footer>


         

      </>
  )
}

export default Footer