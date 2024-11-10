import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import BirchwoodMansion from './pages/property_detail/BirchwoodMansion';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
// import AboutUs from './pages/AboutUs'
// import DesignerFurniture from './pages/DesignerFurniture';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birchwood" element={<BirchwoodMansion />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />

        {/* <Route path="/DesignerFurniture" element={<DesignerFurniture />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
