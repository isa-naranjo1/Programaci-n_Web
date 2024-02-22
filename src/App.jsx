import React from 'react'
import { Navbar } from './components/NavBar/NavBar'
import { Location } from "./components/Location/Location";
import { Banner } from "./components/Banner/Banner";
import { NavBarWeb } from "./components/NavBarWeb/NavBarWeb";
import { BannerWeb } from "./components/BannerWeb/BannerWeb";


export default function App() {
  return(
      <>
      <Navbar/>
      <Location/>
      <Banner/>
      <NavBarWeb/>
      <BannerWeb/>
      </>
      
  )
  
}
