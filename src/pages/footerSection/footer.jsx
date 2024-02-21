import React from 'react'
import './footer.css'
import { useNavigate } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import logo from '/logo.png'
import { Link } from 'react-router-dom'


const Footer = () => {
    const nav = useNavigate()
    return (
        <section className='footer-wrapper'>

            <div className="footer-container">
                <div className="footer-busInfo">
                    <div>
                        <Link to="/"><img src={logo} width={50} alt="" /></Link>
                        <h4>LeapShop</h4>
                    </div>
                    <br />
                    <h3 className='footer-busInfoDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis vel provident culpa eius aperiam dolore quae amet inventore quam minus voluptatibus repudiandae quis nostrum tenetur tempora perspiciatis dolores, ipsum optio.</h3>
                </div>
                <div className='footer-two'>
                    <div className="footer-nav">
                        <p>Navigation</p>
                        <br />
                        <div className='footer-nav-inner'>
                            <a onClick={() => nav('/')}>Home</a>
                            <a onClick={() => nav('/cart')}>Cart</a>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <p>Contact Us</p>
                        <br />
                        <div className='footer-contact-inside'>
                            <a><b>Tel no.&nbsp;:</b>&nbsp;&nbsp;&nbsp;+902-4567-123-098</a>
                            <a><b>Cell no.&nbsp;:</b>&nbsp;&nbsp;&nbsp;+639-432-765-098</a>
                            <a><b>Email Us at&nbsp;:</b>&nbsp;&nbsp;&nbsp;example@gmail.com</a>

                            <div className="footer-icons">
                                <FaFacebook />
                                <FaTwitter />
                                <FaInstagramSquare />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copy">
                <h1>&copy;Copyrights Lorem ipsum dolor sit amet elit quasi temporibus iusto natus quis, 2024.</h1>
            </div>
        </section>
    )
}

export default Footer
