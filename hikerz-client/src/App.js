import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';

function App() {
  const [hikes, setHikes] = useState([]);
  const [hike, setHike] = useState();
  const [reviews, setReviews] = useState([])
  console.log("Starting up");

  const getHikes = async () => {
    try {
      const response = await api.get("/api/hikes");
      
      console.log(response.data);
      setHikes(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getHikeData = async (hikeId) => {
    try {
      const response = await api.get(`/api/hikes/${hikeId}`)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getHikes();
  }, []);
  

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home hikes={hikes}/>}></Route>
          <Route path="/Trailer/:videoLink" element={<Trailer/>}></Route>
          <Route path="/Reviews/:hikeId" element={<Reviews getHikeData={getHikeData} hike={hike} reviews={reviews} setReviews={setReviews}/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
