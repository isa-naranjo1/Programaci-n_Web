import React from "react";
import './NavBar.css';
import logo from '../../acses/logo.png';
import user from '../../acses/user.png';
import cart from '../../acses/cart.png';
import notification from '../../acses/notification.png';
import lupa from '../../acses/lupa.png';
import menu from '../../acses/menu.png';

export function Navbar(){
    return (
        <nav className="navbar">
          <div className="menu">
            <img src={menu} alt="menu" />
            <p className="menu-text">Menú</p>
        </div>
          <div className="lupa">
            <img src={lupa} alt="lupa" />
          </div>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="user">
            <img src={user} alt="Logo" />
          </div>
          <div className="cart">
            <img src={cart} alt="cart" />
          </div>
          <div className="notification">
            <img src={notification} alt="notification" />
          </div>
        </nav>
      );
}
