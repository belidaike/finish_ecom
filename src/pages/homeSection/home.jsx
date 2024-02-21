import React from 'react'
import Hero from '../heroSection/hero'
import Shop from '../shopSection/shop'
import Benefit from '../benefitSection/benefit'
import Footer from '../footerSection/footer'
import { Carousel } from '../carouselSection/Carousel'
import { slides } from "../../../src/data/carouselData.json";

const Home = () => {
    return (
        <main>
            <Hero />
            <Shop />
            <Benefit />
            <Carousel data={slides} />
            <Footer />
        </main>
    )
}

export default Home

