import React from "react";
import './Hamburger.css';
import sale from '../../acses/sale.png';
import x from '../../acses/x.png';
import tragle from '../../acses/flacha-blanca.png';

export function Hamburger({ isOpen, onClose }){

    return(
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
            <div className='menu-container'>
                <div className="container-sale">
                    <div className="sale-section">
                        <img src={sale} alt="ofertas" />
                        <span>Ofertas</span>
                    </div>
                    <button className="X"  onClick={onClose}>
                        <img src={x} alt="close" />
                    </button>
                </div>
                <div className="item-section">
                    <button>
                        <span>Vinos</span>
                        <img src={tragle} alt="vinos" />
                    </button>
                    <button>
                        <span>Licores</span>
                        <img src={tragle} alt="licores" />
                    </button>
                    <button>
                        <span>Tequilas</span>
                        <img src={tragle} alt="Tequilas" />
                    </button>
                    <button>
                         <span>Cerveza</span>
                         <img src={tragle} alt="cerveza" />
                    </button>
                    <button>
                        <span>Cocteleria</span>
                        <img src={tragle} alt="Cocteleria" />
                    </button>
                    <button>
                        <span>Bebidas</span>
                        <img src={tragle} alt="Bebidas" />
                    </button>
                    <button>
                        <span>Alimentos</span>
                        <img src={tragle} alt="Alimentos" />
                    </button>
                    <button>
                        <span>Accesorios</span>
                        <img src={tragle} alt="accesorios" />
                    </button>
                    <button>
                         <span>Vapeadores</span>
                         <img src={tragle} alt="vapeadores" />
                    </button>
                </div>
                <hr className="separator" />
                <div className="btn-final">
                    <button>
                        Encuentra tu store
                    </button>
                    <button>
                        Club Dislicores
                    </button>
                    <button>
                        Cotizaciones
                    </button>
                    <button>
                        Ayuda
                    </button>
                </div>
            </div>
        </div>
    );
}
