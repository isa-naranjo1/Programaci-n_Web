import React from 'react'
import './style.css'
import { createRoot } from "react-dom/client";
import App  from './App'; 

const appContainer = document.getElementById("app") 
const root = createRoot(appContainer) 
root.render(<App />)

console.log(appContainer);