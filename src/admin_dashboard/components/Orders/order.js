import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import "../Orders/Orders.css";
import OrderList from './orderList';

function Order() {
  return (
    <div className="order">
      <div className="navbar-sidebar">
        <Navbar />
        <Sidebar />
      </div>
      <h2>&nbsp;&nbsp; Orders</h2>
      <div className="order-list">
        <OrderList />
      </div>
    </div>
  );
}

export default Order;
