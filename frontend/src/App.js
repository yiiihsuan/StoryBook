import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'; 
import useViewportHeight from './hooks/ViewHeight';
import { AuthProvider } from './AuthContext';


function App() {

  useViewportHeight();

  return (
    <Router>
       <AuthProvider>
      {/* <div> */}
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      </AuthProvider>
      {/* </div> */}
    </Router>
  );
}

export default App;

