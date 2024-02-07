import React from "react";
import './Banner.css';
import discount from "../../acses/banner.png";

export  function Banner () {
    return(
        
            <div className="discount">
                <img src={discount} alt="discount" />
            </div>
        
    );
}

