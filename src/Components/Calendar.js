import React, { useState } from 'react';
import './Order.css';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 


let initialOrders = [
  { id: 1, orderId: 'ORD001', customerName: 'Mark Zuckerberg', orderDate: '2024-03-27', status: 'Pending', expectedDeliveryDate: new Date() },
  { id: 2, orderId: 'ORD002', customerName: 'Bill Gates', orderDate: '2024-03-28', status: 'Processing', expectedDeliveryDate: new Date() },
  { id: 3, orderId: 'ORD003', customerName: 'Steve Jobs', orderDate: '2024-03-27', status: 'Delivered', expectedDeliveryDate: new Date() },
  { id: 4, orderId: 'ORD004', customerName: 'Elon Musk', orderDate: '2024-03-29', status: 'Pending', expectedDeliveryDate: new Date() },
  { id: 5, orderId: 'ORD005', customerName: 'Sergey Brin', orderDate: '2024-03-30', status: 'Processing', expectedDeliveryDate: new Date() }
];

function Order() {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [selectedDeliveryStatus, setSelectedDeliveryStatus] = useState('');

  const generateRandomDate = () => {

    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 10);
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  
    if (!date) {
      setSelectedOrders(orders); // Set selectedOrders to all orders when no date is selected
      setSelectedDeliveryStatus('');
      return;
    }
  
    setSelectedOrders([]);
    setSelectedDeliveryStatus('In Progress');
  
    setSelectedOrders(orders.filter(order => {
      const expectedDeliveryDate = new Date(order.expectedDeliveryDate);
      return (
        expectedDeliveryDate.getDate() === date.getDate() &&
        expectedDeliveryDate.getMonth() === date.getMonth() &&
        expectedDeliveryDate.getFullYear() === date.getFullYear()
      );
    }));
  };
  

  const handleViewOrderDetails = (order) => {
    setSelectedOrder({
      ...order,
      shippingDate: generateRandomDate(),
      expectedDeliveryDate: generateRandomDate()
    });
  };

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order => {
      if (order.orderId === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.orderId !== orderId);
    setOrders(updatedOrders);
  };

  return (
    
    <div className="order-container">
      
      <div className="order-content">
         {selectedOrder && (
          <div className="order-details">
            <h3>Order Details</h3>
            <p><strong>Order ID:</strong> {selectedOrder.orderId}</p>
            <p><strong>Customer Name:</strong> {selectedOrder.customerName}</p>
            <p><strong>Order Date:</strong> {selectedOrder.orderDate}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <p><strong>Shipping Date:</strong> {selectedOrder.shippingDate.toDateString()}</p>
            <p><strong>Expected Delivery Date:</strong> {selectedOrder.expectedDeliveryDate.toDateString()}</p>
            <button onClick={() => setSelectedOrder(null)} className="close-details-button">Close Details</button>
          </div>
        )}
        
       

        <div className="dashboard-container">
          <h2>Orders Calendar View</h2>
          <div className="calendar-container">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
            />
          </div>
          <div className="selected-orders">
            <h3>Orders for {selectedDate.toDateString()}</h3>
            <ul>
              {selectedOrders.map(order => (
                <li key={order.id}>{order.customerName}</li>
              ))}
            </ul>
            {selectedDeliveryStatus && (
              <p><strong>Delivery Status:</strong> {selectedDeliveryStatus}</p>
            )}
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Order;
