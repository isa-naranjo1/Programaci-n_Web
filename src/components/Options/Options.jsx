import React from "react";
import './Options.css';
import tragle from '../../acses/flecha.png';


export function Options() {

    return(
        <div className="options">
        <a>
            <img  src={tragle} alt="vinos" />
            Vinos
        </a>
        <a>
            <img  src={tragle} alt="licores" />
            Licores
        </a>
        <a> <img  src={tragle} alt="Tequilas" />
            Tequilas
        </a>
        <a> <img  src={tragle} alt="cerveza" />
            Cerveza
        </a>
        <a> <img  src={tragle} alt="Cocteleria" />
                Cocteleria
        </a>
        <a> <img  src={tragle} alt="Bebidas" />
            Bebidas
        </a>
        <a> <img  src={tragle} alt="Alimentos" />
            Alimentos
        </a>
        <a> <img  src={tragle} alt="accesorios" />
            Accesorios
        </a>
        <a> <img  src={tragle} alt="vapeadores" />
            Vapeadores
        </a>
        </div>

    )
    
}