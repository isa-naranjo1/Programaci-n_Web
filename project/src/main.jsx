import './style.css'
import React from 'react'
import { createRoot } from "react-dom/client";
import App  from './App';

const appContainer = document.getElementById("app") // selector del app index.html 
const root = createRoot(appContainer) 
//instanciar un componente
root.render(<App />)

console.log(appContainer);