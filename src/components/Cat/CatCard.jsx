import React, { useState, useEffect } from 'react';
import './style.css';
import { getFact } from '../Api/CatFact';
import { getImg } from '../Api/CatImg';
import Button from '../Button/Button'; // Importa el componente Button

const CatCard = () => {
    const [fact, setFact] = useState('Loading...'); 
    const [imgUrl, setImgUrl] = useState(''); // Estado para almacenar la URL de la imagen

    const fetchNewFact = async () => {
        try {
            const newFact = await getFact(); 
            setFact(newFact);

            // Obtener la URL de la imagen usando la función getImg
            const img = await getImg(newFact);
            setImgUrl(img);
        } catch (error) {
            console.error('Error fetching new cat fact:', error);
            setFact('Error fetching fact');
        }
    };

    useEffect(() => {
        fetchNewFact();
    }, []);

    return (
        <div className="cat-card">
            <h1>¡ Cat Facts !</h1>
            <img src={imgUrl} alt="Gato" /> {/* Usa la URL de la imagen */}
            <p>{fact}</p> 
            <Button className = "Button" onClick={fetchNewFact}>New fact</Button>
        </div>
    );
};

export default CatCard;