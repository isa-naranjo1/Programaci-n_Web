import React from 'react';
import ReactDOM from 'react-dom';
import CatCard from '././components/Cat/CatCard'; // Asegúrate de importar correctamente tu componente CatCard desde su ubicación

const App = () => {
    return (
        <div className="app">
            <CatCard />
        </div>
    );
};

export default App; // Asegúrate de exportar App como default
