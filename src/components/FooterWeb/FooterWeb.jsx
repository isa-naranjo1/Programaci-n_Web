import React from 'react';
import './FooterWeb.css'; 
import logo from '../../acses/logo.png';
import youtube from '../../acses/youtube.png';
import instagram from '../../acses/instagram.png';
import facebook from '../../acses/facebook.png';
import tiktok from '../../acses/tiktok.png';
import qr from '../../acses/qr.png';
import visa from '../../acses/visa.png';
import master from '../../acses/master.png';
import americanExpres from '../../acses/american.png';
import mercadoPago from '../../acses/MercadoPago.png';
import secure from '../../acses/secure.png';
import industriaComercio from '../../acses/industria.png';
import arrecipe from '../../acses/arrecife.png';
import whatsapp from '../../acses/whatsapp.png';
import mail from '../../acses/mail.png';
import telephone from '../../acses/telephone.png';

export function FooterWeb() {
  return (
    <footer className='FooterWeb'>
    <div className='containers'> 
            <div className="first-container">
                <div className="logo-footer">
                    <img src={ logo}alt="Logo" />
                </div>
                <div className="redes">
                <img src={ youtube}/>
                <img src={ instagram} />
                <img src={ facebook} />
                <img src={ tiktok} />
                </div>
                <div className="text">
                <p>¡Descarga gratis la app!</p>
                </div>
                <div className="qr">
                <img src={ qr} />
                </div>
            </div>

            <div className="second-container">
                <div className="column1">
                    <h4 className='titulo'>Blog Dislicores</h4>
    
                    <a>Club Dislicores</a>
                    
                    <a>Quienes Somos</a>
                    
                    <a>Trabaja con nosotros</a>
                    
                    <a>Dislicores a su negocio</a>
                    
                    <a>Cotizaciones</a>
                    
                    <a>Paga proveedores</a>
                </div>

                <div className="column2">
                    <h4 className='titulo'>Atencion al cliente</h4>
                <div className='contact'>  
                    <div className="whatsapp">
                        <img src={whatsapp}/>
                        <p>whatsapp</p>
                    </div>
                    <div className="phone">
                        <img src={telephone}/>
                        <div className="phone-info">
                            <p>(601)2415520</p> 
                            <p>(601)2042335</p>
                        </div>
                    </div>
                    <div className="mail">
                        <img src={mail}alt="Imagen 8" />
                        <p>online@dislicores.com</p>
                    </div>
                </div>  
                    <a>Preguntas Frecuentes</a>
                    <a>Localizar store</a>
                
                </div>

                <div className="column3">
                    <h4 className='titulo'>Informacion legal</h4>
                    <a>Responsabilidad social</a>
                    
                    <a>Terminos y condiciones</a>
                   
                    <a>Politica de privacidad de datos</a>
                   
                    <a>Politica de cookies</a>
                   
                    <a>Terminos club dislicores</a>

                </div>
            </div>

            <div className="third-container">
                <div className="image-row">
                <img src={ visa} />
                <img src={ master}  />
                <img src={ americanExpres} />
                <img src={ mercadoPago} />
                </div>
                <div className="navega-secure">
                <p>Navega Seguro</p>
                <img src={secure} />
                </div>
                <img className='insdustria' src={ industriaComercio} />
                <img className='arrecipe' src={ arrecipe} />
            </div>
        </div>
        <div className="final-text">
                <p>“DISFRUTA LO MEJOR DE TOMAR, SIN LO MALO DE EXCEDERTE”.<br></br> EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD. <br></br>LEY 30 DE 1986. PROHÍBASE EL EXPENDIO DE BEBIDAS EMBRIAGANTES A MENORES DE EDAD Y MUJERES EMBARAZADAS. LEY 124 DE 1994.”</p>
        </div>
    </footer>
  );
}
