import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './Component/Login.js';
import Signup from './Component/Signup.js';
import Home from './Component/Home.js'; 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div> 
      <BrowserRouter> 
      <ToastContainer />
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