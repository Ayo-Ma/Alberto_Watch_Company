/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../Components/homepage/Header'
import About from '../Components/homepage/About'
import ProductsSection from '../Components/homepage/ProductsSection'
import Footer from '../Components/homepage/Footer'
import Newsletter from '../Components/homepage/Newsletter'
import HeroSection from '../Components/homepage/HeroSection'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <About />
    <ProductsSection />
    <Newsletter />

    </>
  )
}

export default Home