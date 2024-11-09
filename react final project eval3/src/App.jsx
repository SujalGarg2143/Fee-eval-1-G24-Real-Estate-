import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import BirchwoodMansion from './pages/property_detail/BirchwoodMansion';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birchwood" element={<BirchwoodMansion />} />
        {/* Add more routes */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
