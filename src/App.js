// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Product from './Components/Product';
import Order from './Components/Order';
import './App.css';
import Order2 from './Components/Calendar';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
            <img src={require("./Image/home-alt.png")} className="pi" alt="Product Image" />
              <Link to="/" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item">
            <img src={require("./Image/cart-add.png")} className="pi" alt="Product Image" />


              <Link to="/product" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
            <img src={require("./Image/bag.png")} className="pi" alt="Product Image" />
              <Link to="/order" className="nav-link">Orders</Link>
            </li>
            <li className="nav-item">
            <img src={require("./Image/calendar-event.png")} className="pi" alt="Product Image" />
              <Link to="/order2" className="nav-link">Calendar</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order2" element={<Order2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

