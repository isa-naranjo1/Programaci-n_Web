import React from "react";
import './BannerWeb.css';
import banner from "../../acses/bannerWeb.png";

export function BannerWeb () {
    return(

        <div className="Banner-web">
            <div className="banner">
                <img src={banner} alt="discount" />
            </div>
            <div class="button-container">
                <button class="arrow-button"></button>
                <button class="arrow-button"></button>
            </div>

        </div>
        
    );
}

