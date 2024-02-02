import React from 'react'
import { Header } from "./components/Header/Header"
import { Body } from "./components/Body/Body"
import { Footer } from "./components/Footer/Footer"


//crear un componente funcional Y renderizando Hello world | <> encapsular los componentes dentro del app para que se puedan renderizar
export default function App() {
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
        
    )
    
}
