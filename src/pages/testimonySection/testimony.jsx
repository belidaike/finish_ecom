import React, { useState } from 'react'
import './testimony.css'
import { PRODUCTS } from '../../products'

const Testimony = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="testimony">
            <div className="carousel">
                <div className="inner"></div>
            </div>
        </section>
    )
}

export default Testimony
