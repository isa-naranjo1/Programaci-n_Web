import React from "react";
import './Product.css'; 
import producto1 from '../../acses/p1.png'; 
import producto2 from '../../acses/p2.png'; 
import like from '../../acses/love.png';
import cart from '../../acses/cart-agregar.png';
import fondo from '../../acses/fondo.png';
import sale from '../../acses/sale.png';

export function Product() {
  return (
    <div className="Product">
      <div className="container-title">
        <div className="title">
          <h1><span className="nuestros">Nuestros</span> vinos más vendidos</h1>     
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
                  <div className="like1-P" >
                    <img src={like} alt="Like"/>
                  </div>
                  <p className="ml">750ml</p>
                  <div className="descuento-porduct1">
                  <p>-33 %</p>
                  </div>
                  <button className="Agregar-product">
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
                  <div className="like2-P" >
                    <img src={like} alt="Like"/>
                  </div>
                  <p className="ml-product">750ml</p>
                  <div className="descuento-porduct2">
                  <p>-33 %</p>
                  </div>
                  <button className="Agregar-product">
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