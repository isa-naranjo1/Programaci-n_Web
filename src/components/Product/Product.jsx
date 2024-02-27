import React from "react";
import './Product.css'; 
import producto1 from '../../acses/p1.png'; 
import producto2 from '../../acses/p2.png'; 
import like from '../../acses/love.png';
import cart from '../../acses/cart-agregar.png';
import fondo from '../../acses/fondo.png';

export function Product() {
  return (
    <div className="Product">
      <div className="container-title">
        <div className="title">
          <h1>Nuestros</h1> <h2>vinos más vendidos</h2>      
          <p>El sabor de cada uno de estos vinos es especial, tanto como la persona a la que se lo quieres regalar. Descubre por qué todos están hablando de ellos.</p>
        </div>
      </div>
      <div className="containes-product">
          <div className="cards-product">
              <div className="container-product1">
                <div className="card-porduct1">
                  <img src={producto1}/>
                  <h2>$38.430  <span className="color-precio">$54.900</span></h2>
                  <p className="Description-porduct">Vino Tinto Trapiche Varietal Merlot</p>
                  <img src={like} alt="Like" className="like-icon" />
                  <p className="ml">750ml</p>
                  <div className="descuento-porduct">
                  <p className="descuento">-33%</p>
                  </div>
                  <button className="Agregar-porduct">
                      <img src={cart}/>
                      <p>Agregar</p>
                  </button>
                </div>
              </div>
              <div className="container-product2">
                <div className="card-porduct2">
                  <img src={producto2} alt="Imagen 2" />
                  <h2>$38.430  <span className="color-precio">$54.900</span></h2>
                  <p className="Description-porduct">Vino Rosado Trapiche Malbec Cabernet </p>
                  <img src={like} alt="Like" className="like" />
                  <p className="ml-product">750ml</p>
                  <div className="descuento-porduct">
                  <p className="descuento">-33%</p>
                  </div>
                  <button className="Agregar-porduct">
                      <img src={cart} alt="cart" />
                      <p>Agregar</p>
                  </button> 
                </div>
              </div>
            </div>         
      </div> 
        <button className="mas-products">Ver mas productos</button>
        <img className="fondo" src={fondo}/>
    </div>
  );
  }