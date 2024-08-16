import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import CreateCustomerForm from './components/Customer/CreateCustomerForm';
import CustomerDetail from './components/Customer/CustomerDetail';
import UpdateCustomerForm from './components/Customer/UpdateCustomerForm';
import ProductList from './components/Product/ProductList';
import CreateProductForm from './components/Product/CreateProductForm';
import ProductDetail from './components/Product/ProductDetail';
import UpdateProductForm from './components/Product/UpdateProductForm';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import PlaceOrderForm from './components/Order/PlaceOrderForm';
import OrderDetail from './components/Order/OrderDetail';
import OrderStatus from './components/Order/OrderStatus';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>E-Commerce Web Application</h1>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/customers/create" element={CreateCustomerForm} />
          <Route path="/customers/edit/:id" element={UpdateCustomerForm} />
          <Route path="/customers/:id" element={CustomerDetail} />
          <Route path="/customers" element={() => <div>Customer List Placeholder</div>} />
          <Route path="/products/create" element={CreateProductForm} />
          <Route path="/products/edit/:id" element={UpdateProductForm} />
          <Route path="/products/:id" element={ProductDetail} />
          <Route path="/products" element={ProductList} />
          <Route path="*"element={NotFoundPage} />
          <Route path="/orders/place" element={PlaceOrderForm} />
          <Route path="/orders/:id" element={OrderDetail} />
          <Route path="/track-order" element={OrderStatus} />
  {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
