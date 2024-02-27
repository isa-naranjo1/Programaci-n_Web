import React from 'react'
import { Navbar } from './components/NavBar/NavBar'
import { Location } from "./components/Location/Location";
import { Banner } from "./components/Banner/Banner";
import { NavBarWeb } from "./components/NavBarWeb/NavBarWeb";
import { Options } from './components/Options/Options';
import { BannerWeb } from "./components/BannerWeb/BannerWeb";
import {CarouselWeb} from './components/Carousel/Carousel';
import {FooterWeb} from './components/FooterWeb/FooterWeb';
import {Product} from './components/Product/Product';


export default function App() {
  return(
      <>
      <Navbar/>
      <Location/>
      <Banner/>
      <NavBarWeb/>
      <Options/>
      <BannerWeb/>
      <CarouselWeb/>
      <FooterWeb/>
      <Product/>
      </>
      
  )
  
}
