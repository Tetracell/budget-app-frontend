import React from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

//Components
import Home from './Components/Home';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
