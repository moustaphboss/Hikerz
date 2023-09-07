import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  const [hikes, setHikes] = useState([]);
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

  useEffect(() => {
    getHikes();
  }, []);
  

  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Layout/>}>
          <Route  path="/" element={<Home hikes={hikes}/>}>
          
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
