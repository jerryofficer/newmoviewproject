import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import MostPopular from './Components/MostPopular';
import Movies from './Components/Movies';
import TvSeries from './Components/TvSeries';
import TopAiring from './Components/TopAiring'
import Signup from './Components/Signup'
import Lgin from './Components/Lgin';
import { Routes, Route } from 'react-router-dom';
import Feedback from './Components/Feedback';
import Result from './Components/Result';
import Footer from './Components/Footer';
import Watch from './Components/Watch';
import { useState } from 'react';






function App() {

  // const [feedback, setFeedback] = useState([]);
  // console.log(feedback)

  // const addfeedback = (feedback) => {
  //   setFeedback((prev) => [...prev, feedback]);
    
  // }

  return (
    <>
   
      {/* <Result feedback={feedback}/> */}
      <Routes>
        <Route path='/' element={<Lgin />}></Route>
        <Route path='/Navbar' element={<Navbar />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Movies' element={<Movies />}></Route>
        <Route path='/TvSeries' element={<TvSeries />}></Route>
        <Route path='/MostPopular' element={<MostPopular />}></Route>
        <Route path='/TopAiring' element={<TopAiring />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Watch' element={<Watch />}></Route>
        <Route path='/Feedback' element={<Feedback  />} />
        <Route path="/Result" element={<Result />} />
      
        
       
      
       
      </Routes>
    </>
  );
}

export default App;



