import React, { useState } from "react";
import './NavBar.css';
import logo from '../../acses/logo.png';
import user from '../../acses/user.png';
import cart from '../../acses/cart.png';
import notification from '../../acses/notification.png';
import lupa from '../../acses/lupa.png';
import menu from '../../acses/menu.png';
import { Hamburger } from "../Hamburger/Hamburger";

export function Navbar(){

      // Define el estado para controlar la visibilidad del menú hamburguesa
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      // Función para manejar el clic en el botón del menú
      const handleMenuClick = () => {
          setIsMenuOpen(!isMenuOpen);
      };

    return (
        <nav className="navbar">
          <button className="menuBar"  onClick={handleMenuClick}>
            <img src={menu} alt="menu" />
            <p className="menu-text">Menú</p>
          </button>
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
          {/* Renderiza el componente del menú hamburguesa solo si isMenuOpen es true */}
          <Hamburger isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </nav>
      );
}
