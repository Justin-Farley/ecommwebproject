import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-brand">MyShop</Link>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/products" className="nav-link">Products</Link></li>
                    <li className="nav-item"><Link to="/customers" className="nav-link">Customers</Link></li>
                    <li className="nav-item"><Link to="/orders" className="nav-link">Orders</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
