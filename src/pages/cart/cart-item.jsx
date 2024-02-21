import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from 'react-router-dom';

const CartItem = (props) => {
    const { id, productName, price, productImage, productCategory } = props.data;
    const { cartItems, removeFromCart, addToCart, removeAll, updateCartItemCount, setCountCart } = useContext(ShopContext)
    const cartItemCount = cartItems[id];
    const navigate = useNavigate()


    return (
        <div className='cartItems'>

            <img src={productImage} width={200} onClick={() => navigate(`/product/${id}`)} alt="" />
            <h1>{productName}</h1>
            <h1>{price > 1000 ? `$${price / 1000}` : `$${price}`}</h1>
            <h1>{productCategory}</h1>
            <div className='cart-options'>
                <button className='button' onClick={() => { removeFromCart(id), setCountCart(n => n - 1) }}>-</button>
                <input type="number"
                    value={cartItems[id]}
                    onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                />
                <button className='button2' onClick={() => { addToCart(id), setCountCart(n => n + 1) }}>+</button>

            </div>
            <button className='button3' onClick={() => { removeAll(id), setCountCart(n => n - cartItemCount) }}>x</button>
        </div>
    )
}

export default CartItem