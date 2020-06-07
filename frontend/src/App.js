import React from 'react';
import logo from './logo.svg';
import {BrowserRouter , Route , Link, useHistory} from "react-router-dom";
import './App.css';
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen"
import SigninScreen from './Screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './Screens/RejisterScreen';
import ProductsScreen from './Screens/ProductsScreen';
import ShippingScreen from './Screens/ShippingScreeen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceorderScreen from './Screens/PlaceorderScreen';

function App() {
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;

  const openMenu = ()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = ()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
    <div className= "grid-container">
        <header className= "header">
            <div className= "brand">
                <button onClick = {openMenu}>
                    &#9776;
                </button>
                <Link to = "/">Clothing World</Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                {
                    userInfo ? <Link to = "/profile">
                        {userInfo.name}
                    </Link>:
                    <Link to = "/signin">Sign in</Link>
                }
            </div>
        </header>
        <aside className = "sidebar">
            <h3>Shopping Categories</h3>
            <button className = "sidebar-close-button" onClick={closeMenu}>
                x
            </button>
            <ul>
                <li><a href = "index.html">Pants</a></li>
                <li><a href = "index.html">Shirts</a></li>
            </ul>
        </aside>
        <main className= "main">
            <div className="content">
              <Route path = "/placeorder" component = {PlaceorderScreen}></Route>
              <Route path = "/products" component = {ProductsScreen}></Route>
              <Route path = "/payment" component = {PaymentScreen}></Route>
              <Route path = "/shipping" component = {ShippingScreen}></Route>
              <Route path = "/signin" component = {SigninScreen}></Route>
              <Route path = "/register" component = {RegisterScreen}></Route>
              <Route path = "/product/:id" component = {ProductScreen} />
              <Route path = "/cart/:id?" component = {CartScreen} />
              <Route path = "/" exact = {true} component = {HomeScreen} />
        </div> 
        </main>
        <footer className = "footer">
            All Rights Reserved P.S.M.I
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
