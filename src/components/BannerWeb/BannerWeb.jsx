import React from "react";
import './BannerWeb.css';
import banner from "../../acses/bannerWeb.png";

export function BannerWeb () {
    return(

        <div className="Banner-web">
            <div className="banner">
                <img src={banner} alt="banner" />
            </div>
            <div class="button-container-web">
                <button class="arrow-button-web"></button>
                <button class="arrow-button-web"></button>
            </div>

        </div>
        
    );
}

