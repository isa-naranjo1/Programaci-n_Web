import React from "react";
import './Banner.css';
import discount from "../../acses/banner.png";

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

        </div>
        
    );
}

