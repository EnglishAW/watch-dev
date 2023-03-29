import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpDownProject from './projects/up-down/up-down';
import Home from './projects/home/home';
// import RandomDogProject from './projects/random-dog/random-dog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="up-down" element={<UpDownProject />} />
          {/* <Route path="random-dog" element={<RandomDogProject />} /> */}
          {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
