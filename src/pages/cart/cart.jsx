import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import CartItem from './cart-item'
import './cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const { cartItems, getTotalCartAmount, filteredProducts, setSearch } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    const nav = useNavigate()
    return (
        <div className='paddings cart'>
            <div className="cart-container">

                {filteredProducts.length > 0 ?
                    (
                        <>
                            <h1 className="cart-title">Your Cart</h1>

                            {filteredProducts.map(
                                (item) => {
                                    if (cartItems[item.id] !== 0) {
                                        return <CartItem data={item} key={item.id} />
                                    }
                                }
                            )}
                            {totalAmount > 0 ? (
                                <div>

                                    <div className="paddings cart-total">


                                        <h1>Total amount: &nbsp;
                                            {
                                                totalAmount > 1000 ? `$${totalAmount / 1000}` : `$${totalAmount}`
                                            }
                                        </h1>

                                    </div>
                                    <div className='cart-buttons'>
                                        <button className="button" onClick={() => { nav('/'), setSearch('') }}>Shop more</button>
                                        <button className="button2">Checkout</button>
                                    </div>
                                </div>

                            ) :
                                (
                                    <div className='paddings emptycart'>
                                        <i><h1>Your cart is empty!</h1></i>
                                        <button className='button2' onClick={() => { nav('/'), setSearch('') }}>Shop Now!</button>
                                    </div>
                                )
                            }
                        </>
                    )

                    : <div className='paddings noItem'><h3>There is no such item found.</h3></div>
                }
            </div>
        </div >
    )
}

export default Cart
