import React from "react";
import './Carousel.css'; 
import { Carousel } from 'react-carousel';
import producto1 from '../../acses/p1.png'; 
import producto2 from '../../acses/p2.png'; 
import producto3 from '../../acses/p3.png'; 
import producto4 from '../../acses/p4.png'; 
import like from '../../acses/love.png';
import cart from '../../acses/cart.png';

export function CarouselWeb() {
  return (
    <div className="Product">
      <div className="titulo">
        <h1><span className="color">Nuestros</span> <br></br>vinos más vendidos</h1>      
        <p>El sabor de cada uno de estos <br></br>vinos es especial, tanto como <br></br>la persona a la que se lo<br></br> quieres regalar. Descubre por<br></br> qué todos están hablando de<br></br> ellos.</p>
      </div>
        <div className="tarjeta1">
          <img src={producto1} alt="Imagen 1" />
          <h2>$42.679  <span className="color-precio">$63.700</span></h2>
          <p>Vino Blanco Cousiño Macul Don Luis Chardonnay</p>
          <img src={like} alt="Like" className="like-icon" />
          <p className="ml">750ml</p>
          <div className="descuento-container">
          <p className="descuento">-33%</p>
        </div>          <button>
              <img src={cart} alt="cart" />
              <p>Agregar</p>
          </button>
        </div>
        <div className="tarjeta2">
          <img src={producto2} alt="Imagen 2" />
          <h2>$42.679  <span className="color-precio">$63.700</span></h2>
          <p>Vino Rosado Cousiño Macul Gris Cabernet Sauvignon</p>
          <img src={like} alt="Like" className="like-icon" />
          <p className="ml">750ml</p>
        <div className="descuento-container">
          <p className="descuento">-33%</p>
        </div>
          <button>
              <img src={cart} alt="cart" />
              <p>Agregar</p>
          </button>
        </div>
        <div className="tarjeta3">
          <img src={producto3} alt="Imagen 3" />
          <h2>$42.679  <span className="color-precio">$63.700</span></h2>
          <p>Vino Blanco Cousiño Macul Don Luis Sauvignon Blanc</p>
          <img src={like} alt="Like" className="like-icon" />
          <p className="ml">750ml</p>
          <div className="descuento-container">
          <p className="descuento">-33%</p>
        </div>          <button>
              <img src={cart} alt="cart" />
              <p>Agregar</p>
          </button>
        </div>
        <div className="tarjeta4">
          <img src={producto4} alt="Imagen 4" />
          <h2>$42.679  <span className="color-precio">$63.700</span></h2>
          <p>Vino Tinto Cousiño Macul Don Luis Merlot</p>
          <img src={like} alt="Like" className="like-icon" />
          <p className="ml">750ml</p>
          <div className="descuento-container">
          <p className="descuento">-33%</p>
        </div>          <button>
              <img src={cart} alt="cart" />
              <p>Agregar</p>
          </button>
        </div>
    </div>
  );
  }