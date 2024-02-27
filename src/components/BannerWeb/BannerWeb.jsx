import React from "react";
import './BannerWeb.css';
import banner from "../../acses/bannerWeb.png";

export function BannerWeb () {
    return(

        <div className="Banner-web">
            <div className="banner">
                <img src={banner} alt="banner" />
            </div>
            <div className="button-container-web">
                <button className="arrow-button-web"></button>
                <button className="arrow-button-web"></button>
            </div>
            <div className="items-web">
            <div className="circle">Vinos</div>
                <a>Whisky</a>
                <a>Tequilas</a>
                <a>Cervezas</a>
                <a>Maltas</a>
                <a>Ginebra</a>
                <a>Ron</a>
                <a>Otros</a>
            </div>

        </div>
        
    );
}

