import React from "react";
import './Carousel.css'; 
import producto1 from '../../acses/p1.png'; 
import producto2 from '../../acses/p2.png'; 
import producto3 from '../../acses/p3.png'; 
import producto4 from '../../acses/p4.png'; 
import like from '../../acses/love.png';
import cart from '../../acses/cart-agregar.png';
import fondo from '../../acses/fondo.png';

export function CarouselWeb() {
  return (
    <div className="Carousel">
      <div className="titulo-container">
        <div className="titulo">
          <h1>Nuestros</h1>
          <h2>vinos más vendidos</h2>      
          <p>El sabor de cada uno de estos vinos es especial, tanto como la persona a la que se lo quieres regalar. Descubre por qué todos están hablando de ellos.</p>
        </div>
      </div>
      <div className="container">
          <div className="cards">

            
              <div className="card-container1">
                <div className="card1">
                  <img src={producto1} alt="Imagen 1" />
                  <h2>$38.430  <span className="color-precio">$54.900</span></h2>
                  <p className="Description">Vino Tinto Trapiche Varietal Merlot</p>
                  <div className="like1" >
                    <img src={like} alt="Like"/>
                  </div>
                  <p className="ml">750ml</p>
                  <div className="descuento1">
                  <p>-33 %</p>
                  </div>
                  <button className="Agregar">
                      <img src={cart} alt="cart" />
                      <p>Agregar</p>
                  </button>
                </div>
              </div>


              <div className="card-container2">
                <div className="card2">
                  <img src={producto2} alt="Imagen 2" />
                  <h2>$38.430  <span className="color-precio">$54.900</span></h2>
                  <p className="Description">Vino Rosado Trapiche Malbec Cabernet </p>
                  <div className="like2" >
                    <img src={like} alt="Like"/>
                  </div>
                  <p className="ml">750ml</p>
                  <div className="descuento2">
                  <p>-33 %</p>
                  </div>
                  <button className="Agregar">
                      <img src={cart} alt="cart" />
                      <p>Agregar</p>
                  </button> 
                </div>
              </div>


              <div className="card-container3">
                <div className="card3">
                  <img src={producto3} alt="Imagen 3" />
                  <h2>$129.700</h2>
                  <p className="Description">Vino Tinto Trapiche Medalla Cabernet </p>
                  <div className="like3" >
                    <img src={like} alt="Like"/>
                  </div>
                  <p className="ml">750ml</p>
                  <button className="Agregar">
                      <img src={cart} alt="cart" />
                      <p>Agregar</p>
                  </button>         
                </div>
              </div>



              <div className="card-container4">
                <div className="card4">
                  <img src={producto4} alt="Imagen 4" />
                  <h2>$49.980  <span className="color-precio">$71.400</span></h2>
                  <p className="Description">Vino Tinto Tarapacá Reserva Carmenére</p>
                  <div className="like4" >
                    <img src={like} alt="Like"/>
                  </div>
                  <p className="ml">750ml</p>
                  <div className="descuento4">
                  <p>-33 %</p>
                  </div>
                  <button className="Agregar">
                      <img src={cart} alt="cart" />
                      <p>Agregar</p>
                  </button> 
                </div> 
              </div>         
      </div> 
        <button className="mas-productos">Ver mas productos</button>
        <img className="fondo-web" src={fondo}/>
      </div>
      
    </div>
  );
  }