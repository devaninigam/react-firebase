import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './Component/Login.js';
import Signup from './Component/Signup.js';
import Home from './Component/Home.js'; 

function App() {
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;