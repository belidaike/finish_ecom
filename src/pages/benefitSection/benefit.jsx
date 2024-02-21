import React from 'react'
import './benefit.css'
import { GrSecure } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";

const Benefit = () => {
    return (
        <section className='paddings benefit-wrapper'>
            <div className='benefit-container'>
                <div className='benefits-container'>
                    <div className='flexColCenter benefit'>
                        <FaShippingFast size={45} color='red' className='benefit-svg' />
                        <h2>Fast Delivery</h2>
                    </div>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates ad nulla sit molestiae, eaque rerum harum ab aspernatur molestias id nam assumenda doloribus doloremque corrupti illum itaque dolores officiis?</p>
                </div>
                <div className='benefits-container'>
                    <div className='flexColCenter benefit'>
                        <GrSecure size={45} color='#00ab41' className='benefit-svg' />
                        <h2>Your credential is secure</h2>
                    </div>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto veniam dignissimos deserunt recusandae ut! Numquam quidem beatae, dolor quisquam eum dolorem laudantium, culpa maxime nostrum soluta tempore autem veritatis!</p>
                </div>
                <div className='benefits-container'>
                    <div className="flexColCenter benefit">
                        <MdOutlineDiscount size={45} color='rgb(255, 280, 0)' className='benefit-svg' />
                        <h2>So many discounts!</h2>
                    </div>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet quos explicabo provident sint sunt cum rem. Neque, exercitationem autem minima ex, id harum ipsa molestiae?</p>
                </div>
            </div>
        </section>
    )
}

export default Benefit
