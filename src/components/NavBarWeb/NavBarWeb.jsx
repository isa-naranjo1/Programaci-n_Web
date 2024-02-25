import React from "react";
import './NavBarWeb.css';
import logo from '../../acses/logo.png';
import user from '../../acses/user.png';
import cart from '../../acses/cart.png';
import notification from '../../acses/notification.png';
import location from '../../acses/location.png';
import lupa from '../../acses/lupa.png';
import sale from '../../acses/ofertas.png';
import store from '../../acses/store.png';


export function NavBarWeb(){
    return (
        <nav className="navbar-web">
          <div className="logo-web">
            <img src={logo} alt="Logo" />
          </div>
          <div className="nav-options">
                <a>
                    <img  src={sale} alt="ofertas" />
                    Ofertas
                </a>
                <a>
                    <img  src={store} alt="store" />
                    Tu store
                </a>
                <a> Club Dislicores</a>
                <a >Cotizaciones</a>
                <a >Ayuda</a>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Buscar" />
                <img src={lupa} alt="lupa" /> {/* Aquí agregas la imagen dentro del input */}
            </div>
            <div className="iconos">
              <img src={user} alt="user" />
              <img src={cart} alt="cart" />
              <img src={notification} alt="notification" />
              <img src={location} alt="location" />
            </div>
            <div className="delivery">
                <h4>Entrega</h4>
            </div>
        </nav>
      );
}

