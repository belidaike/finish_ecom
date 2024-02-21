import React, { useContext, useEffect } from 'react'
import './productDisplay.css'
import { useLocation, useParams } from 'react-router-dom'
import { PRODUCTS } from "../../products";
import Footer from '../footerSection/footer';
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from "react-router-dom";



const ProductDisplay = () => {
    const navigate = useNavigate()

    // scroll to top
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    const { id } = useParams()
    // scroll top end

    const item = PRODUCTS.find((pId) => pId.id === parseInt(id))

    const { addToCart, setCountCart, cartItems } = useContext(ShopContext)
    const cartItemCount = cartItems[id];

    // console.log(id)

    return (
        <div className='productDisplay-wrapper'>
            <div className="paddings productDisplay-container">
                <div className="flexStart productDisplay-left">
                    <div className='flexColCenter productDisplay-left1'>
                        <img src={item.productImage} width={60} alt="" />
                        <img src={item.productImage} width={60} alt="" />
                        <img src={item.productImage} width={60} alt="" />
                        <img src={item.productImage} width={60} alt="" />
                    </div>
                    <div className='productDisplay-left2'>
                        <img src={item.productImage} alt="" />
                    </div>
                </div>
                <div className="productDisplay-right">
                    <h1>{item.productName}</h1>
                    <h3>${item.price}</h3>
                    <p>{item.productDescription}</p>
                    <div className="flexStart buttons" style={{ gap: '3rem' }}>
                        <button className="button2" onClick={() => {
                            navigate('/cart'), addToCart(id), setCountCart(n => n + 1)
                        }}>Buy now</button>


                        <button className="button"
                            onClick={() => {
                                addToCart(id), setCountCart(n => n + 1)
                            }}
                        >
                            Add to cart{cartItemCount > 0
                                ? ` (${cartItemCount})`
                                : ``
                            }
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default ProductDisplay
