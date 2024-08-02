import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import useViewportHeight from './hooks/ViewHeight';



function App() {

  useViewportHeight();

  return (
    <Router>
      <div>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;

