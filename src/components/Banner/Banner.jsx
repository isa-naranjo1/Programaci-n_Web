import React from "react";
import './Banner.css';
import discount from "../../acses/banner.jpg";

export  function Banner () {
    return(

        <div className="Banner-container">
            <div className="discount">
                <img src={discount} alt="discount" />
            </div>
            <div class="button-container">
                <button class="arrow-button"></button>
                <button class="arrow-button"></button>
            </div>
            <div className="items">
            <div className="circle">Vinos</div>
                <a>Whisky</a>
                <a>Tequilas</a>
                <a>Cervezas</a>
                <a>Maltas</a>
            </div>

        </div>
        
    );
}

