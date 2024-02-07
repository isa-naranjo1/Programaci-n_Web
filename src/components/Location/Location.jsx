import React from "react";
import './Location.css';
import location from "../../acses/location.png";


export  function Location () {
    return(
        <div className="location-container">
            <div className="img-container">
                <img src={location} alt="location" />
            </div>
            <div className="text-container">
                <h4>Selecciona el método de entrega de tu pedido.</h4>
            </div>

        </div>

    );
}