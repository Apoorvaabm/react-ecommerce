import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './core/Home';
import Product from './core/Product';
import Cart from './core/Cart';
import Signin from './core/Signin';
import { useSelector } from 'react-redux';
import Register from './core/Register';
import Products from './core/Products';
import Shipsc from './core/Shipsc';
import Payment from './core/Payment';
import PlaceOrder from './core/PlaceOrder';
import Order from './core/Order';
import Profile from './core/Profile';
import Orders from './core/Orders';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;


  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
           
            <Link to="/" >E-commerce shopping app</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                <Link to="/signin">Sign In</Link>
            }
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="/"  >Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
            <Link to="/products"> Products</Link>
          </div>
        </header>
      
        <main className="main">
          <div className="content">
            <Route path="/orders" component={Orders} />
            <Route path="/profile" component={Profile} />
            <Route path="/order/:id" component={Order} />
            <Route path="/products" component={Products} />
            <Route path="/shipping" component={Shipsc} />
            <Route path="/payment" component={Payment} />
            <Route path="/placeorder" component={PlaceOrder} />
            <Route path="/signin" component={Signin} />
            <Route path="/register" component={Register} />
            <Route path="/product/:id" component={Product} />
            <Route path="/cart/:id?" component={Cart} />
            <Route path="/" exact={true} component={Home} />


          </div>

        </main>
        <footer className="footer">
          Happy shopping !
    </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
