import React from 'react';
import './Footer.css'; 
import logo from '../../acses/logo.png';
import youtube from '../../acses/youtube.png';
import instagram from '../../acses/instagram.png';
import facebook from '../../acses/facebook.png';
import tiktok from '../../acses/tiktok.png';
import qr from '../../acses/qr.png';
import arrecipe from '../../acses/arrecife.png';
import whatsapp from '../../acses/whatsapp.png';
import mail from '../../acses/mail.png';
import telephone from '../../acses/telephone.png';

export function Footer() {
  return (
    <footer className='Footer'>
    <div className='containers-footer'> 
            <div className="container1">
                <div className="logo-footer">
                    <img src={ logo}alt="Logo" />
                </div>
                <div className="redes-footer">
                <img src={ youtube}/>
                <img src={ instagram} />
                <img src={ facebook} />
                <img src={ tiktok} />
                </div>
                <div className="text-footer">
                <p>¡Descarga gratis la app!</p>
                </div>
                <div className="qr-footer">
                <img src={ qr} />
                </div>
                <img className='arrecipe-footer' src={ arrecipe} />
            </div>

            <div className="container2">
                <div className="column1-footer">
                    <a>Productos</a>
    
                    <a>Club Dislicores</a>
                    
                    <a>Quienes Somos</a>
                    
                    <a>Trabaja con nosotros</a>
                    
                    <a>Dislicores a su negocio</a>
                    
                    <a>Cotizaciones</a>
                    
                </div>

            <hr class="separator"></hr>
                <div className="column2-footer">
                    <h4 className='titulo-footer'>Atencion al cliente</h4>
                <div className='contact-footer'>  
                    <div className="whatsapp-footer">
                        <img src={whatsapp}/>
                        <p>whatsapp</p>
                    </div>
                    <div className="phone-footer">
                        <img src={telephone}/>
                        <div className="phone-info-footer">
                            <p>(601)2415520</p> 
                            <p>(601)2042335</p>
                        </div>
                    </div>
                    <div className="mail-footer">
                        <img src={mail}alt="Imagen 8" />
                        <p>online@dislicores.com</p>
                    </div>
                </div>  
                    <a>Centro de ayuda</a>
                    <a>Preguntas Frecuentes</a>
                    <a>Localizar store</a>
                
                </div>

            <hr class="separator"></hr>
                <div className="column3-footer">
                    <h4 className='titulo-footer'>Informacion legal</h4>
                    <a>Responsabilidad social</a>
                    
                    <a>Terminos y condiciones</a>
                   
                    <a>Politica de privacidad de datos</a>
                   
                    <a>Politica de cookies</a>
                   
                    <a>Terminos club dislicores</a>

                </div>
            </div>
        </div>
        <div className="final-text-footer">
                <p>“DISFRUTA LO MEJOR DE TOMAR, SIN LO MALO DE EXCEDERTE”. EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD. LEY 30 DE 1986. PROHÍBASE EL EXPENDIO DE BEBIDAS EMBRIAGANTES A MENORES DE EDAD Y MUJERES EMBARAZADAS. LEY 124 DE 1994.”</p>
        </div>
    </footer>
  );
}
