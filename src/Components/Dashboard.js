import React from 'react';
import './Dashboard.css'; 
import { Link } from 'react-router-dom'; 

function Dashboard() {
  // these numbers are fetched from an API
  const totalProducts = 12;
  const totalOrders = 4;

  return (
    <div className="container">
      <h1 className="title">Simplified ERP System With React</h1>
      <div className="metricsContainer">
        <div className="metric">
          <Link to="/product">
            <h3>Total Products</h3>
            <p>{totalProducts}</p>
          </Link>
        </div>
        <div className="metric">
          <Link to="/order">
            <h3>Total Orders</h3>
            <p>{totalOrders}</p>
          </Link>
        </div>
        <div className="metric">
          <Link to="/order2">
            <h3>Calendar View</h3>
            <p>Go to Calendar</p>
          </Link>
        </div>
       
      </div>
    </div>
  );
}

export default Dashboard;
