export const getImg = async (text) => {
    try {
        // Tomar solo las primeras 4 palabras del texto
        const trimmedText = text.trim().split(/\s+/).slice(0, 4).join(' ');
        
        // Generar la URL de la imagen con las primeras 4 palabras del texto
        const response = await fetch(`https://cataas.com/cat/says/${trimmedText}?fontSize=25&fontColor=white`);
        const img = await response.blob();
        return URL.createObjectURL(img); // Devuelve la URL de la imagen
    } catch (error) {
        console.error('There was an error getting the image', error);
        return null; // Devuelve null en caso de error
    }
};
